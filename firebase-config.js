// Firebase 설정 파일 (로컬 전용 - Git에 추가되지 않음)

const firebaseConfig = {
    apiKey: "AIzaSyAs7DgCoVgbjap1O76U3elAcCradyv97J0",
    authDomain: "english-vocab-tool-new.firebaseapp.com",
    databaseURL: "https://english-vocab-tool-new-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "english-vocab-tool-new",
    storageBucket: "english-vocab-tool-new.firebasestorage.app",
    messagingSenderId: "717687339880",
    appId: "1:717687339880:web:b9107991c49af8d0bcf4dd"
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