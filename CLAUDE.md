# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고할 가이드를 제공합니다.

## 프로젝트 개요

영어 단어 마스터는 테마별 퀴즈를 통해 영어 단어를 학습하는 인터랙티브 웹 애플리케이션입니다. 10개 테마에 총 400개 단어가 있으며, 객관식과 타이핑 모드를 지원합니다. Firebase Authentication과 Database를 사용한 사용자 인증 및 클라우드 데이터 저장 시스템을 구현했습니다.

## 명령어

### 개발 서버
```bash
# 로컬 개발 서버 시작 (Python 3)
python3 -m http.server 8000

# 대체 서버 옵션
python -m http.server 8000
npx serve .
```

### 테스트
```bash
# 자동화된 테스트 프레임워크 없음 - 브라우저에서 수동 테스트
# Chrome에서 http://localhost:8000 열기 (최상의 호환성)
```

### 배포
```bash
# GitHub Pages를 통한 자동 배포
git push origin main
```

### 사용량 모니터링
```bash
# Claude Code 사용량 통계 확인
ccusage
```

## 아키텍처

### 핵심 기술
- **프론트엔드**: 순수 HTML5, CSS3, JavaScript (ES6+)
- **인증**: Firebase Authentication (사용자 로그인/회원가입)
- **데이터베이스**: Firebase Realtime Database (사용자 데이터 및 리더보드)
- **보안**: Firebase Security Rules (UID 기반 접근 제어)
- **저장소**: LocalStorage (오프라인 진도 저장)
- **스타일링**: CSS Grid/Flexbox와 CSS 커스텀 속성으로 테마 구현
- **오디오**: Web Speech API (발음 기능)

### 파일 구조
- **index.html**: 로그인/회원가입 모달과 메인 UI 컴포넌트 포함
- **script.js**: Firebase Auth 기반 인증 시스템, 게임 로직, 단어 데이터
- **leaderboard.js**: 온라인 리더보드를 위한 Firebase 통합
- **firebase-config.js**: Firebase 설정 (Authentication & Database API 키)
- **firebase-config.template.js**: Firebase 설정 템플릿
- **style.css**: 로그인 UI 및 라이트/다크 테마 스타일링

### 주요 기능 아키텍처

#### 테마 시스템
- 10개 단어 테마 (비즈니스, 과학, 여행, 일상, 교육, IT, 의료, 법률, 요리, 스포츠)
- 각 테마는 영어 단어, 한국어 뜻, 품사가 포함된 40개 단어로 구성
- 테마별 진도 추적 및 완료 통계

#### 학습 모드
- **객관식**: 4지선다 퀴즈 (키보드 단축키 1-4번 지원)
- **타이핑 모드**: 직접 입력 및 지능형 답안 검증
- **자동 진행**: 선택적 2초 자동 다음 문제 이동

#### 사용자 인증 시스템
- **Firebase Authentication**: 닉네임/비밀번호 기반 사용자 등록 및 로그인
- **UID 기반 데이터 격리**: 각 사용자의 고유 ID로 완벽한 데이터 분리
- **실시간 세션 관리**: onAuthStateChanged로 로그인 상태 자동 감지
- **보안 규칙**: Firebase Database 접근 권한을 UID로 엄격히 제어

#### 데이터 지속성
- **Firebase Database**: 사용자별 학습 진도, 점수, 통계 클라우드 저장
- **LocalStorage**: 오프라인 백업 및 임시 데이터 저장
- **하이브리드 시스템**: Firebase 우선, 연결 실패 시 로컬 저장소 사용

#### UI 시스템
- **다크/라이트 테마**: CSS 커스텀 속성과 토글 버튼
- **반응형 디자인**: 세로 레이아웃으로 모바일 최적화
- **모달 시스템**: 완료 화면, 리더보드, 통계 대시보드
- **소셜 기능**: Canvas로 생성된 이미지 카드 점수 공유

### 코드 패턴

#### 인증 시스템
```javascript
// Firebase Auth 기반 AuthManager 클래스
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.auth = firebase.auth();
    }
    
    // 닉네임을 가짜 이메일로 변환
    nicknameToEmail(nickname) {
        return `${nickname}@vocabtool.app`;
    }
    
    // UID 기반 사용자 데이터 저장
    async saveUserData(uid, data) {
        await this.database.ref(`users/${uid}`).set(data);
    }
}
```

#### 상태 관리
```javascript
// Firebase Auth 상태 변화 감지
this.auth.onAuthStateChanged((user) => {
    if (user) {
        this.loadUserData(user);
    } else {
        this.showLoginScreen();
    }
});
```

#### Firebase 통합
```javascript
// Firebase 인증 및 데이터베이스 초기화
this.auth = firebase.auth();
this.database = firebase.database();
```

#### 테마 전환
```javascript
// 테마 설정을 위한 CSS 커스텀 속성
document.documentElement.setAttribute('data-theme', theme);
```

