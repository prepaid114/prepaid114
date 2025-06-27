// 리더보드 및 점수 관리 시스템

class LeaderboardManager {
    constructor() {
        this.isOnline = false;
        this.currentUser = null;
        this.initializeUser();
    }

    async initialize() {
        this.isOnline = await initializeFirebase();
        if (this.isOnline) {
            console.log('Leaderboard initialized with Firebase');
        } else {
            console.log('Leaderboard running in offline mode');
        }
        return this.isOnline;
    }

    initializeUser() {
        // 세션 스토리지에서 사용자 정보 가져오기
        const savedUser = sessionStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
        }
    }

    // 사용자 닉네임 설정
    setUser(nickname) {
        if (!nickname || nickname.trim().length === 0) {
            throw new Error('닉네임을 입력해주세요');
        }

        this.currentUser = {
            id: this.generateUserId(nickname.trim()),
            nickname: nickname.trim(),
            joinedAt: new Date().toISOString()
        };

        sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        return this.currentUser;
    }

    // 닉네임 기반 사용자 ID 생성
    generateUserId(nickname) {
        return 'user_' + nickname.replace(/[^a-zA-Z0-9가-힣]/g, '_');
    }

    // 닉네임 중복 체크
    async isNicknameAvailable(nickname) {
        const userId = this.generateUserId(nickname.trim());
        
        // 온라인 모드에서 Firebase 체크
        if (this.isOnline && isFirebaseReady()) {
            try {
                const db = getDatabase();
                const snapshot = await db.ref('leaderboard/' + userId).once('value');
                return !snapshot.exists();
            } catch (error) {
                console.warn('Firebase nickname check failed:', error);
                // Firebase 체크 실패 시 로컬로 fallback
            }
        }
        
        // 오프라인 모드 또는 Firebase 실패 시 로컬 체크
        const localScores = JSON.parse(localStorage.getItem('localScores') || '[]');
        return !localScores.some(score => score.userId === userId);
    }

    // 점수 저장 (온라인/오프라인 하이브리드)
    async saveScore(scoreData) {
        if (!this.currentUser) {
            throw new Error('사용자 정보가 없습니다. 닉네임을 먼저 설정해주세요.');
        }

        const record = {
            userId: this.currentUser.id,
            nickname: this.currentUser.nickname,
            score: scoreData.score,
            accuracy: scoreData.accuracy,
            theme: scoreData.theme,
            completedAt: new Date().toISOString(),
            studyTime: scoreData.studyTime || 0
        };

        // 로컬에 항상 저장
        this.saveScoreLocally(record);

        // Firebase에 저장 시도
        if (this.isOnline && isFirebaseReady()) {
            try {
                await this.saveScoreToFirebase(record);
                console.log('Score saved to Firebase');
                return { success: true, online: true };
            } catch (error) {
                console.warn('Failed to save to Firebase:', error);
                return { success: true, online: false, error: error.message };
            }
        }

        return { success: true, online: false };
    }

    // Firebase에 점수 저장
    async saveScoreToFirebase(record) {
        const db = getDatabase();
        const leaderboardRef = db.ref('leaderboard/' + record.userId);
        
        // 기존 사용자 데이터 가져오기
        const snapshot = await leaderboardRef.once('value');
        const existingData = snapshot.val() || {};

        // 최고 점수 및 통계 업데이트
        const updatedData = {
            nickname: record.nickname,
            totalGames: (existingData.totalGames || 0) + 1,
            bestScore: Math.max(existingData.bestScore || 0, record.score),
            totalScore: (existingData.totalScore || 0) + record.score,
            averageAccuracy: this.calculateAverageAccuracy(existingData, record),
            lastPlayed: record.completedAt,
            themes: {
                ...existingData.themes,
                [record.theme]: {
                    timesPlayed: ((existingData.themes?.[record.theme]?.timesPlayed) || 0) + 1,
                    bestScore: Math.max((existingData.themes?.[record.theme]?.bestScore) || 0, record.score),
                    lastScore: record.score,
                    lastAccuracy: record.accuracy
                }
            }
        };

        await leaderboardRef.set(updatedData);

        // 게임 기록도 별도 저장
        const gameRef = db.ref('games').push();
        await gameRef.set(record);
    }

    // 평균 정확도 계산
    calculateAverageAccuracy(existingData, newRecord) {
        const totalGames = (existingData.totalGames || 0) + 1;
        const currentTotalAccuracy = (existingData.averageAccuracy || 0) * (existingData.totalGames || 0);
        return Math.round((currentTotalAccuracy + newRecord.accuracy) / totalGames);
    }

    // 로컬에 점수 저장 (사용자별 최고 점수 유지)
    saveScoreLocally(record) {
        const localScores = JSON.parse(localStorage.getItem('localScores') || '[]');
        
        // 같은 사용자의 기존 기록 찾기
        const existingIndex = localScores.findIndex(score => score.userId === record.userId);
        
        if (existingIndex !== -1) {
            // 기존 기록이 있으면 더 높은 점수로만 업데이트
            if (record.score > localScores[existingIndex].score) {
                localScores[existingIndex] = record;
            }
        } else {
            // 새 사용자면 추가
            localScores.push(record);
        }
        
        // 점수 순으로 정렬하고 상위 50개만 유지
        localScores.sort((a, b) => b.score - a.score);
        if (localScores.length > 50) {
            localScores.splice(50);
        }
        
        localStorage.setItem('localScores', JSON.stringify(localScores));
    }

    // 리더보드 데이터 가져오기
    async getLeaderboard(limit = 10) {
        if (this.isOnline && isFirebaseReady()) {
            try {
                return await this.getFirebaseLeaderboard(limit);
            } catch (error) {
                console.warn('Failed to load Firebase leaderboard:', error);
            }
        }
        
        // 오프라인 모드: 로컬 데이터 사용
        return this.getLocalLeaderboard(limit);
    }

    // Firebase에서 리더보드 가져오기
    async getFirebaseLeaderboard(limit) {
        const db = getDatabase();
        const snapshot = await db.ref('leaderboard')
            .orderByChild('bestScore')
            .limitToLast(limit)
            .once('value');
        
        const data = snapshot.val() || {};
        return Object.values(data)
            .sort((a, b) => b.bestScore - a.bestScore)
            .slice(0, limit);
    }

    // 로컬에서 리더보드 가져오기
    getLocalLeaderboard(limit) {
        const localScores = JSON.parse(localStorage.getItem('localScores') || '[]');
        
        // 사용자별 최고 점수만 추출
        const userBestScores = {};
        localScores.forEach(record => {
            if (!userBestScores[record.userId] || userBestScores[record.userId].score < record.score) {
                userBestScores[record.userId] = record;
            }
        });

        return Object.values(userBestScores)
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    }

    // 현재 사용자 정보 가져오기
    getCurrentUser() {
        return this.currentUser;
    }

    // 연결 상태 확인
    isConnected() {
        return this.isOnline;
    }
}

// 전역 리더보드 매니저 인스턴스
window.leaderboardManager = new LeaderboardManager();