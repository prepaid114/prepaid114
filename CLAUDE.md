# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고할 가이드를 제공합니다.

## 프로젝트 개요

영어 단어 마스터는 테마별 퀴즈를 통해 영어 단어를 학습하는 인터랙티브 웹 애플리케이션입니다. 10개 테마에 총 400개 단어가 있으며, 객관식과 타이핑 모드를 지원합니다.

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
- **데이터베이스**: Firebase Realtime Database (리더보드용)
- **저장소**: LocalStorage (오프라인 진도 저장)
- **스타일링**: CSS Grid/Flexbox와 CSS 커스텀 속성으로 테마 구현
- **오디오**: Web Speech API (발음 기능)

### 파일 구조
- **index.html**: 모달과 UI 컴포넌트가 포함된 메인 HTML 구조
- **script.js**: 핵심 게임 로직, 단어 데이터, 사용자 상호작용
- **leaderboard.js**: 온라인 리더보드를 위한 Firebase 통합
- **firebase-config.js**: Firebase 설정 (실제 API 키 포함)
- **firebase-config.template.js**: Firebase 설정 템플릿
- **style.css**: 라이트/다크 테마를 포함한 모든 스타일링

### 주요 기능 아키텍처

#### 테마 시스템
- 10개 단어 테마 (비즈니스, 과학, 여행, 일상, 교육, IT, 의료, 법률, 요리, 스포츠)
- 각 테마는 영어 단어, 한국어 뜻, 품사가 포함된 40개 단어로 구성
- 테마별 진도 추적 및 완료 통계

#### 학습 모드
- **객관식**: 4지선다 퀴즈 (키보드 단축키 1-4번 지원)
- **타이핑 모드**: 직접 입력 및 지능형 답안 검증
- **자동 진행**: 선택적 2초 자동 다음 문제 이동

#### 데이터 지속성
- **LocalStorage**: 사용자 진도, 점수, 학습 연속일, 복습용 틀린 답
- **Firebase**: 온라인 리더보드, 소셜 기능, 기기 간 동기화
- **하이브리드 시스템**: 로컬 데이터로 오프라인 작동, 온라인 시 동기화

#### UI 시스템
- **다크/라이트 테마**: CSS 커스텀 속성과 토글 버튼
- **반응형 디자인**: 세로 레이아웃으로 모바일 최적화
- **모달 시스템**: 완료 화면, 리더보드, 통계 대시보드
- **소셜 기능**: Canvas로 생성된 이미지 카드 점수 공유

### 코드 패턴

#### 상태 관리
```javascript
// script.js의 전역 상태
let currentTheme = 'business';
let currentQuestionIndex = 0;
let vocabularyQuizProgress = {};  // LocalStorage 지속성
```

#### Firebase 통합
```javascript
// leaderboard.js의 조건부 Firebase 사용
if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
    // 온라인 기능
} else {
    // 오프라인 대체
}
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
2. 실제 Firebase 설정 추가
3. Realtime Database 규칙에서 읽기/쓰기 접근 허용 확인

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
- 온라인/오프라인 모드 모두 테스트
- 음성 합성 작동 확인 (Chrome만 해당)

### 성능 고려사항
- 시작 시 대용량 단어 데이터셋(400개 단어) 로드
- 지속성을 위한 LocalStorage 광범위 사용
- 소셜 공유 이미지 생성을 위한 Canvas 연산
- 리더보드용 Firebase 실시간 리스너