## 개발 참고사항

### 브라우저 호환성
- **주요**: Chrome (Speech API 지원을 위해 권장)
- **보조**: Safari, Firefox, Edge
- **모바일**: iOS Safari, Chrome Mobile

### Firebase 설정
1. `firebase-config.template.js`를 `firebase-config.js`로 복사
2. Firebase Console에서 프로젝트 생성 및 Authentication, Database 활성화
3. 실제 Firebase 설정 (API Key, Database URL) 추가
4. Authentication에서 이메일/비밀번호 로그인 활성화
5. Database 보안 규칙 설정:
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "leaderboard": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

### 단어 데이터 구조
```javascript
{
    word: "achieve",        // 영어 단어
    meaning: "달성하다",     // 한국어 번역  
    type: "동사"           // 한국어 품사
}
```

### 로컬 개발
- 로컬 테스트용 Python HTTP 서버 사용
- Chrome DevTools로 디버깅
- Firebase Auth 테스트: 회원가입/로그인 플로우
- 사용자별 데이터 격리 확인
- 온라인/오프라인 모드 모두 테스트
- 음성 합성 작동 확인 (Chrome만 해당)

### 성능 고려사항
- Firebase Authentication 초기화 시간
- 시작 시 대용량 단어 데이터셋(400개 단어) 로드
- Firebase Database 실시간 동기화
- 지속성을 위한 LocalStorage 백업 시스템
- 소셜 공유 이미지 생성을 위한 Canvas 연산
- 리더보드용 Firebase 실시간 리스너

## 개발 히스토리

### v3.6.0 Firebase Authentication 구현 (2025-06-29)

**구현된 주요 기능:**
- Firebase Authentication SDK 통합
- 닉네임 기반 사용자 친화적 로그인 시스템
- UID 기반 사용자 데이터 완전 격리
- 엔터프라이즈급 Firebase 보안 규칙 적용
- 실시간 인증 상태 관리 및 세션 지속성

**실전 테스트 결과:**
- 사용자 "테스트마스터" 계정으로 완전한 학습 여정 테스트
- 비즈니스 영어 테마 20문제 중 14개 정답 (70% 정답률)
- Firebase Database에 사용자 통계 정상 저장
- 리더보드 시스템 완벽 작동 확인

**기술적 구현 세부사항:**
- 닉네임을 `nickname@vocabtool.app` 형태로 변환하여 Firebase Auth 호환성 확보
- `onAuthStateChanged` 리스너로 실시간 로그인 상태 추적
- 사용자별 `/users/{uid}` 경로로 데이터 완전 분리
- 사용자 친화적 에러 메시지 매핑 시스템
- CSS Grid 레이아웃으로 UI 겹침 문제 해결

**보안 구현:**
```javascript
// Firebase Database 보안 규칙
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

이 업데이트로 앱이 단순한 학습 도구에서 완전한 사용자 관리 시스템을 갖춘 엔터프라이즈급 애플리케이션으로 진화했습니다.

### v3.7.0 고급 랭킹 시스템 구현 (2025-06-30)

**구현된 주요 기능:**
- **테마별 랭킹 시스템**: 각 테마별로 독립적인 순위 확인 가능
- **통합 랭킹 시스템**: 모든 테마 점수 합산으로 진정한 "마스터" 사용자 선별
- **고급 리더보드 UI**: 4개 탭(전체/통합/테마별/개인) 구조로 확장
- **새 사용자 데이터 격리**: 회원가입 시 LocalStorage 초기화로 깨끗한 시작 보장

**리더보드 시스템 아키텍처:**
```javascript
// 테마별 랭킹
async getThemeLeaderboard(themeName, limit = 10) {
    // Firebase/로컬 데이터에서 테마별 최고 점수 집계
}

// 통합 랭킹 (모든 테마 점수 합산)
async getTotalRanking(limit = 10) {
    // 사용자별 전체 테마 최고 점수 합산으로 순위 계산
}
```

**사용자 경험 개선:**
- 테마 선택 드롭다운으로 직관적인 테마별 순위 확인
- 완료 테마 수, 총 게임 수 등 종합 통계 표시
- 새 사용자 회원가입 시 복습하기 버튼 없는 깨끗한 시작
- 로그인 사용자 닉네임 자동 사용으로 리더보드 등록 간소화

**기술적 구현:**
- Firebase와 LocalStorage 하이브리드 랭킹 시스템
- 사용자별 테마 최고 점수 추적 및 집계
- 모바일 친화적 탭 스크롤 및 반응형 디자인
- 사용자별 데이터 완전 격리를 위한 `clearUserProgress()` 구현

이 업데이트로 사용자들은 자신의 실력을 다양한 관점에서 비교하고 경쟁할 수 있는 완전한 게임화된 학습 환경을 경험할 수 있게 되었습니다.