// Firebase 설정 템플릿 파일
// 실제 사용을 위해서는 이 파일을 복사해서 firebase-config.js로 만들고 실제 값으로 교체하세요

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "your-project.firebaseapp.com", 
    databaseURL: "https://your-project-default-rtdb.region.firebasedatabase.app",
    projectId: "your-project-id",
    storageBucket: "your-project.firebasestorage.app",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};

// Firebase 초기화
let app, database;

async function initializeFirebase() {
    try {
        // Firebase SDK 로드 확인
        if (typeof firebase === 'undefined') {
            console.warn('Firebase SDK not loaded. Running in offline mode.');
            return false;
        }

        // 실제 Firebase 설정이 없는 경우 오프라인 모드로 실행
        if (firebaseConfig.apiKey === "YOUR_API_KEY_HERE") {
            console.warn('Firebase not configured. Running in offline mode.');
            return false;
        }

        // Firebase 앱 초기화
        app = firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        
        console.log('Firebase initialized successfully');
        return true;
    } catch (error) {
        console.warn('Firebase initialization failed:', error);
        return false;
    }
}

// Firebase 연결 상태 확인
function isFirebaseReady() {
    return app && database;
}

// 데이터베이스 레퍼런스 가져오기
function getDatabase() {
    return database;
}