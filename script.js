const vocabularyThemes = {
    business: {
        name: "비즈니스 영어",
        icon: "💼",
        words: [
            { word: "achieve", meaning: "달성하다", type: "동사" },
            { word: "acquire", meaning: "획득하다", type: "동사" },
            { word: "agreement", meaning: "합의, 계약", type: "명사" },
            { word: "budget", meaning: "예산", type: "명사" },
            { word: "colleague", meaning: "동료", type: "명사" },
            { word: "conference", meaning: "회의", type: "명사" },
            { word: "deadline", meaning: "마감일", type: "명사" },
            { word: "department", meaning: "부서", type: "명사" },
            { word: "efficient", meaning: "효율적인", type: "형용사" },
            { word: "evaluate", meaning: "평가하다", type: "동사" },
            { word: "executive", meaning: "임원", type: "명사" },
            { word: "financial", meaning: "재정의", type: "형용사" },
            { word: "investment", meaning: "투자", type: "명사" },
            { word: "management", meaning: "관리", type: "명사" },
            { word: "negotiate", meaning: "협상하다", type: "동사" },
            { word: "opportunity", meaning: "기회", type: "명사" },
            { word: "profit", meaning: "이익", type: "명사" },
            { word: "proposal", meaning: "제안서", type: "명사" },
            { word: "strategy", meaning: "전략", type: "명사" },
            { word: "supervisor", meaning: "상사", type: "명사" },
            { word: "analysis", meaning: "분석", type: "명사" },
            { word: "corporate", meaning: "기업의", type: "형용사" },
            { word: "customer", meaning: "고객", type: "명사" },
            { word: "develop", meaning: "개발하다", type: "동사" },
            { word: "economy", meaning: "경제", type: "명사" },
            { word: "entrepreneur", meaning: "기업가", type: "명사" },
            { word: "market", meaning: "시장", type: "명사" },
            { word: "productivity", meaning: "생산성", type: "명사" },
            { word: "revenue", meaning: "수익", type: "명사" },
            { word: "stakeholder", meaning: "이해관계자", type: "명사" },
            { word: "consultant", meaning: "컨설턴트", type: "명사" },
            { word: "franchise", meaning: "프랜차이즈", type: "명사" },
            { word: "innovation", meaning: "혁신", type: "명사" },
            { word: "partnership", meaning: "파트너십", type: "명사" },
            { word: "quarterly", meaning: "분기별", type: "형용사" },
            { word: "sustainability", meaning: "지속가능성", type: "명사" },
            { word: "transaction", meaning: "거래", type: "명사" },
            { word: "workflow", meaning: "업무흐름", type: "명사" },
            { word: "benchmark", meaning: "기준점", type: "명사" },
            { word: "compliance", meaning: "준수", type: "명사" }
        ]
    },
    science: {
        name: "과학 기술",
        icon: "🔬",
        words: [
            { word: "analyze", meaning: "분석하다", type: "동사" },
            { word: "atmosphere", meaning: "대기", type: "명사" },
            { word: "biology", meaning: "생물학", type: "명사" },
            { word: "chemistry", meaning: "화학", type: "명사" },
            { word: "data", meaning: "데이터", type: "명사" },
            { word: "evolution", meaning: "진화", type: "명사" },
            { word: "experiment", meaning: "실험", type: "명사" },
            { word: "formula", meaning: "공식", type: "명사" },
            { word: "genetics", meaning: "유전학", type: "명사" },
            { word: "hypothesis", meaning: "가설", type: "명사" },
            { word: "laboratory", meaning: "실험실", type: "명사" },
            { word: "molecule", meaning: "분자", type: "명사" },
            { word: "observation", meaning: "관찰", type: "명사" },
            { word: "physics", meaning: "물리학", type: "명사" },
            { word: "research", meaning: "연구", type: "명사" },
            { word: "scientific", meaning: "과학적인", type: "형용사" },
            { word: "technology", meaning: "기술", type: "명사" },
            { word: "theory", meaning: "이론", type: "명사" },
            { word: "universe", meaning: "우주", type: "명사" },
            { word: "variable", meaning: "변수", type: "명사" },
            { word: "algorithm", meaning: "알고리즘", type: "명사" },
            { word: "bacteria", meaning: "박테리아", type: "명사" },
            { word: "catalyst", meaning: "촉매", type: "명사" },
            { word: "database", meaning: "데이터베이스", type: "명사" },
            { word: "electron", meaning: "전자", type: "명사" },
            { word: "fossil", meaning: "화석", type: "명사" },
            { word: "genome", meaning: "게놈", type: "명사" },
            { word: "hydrogen", meaning: "수소", type: "명사" },
            { word: "innovation", meaning: "혁신", type: "명사" },
            { word: "junction", meaning: "접합부", type: "명사" },
            { word: "kinetic", meaning: "운동의", type: "형용사" },
            { word: "laser", meaning: "레이저", type: "명사" },
            { word: "membrane", meaning: "막", type: "명사" },
            { word: "neutron", meaning: "중성자", type: "명사" },
            { word: "organic", meaning: "유기의", type: "형용사" },
            { word: "protein", meaning: "단백질", type: "명사" },
            { word: "quantum", meaning: "양자", type: "명사" },
            { word: "radiation", meaning: "방사선", type: "명사" },
            { word: "synthesis", meaning: "합성", type: "명사" },
            { word: "velocity", meaning: "속도", type: "명사" }
        ]
    },
    travel: {
        name: "여행 & 교통",
        icon: "✈️",
        words: [
            { word: "accommodation", meaning: "숙박시설", type: "명사" },
            { word: "adventure", meaning: "모험", type: "명사" },
            { word: "airport", meaning: "공항", type: "명사" },
            { word: "booking", meaning: "예약", type: "명사" },
            { word: "culture", meaning: "문화", type: "명사" },
            { word: "destination", meaning: "목적지", type: "명사" },
            { word: "explore", meaning: "탐험하다", type: "동사" },
            { word: "flight", meaning: "비행편", type: "명사" },
            { word: "guide", meaning: "가이드", type: "명사" },
            { word: "hotel", meaning: "호텔", type: "명사" },
            { word: "itinerary", meaning: "일정표", type: "명사" },
            { word: "journey", meaning: "여행", type: "명사" },
            { word: "luggage", meaning: "짐", type: "명사" },
            { word: "passport", meaning: "여권", type: "명사" },
            { word: "reservation", meaning: "예약", type: "명사" },
            { word: "sightseeing", meaning: "관광", type: "명사" },
            { word: "ticket", meaning: "티켓", type: "명사" },
            { word: "tourist", meaning: "관광객", type: "명사" },
            { word: "transportation", meaning: "교통", type: "명사" },
            { word: "vacation", meaning: "휴가", type: "명사" },
            { word: "backpack", meaning: "배낭", type: "명사" },
            { word: "border", meaning: "국경", type: "명사" },
            { word: "currency", meaning: "화폐", type: "명사" },
            { word: "departure", meaning: "출발", type: "명사" },
            { word: "embassy", meaning: "대사관", type: "명사" },
            { word: "festival", meaning: "축제", type: "명사" },
            { word: "geography", meaning: "지리", type: "명사" },
            { word: "highway", meaning: "고속도로", type: "명사" },
            { word: "immigration", meaning: "출입국", type: "명사" },
            { word: "jet lag", meaning: "시차병", type: "명사" },
            { word: "landmark", meaning: "랜드마크", type: "명사" },
            { word: "metro", meaning: "지하철", type: "명사" },
            { word: "navigation", meaning: "내비게이션", type: "명사" },
            { word: "overseas", meaning: "해외의", type: "형용사" },
            { word: "pilgrimage", meaning: "순례", type: "명사" },
            { word: "railway", meaning: "철도", type: "명사" },
            { word: "souvenir", meaning: "기념품", type: "명사" },
            { word: "terminal", meaning: "터미널", type: "명사" },
            { word: "visa", meaning: "비자", type: "명사" },
            { word: "voyage", meaning: "항해", type: "명사" }
        ]
    },
    daily: {
        name: "일상 생활",
        icon: "🏠",
        words: [
            { word: "breakfast", meaning: "아침식사", type: "명사" },
            { word: "celebrate", meaning: "축하하다", type: "동사" },
            { word: "comfortable", meaning: "편안한", type: "형용사" },
            { word: "dinner", meaning: "저녁식사", type: "명사" },
            { word: "exercise", meaning: "운동", type: "명사" },
            { word: "family", meaning: "가족", type: "명사" },
            { word: "grocery", meaning: "식료품", type: "명사" },
            { word: "healthy", meaning: "건강한", type: "형용사" },
            { word: "kitchen", meaning: "주방", type: "명사" },
            { word: "laundry", meaning: "세탁", type: "명사" },
            { word: "medicine", meaning: "약", type: "명사" },
            { word: "neighbor", meaning: "이웃", type: "명사" },
            { word: "outdoors", meaning: "야외", type: "부사" },
            { word: "pet", meaning: "애완동물", type: "명사" },
            { word: "recipe", meaning: "요리법", type: "명사" },
            { word: "shopping", meaning: "쇼핑", type: "명사" },
            { word: "television", meaning: "텔레비전", type: "명사" },
            { word: "umbrella", meaning: "우산", type: "명사" },
            { word: "vegetable", meaning: "야채", type: "명사" },
            { word: "weekend", meaning: "주말", type: "명사" },
            { word: "appointment", meaning: "약속", type: "명사" },
            { word: "budget", meaning: "예산", type: "명사" },
            { word: "commute", meaning: "통근하다", type: "동사" },
            { word: "dentist", meaning: "치과의사", type: "명사" },
            { word: "emergency", meaning: "응급상황", type: "명사" },
            { word: "furniture", meaning: "가구", type: "명사" },
            { word: "garbage", meaning: "쓰레기", type: "명사" },
            { word: "hobby", meaning: "취미", type: "명사" },
            { word: "insurance", meaning: "보험", type: "명사" },
            { word: "journal", meaning: "일기", type: "명사" },
            { word: "kindergarten", meaning: "유치원", type: "명사" },
            { word: "lifestyle", meaning: "생활방식", type: "명사" },
            { word: "maintenance", meaning: "유지보수", type: "명사" },
            { word: "nutrition", meaning: "영양", type: "명사" },
            { word: "organization", meaning: "정리", type: "명사" },
            { word: "pharmacy", meaning: "약국", type: "명사" },
            { word: "routine", meaning: "일상", type: "명사" },
            { word: "schedule", meaning: "일정", type: "명사" },
            { word: "tradition", meaning: "전통", type: "명사" },
            { word: "utility", meaning: "공공요금", type: "명사" }
        ]
    },
    academic: {
        name: "학문 & 교육",
        icon: "📚",
        words: [
            { word: "academic", meaning: "학문의", type: "형용사" },
            { word: "analysis", meaning: "분석", type: "명사" },
            { word: "assignment", meaning: "과제", type: "명사" },
            { word: "calculate", meaning: "계산하다", type: "동사" },
            { word: "curriculum", meaning: "교육과정", type: "명사" },
            { word: "debate", meaning: "토론", type: "명사" },
            { word: "education", meaning: "교육", type: "명사" },
            { word: "examination", meaning: "시험", type: "명사" },
            { word: "graduate", meaning: "졸업생", type: "명사" },
            { word: "knowledge", meaning: "지식", type: "명사" },
            { word: "lecture", meaning: "강의", type: "명사" },
            { word: "library", meaning: "도서관", type: "명사" },
            { word: "mathematics", meaning: "수학", type: "명사" },
            { word: "professor", meaning: "교수", type: "명사" },
            { word: "scholarship", meaning: "장학금", type: "명사" },
            { word: "semester", meaning: "학기", type: "명사" },
            { word: "student", meaning: "학생", type: "명사" },
            { word: "textbook", meaning: "교과서", type: "명사" },
            { word: "university", meaning: "대학교", type: "명사" },
            { word: "vocabulary", meaning: "어휘", type: "명사" },
            { word: "bibliography", meaning: "참고문헌", type: "명사" },
            { word: "certificate", meaning: "증명서", type: "명사" },
            { word: "discipline", meaning: "학문분야", type: "명사" },
            { word: "essay", meaning: "에세이", type: "명사" },
            { word: "faculty", meaning: "교수진", type: "명사" },
            { word: "grammar", meaning: "문법", type: "명사" },
            { word: "hypothesis", meaning: "가설", type: "명사" },
            { word: "internship", meaning: "인턴십", type: "명사" },
            { word: "journal", meaning: "학술지", type: "명사" },
            { word: "kindergarten", meaning: "유치원", type: "명사" },
            { word: "laboratory", meaning: "실험실", type: "명사" },
            { word: "methodology", meaning: "방법론", type: "명사" },
            { word: "notation", meaning: "표기법", type: "명사" },
            { word: "outline", meaning: "개요", type: "명사" },
            { word: "plagiarism", meaning: "표절", type: "명사" },
            { word: "qualification", meaning: "자격", type: "명사" },
            { word: "research", meaning: "연구", type: "명사" },
            { word: "statistics", meaning: "통계학", type: "명사" },
            { word: "thesis", meaning: "논문", type: "명사" },
            { word: "undergraduate", meaning: "학부생", type: "명사" }
        ]
    },
    technology: {
        name: "IT & 컴퓨터",
        icon: "💻",
        words: [
            { word: "algorithm", meaning: "알고리즘", type: "명사" },
            { word: "application", meaning: "애플리케이션", type: "명사" },
            { word: "backup", meaning: "백업", type: "명사" },
            { word: "browser", meaning: "브라우저", type: "명사" },
            { word: "cloud", meaning: "클라우드", type: "명사" },
            { word: "database", meaning: "데이터베이스", type: "명사" },
            { word: "download", meaning: "다운로드", type: "동사" },
            { word: "encryption", meaning: "암호화", type: "명사" },
            { word: "firewall", meaning: "방화벽", type: "명사" },
            { word: "graphics", meaning: "그래픽", type: "명사" },
            { word: "hardware", meaning: "하드웨어", type: "명사" },
            { word: "interface", meaning: "인터페이스", type: "명사" },
            { word: "javascript", meaning: "자바스크립트", type: "명사" },
            { word: "keyboard", meaning: "키보드", type: "명사" },
            { word: "laptop", meaning: "노트북", type: "명사" },
            { word: "monitor", meaning: "모니터", type: "명사" },
            { word: "network", meaning: "네트워크", type: "명사" },
            { word: "operating", meaning: "운영하는", type: "형용사" },
            { word: "password", meaning: "비밀번호", type: "명사" },
            { word: "processor", meaning: "프로세서", type: "명사" },
            { word: "programming", meaning: "프로그래밍", type: "명사" },
            { word: "router", meaning: "라우터", type: "명사" },
            { word: "server", meaning: "서버", type: "명사" },
            { word: "software", meaning: "소프트웨어", type: "명사" },
            { word: "storage", meaning: "저장소", type: "명사" },
            { word: "update", meaning: "업데이트", type: "동사" },
            { word: "virus", meaning: "바이러스", type: "명사" },
            { word: "website", meaning: "웹사이트", type: "명사" },
            { word: "wireless", meaning: "무선의", type: "형용사" },
            { word: "smartphone", meaning: "스마트폰", type: "명사" },
            { word: "artificial", meaning: "인공의", type: "형용사" },
            { word: "intelligence", meaning: "지능", type: "명사" },
            { word: "machine", meaning: "기계", type: "명사" },
            { word: "learning", meaning: "학습", type: "명사" },
            { word: "virtual", meaning: "가상의", type: "형용사" },
            { word: "reality", meaning: "현실", type: "명사" },
            { word: "blockchain", meaning: "블록체인", type: "명사" },
            { word: "cryptocurrency", meaning: "암호화폐", type: "명사" },
            { word: "cybersecurity", meaning: "사이버보안", type: "명사" },
            { word: "automation", meaning: "자동화", type: "명사" }
        ]
    },
    medical: {
        name: "의료 건강",
        icon: "🏥",
        words: [
            { word: "anatomy", meaning: "해부학", type: "명사" },
            { word: "antibiotic", meaning: "항생제", type: "명사" },
            { word: "appointment", meaning: "예약", type: "명사" },
            { word: "diagnosis", meaning: "진단", type: "명사" },
            { word: "emergency", meaning: "응급상황", type: "명사" },
            { word: "examination", meaning: "검사", type: "명사" },
            { word: "fever", meaning: "열", type: "명사" },
            { word: "hospital", meaning: "병원", type: "명사" },
            { word: "injection", meaning: "주사", type: "명사" },
            { word: "medicine", meaning: "약", type: "명사" },
            { word: "nurse", meaning: "간호사", type: "명사" },
            { word: "operation", meaning: "수술", type: "명사" },
            { word: "patient", meaning: "환자", type: "명사" },
            { word: "prescription", meaning: "처방전", type: "명사" },
            { word: "recovery", meaning: "회복", type: "명사" },
            { word: "surgeon", meaning: "외과의사", type: "명사" },
            { word: "symptom", meaning: "증상", type: "명사" },
            { word: "therapy", meaning: "치료", type: "명사" },
            { word: "treatment", meaning: "치료", type: "명사" },
            { word: "vaccine", meaning: "백신", type: "명사" },
            { word: "allergy", meaning: "알레르기", type: "명사" },
            { word: "bandage", meaning: "붕대", type: "명사" },
            { word: "cardiac", meaning: "심장의", type: "형용사" },
            { word: "diabetes", meaning: "당뇨병", type: "명사" },
            { word: "epidemic", meaning: "유행병", type: "명사" },
            { word: "fracture", meaning: "골절", type: "명사" },
            { word: "genetic", meaning: "유전의", type: "형용사" },
            { word: "hygiene", meaning: "위생", type: "명사" },
            { word: "immune", meaning: "면역의", type: "형용사" },
            { word: "laboratory", meaning: "실험실", type: "명사" },
            { word: "mental", meaning: "정신의", type: "형용사" },
            { word: "nutrition", meaning: "영양", type: "명사" },
            { word: "obesity", meaning: "비만", type: "명사" },
            { word: "physical", meaning: "신체의", type: "형용사" },
            { word: "quarantine", meaning: "격리", type: "명사" },
            { word: "radiation", meaning: "방사선", type: "명사" },
            { word: "specialist", meaning: "전문의", type: "명사" },
            { word: "trauma", meaning: "외상", type: "명사" },
            { word: "ultrasound", meaning: "초음파", type: "명사" },
            { word: "vitamin", meaning: "비타민", type: "명사" }
        ]
    },
    legal: {
        name: "법률 법무",
        icon: "⚖️",
        words: [
            { word: "attorney", meaning: "변호사", type: "명사" },
            { word: "court", meaning: "법원", type: "명사" },
            { word: "contract", meaning: "계약", type: "명사" },
            { word: "defendant", meaning: "피고", type: "명사" },
            { word: "evidence", meaning: "증거", type: "명사" },
            { word: "guilty", meaning: "유죄의", type: "형용사" },
            { word: "innocent", meaning: "무죄의", type: "형용사" },
            { word: "judge", meaning: "판사", type: "명사" },
            { word: "jury", meaning: "배심원", type: "명사" },
            { word: "lawsuit", meaning: "소송", type: "명사" },
            { word: "legal", meaning: "법적인", type: "형용사" },
            { word: "license", meaning: "면허", type: "명사" },
            { word: "plaintiff", meaning: "원고", type: "명사" },
            { word: "prosecution", meaning: "기소", type: "명사" },
            { word: "regulation", meaning: "규정", type: "명사" },
            { word: "statute", meaning: "법령", type: "명사" },
            { word: "testimony", meaning: "증언", type: "명사" },
            { word: "trial", meaning: "재판", type: "명사" },
            { word: "verdict", meaning: "평결", type: "명사" },
            { word: "witness", meaning: "증인", type: "명사" },
            { word: "appeal", meaning: "항소", type: "명사" },
            { word: "bail", meaning: "보석", type: "명사" },
            { word: "copyright", meaning: "저작권", type: "명사" },
            { word: "custody", meaning: "구금", type: "명사" },
            { word: "enforcement", meaning: "집행", type: "명사" },
            { word: "felony", meaning: "중죄", type: "명사" },
            { word: "guardian", meaning: "후견인", type: "명사" },
            { word: "hearing", meaning: "청문회", type: "명사" },
            { word: "inheritance", meaning: "상속", type: "명사" },
            { word: "jurisdiction", meaning: "관할권", type: "명사" },
            { word: "liability", meaning: "책임", type: "명사" },
            { word: "misdemeanor", meaning: "경범죄", type: "명사" },
            { word: "notary", meaning: "공증인", type: "명사" },
            { word: "oath", meaning: "맹세", type: "명사" },
            { word: "petition", meaning: "탄원서", type: "명사" },
            { word: "settlement", meaning: "합의", type: "명사" },
            { word: "subpoena", meaning: "소환장", type: "명사" },
            { word: "trademark", meaning: "상표", type: "명사" },
            { word: "violation", meaning: "위반", type: "명사" },
            { word: "warrant", meaning: "영장", type: "명사" }
        ]
    },
    cooking: {
        name: "요리 음식",
        icon: "🍳",
        words: [
            { word: "bake", meaning: "굽다", type: "동사" },
            { word: "boil", meaning: "끓이다", type: "동사" },
            { word: "chop", meaning: "썰다", type: "동사" },
            { word: "dice", meaning: "깍둑썰기하다", type: "동사" },
            { word: "fry", meaning: "튀기다", type: "동사" },
            { word: "grill", meaning: "굽다", type: "동사" },
            { word: "marinate", meaning: "재우다", type: "동사" },
            { word: "mince", meaning: "다지다", type: "동사" },
            { word: "roast", meaning: "구워내다", type: "동사" },
            { word: "sauté", meaning: "볶다", type: "동사" },
            { word: "simmer", meaning: "약하게 끓이다", type: "동사" },
            { word: "steam", meaning: "찌다", type: "동사" },
            { word: "stir", meaning: "젓다", type: "동사" },
            { word: "whisk", meaning: "휘젓다", type: "동사" },
            { word: "blend", meaning: "섞다", type: "동사" },
            { word: "ingredient", meaning: "재료", type: "명사" },
            { word: "recipe", meaning: "조리법", type: "명사" },
            { word: "seasoning", meaning: "양념", type: "명사" },
            { word: "spice", meaning: "향신료", type: "명사" },
            { word: "flavor", meaning: "맛", type: "명사" },
            { word: "appetizer", meaning: "전채요리", type: "명사" },
            { word: "dessert", meaning: "디저트", type: "명사" },
            { word: "cuisine", meaning: "요리", type: "명사" },
            { word: "garnish", meaning: "고명", type: "명사" },
            { word: "portion", meaning: "분량", type: "명사" },
            { word: "texture", meaning: "식감", type: "명사" },
            { word: "aroma", meaning: "향", type: "명사" },
            { word: "crispy", meaning: "바삭한", type: "형용사" },
            { word: "tender", meaning: "부드러운", type: "형용사" },
            { word: "spicy", meaning: "매운", type: "형용사" },
            { word: "sweet", meaning: "단", type: "형용사" },
            { word: "sour", meaning: "신", type: "형용사" },
            { word: "bitter", meaning: "쓴", type: "형용사" },
            { word: "salty", meaning: "짠", type: "형용사" },
            { word: "fresh", meaning: "신선한", type: "형용사" },
            { word: "organic", meaning: "유기농의", type: "형용사" },
            { word: "processed", meaning: "가공된", type: "형용사" },
            { word: "homemade", meaning: "집에서 만든", type: "형용사" },
            { word: "nutritious", meaning: "영양가 있는", type: "형용사" },
            { word: "delicious", meaning: "맛있는", type: "형용사" }
        ]
    },
    sports: {
        name: "스포츠 운동",
        icon: "⚽",
        words: [
            { word: "athlete", meaning: "운동선수", type: "명사" },
            { word: "coach", meaning: "코치", type: "명사" },
            { word: "team", meaning: "팀", type: "명사" },
            { word: "match", meaning: "경기", type: "명사" },
            { word: "tournament", meaning: "토너먼트", type: "명사" },
            { word: "championship", meaning: "선수권대회", type: "명사" },
            { word: "victory", meaning: "승리", type: "명사" },
            { word: "defeat", meaning: "패배", type: "명사" },
            { word: "score", meaning: "점수", type: "명사" },
            { word: "goal", meaning: "골", type: "명사" },
            { word: "referee", meaning: "심판", type: "명사" },
            { word: "stadium", meaning: "경기장", type: "명사" },
            { word: "training", meaning: "훈련", type: "명사" },
            { word: "exercise", meaning: "운동", type: "명사" },
            { word: "fitness", meaning: "체력", type: "명사" },
            { word: "competition", meaning: "경쟁", type: "명사" },
            { word: "opponent", meaning: "상대", type: "명사" },
            { word: "strategy", meaning: "전략", type: "명사" },
            { word: "technique", meaning: "기술", type: "명사" },
            { word: "performance", meaning: "성과", type: "명사" },
            { word: "medal", meaning: "메달", type: "명사" },
            { word: "record", meaning: "기록", type: "명사" },
            { word: "equipment", meaning: "장비", type: "명사" },
            { word: "uniform", meaning: "유니폼", type: "명사" },
            { word: "captain", meaning: "주장", type: "명사" },
            { word: "substitute", meaning: "교체선수", type: "명사" },
            { word: "penalty", meaning: "페널티", type: "명사" },
            { word: "foul", meaning: "반칙", type: "명사" },
            { word: "offside", meaning: "오프사이드", type: "명사" },
            { word: "timeout", meaning: "타임아웃", type: "명사" },
            { word: "sprint", meaning: "단거리 달리기", type: "명사" },
            { word: "marathon", meaning: "마라톤", type: "명사" },
            { word: "endurance", meaning: "지구력", type: "명사" },
            { word: "strength", meaning: "힘", type: "명사" },
            { word: "agility", meaning: "민첩성", type: "명사" },
            { word: "flexibility", meaning: "유연성", type: "명사" },
            { word: "coordination", meaning: "조정력", type: "명사" },
            { word: "balance", meaning: "균형", type: "명사" },
            { word: "professional", meaning: "프로의", type: "형용사" },
            { word: "amateur", meaning: "아마추어의", type: "형용사" }
        ]
    }
};

class VocabularyQuiz {
    constructor() {
        this.currentTheme = null;
        this.currentWordIndex = 0;
        this.totalQuestions = 0;
        this.correctAnswers = 0;
        this.usedIndices = [];
        this.currentChoices = [];
        this.correctChoiceIndex = 0;
        this.selectedChoice = null;
        this.autoAdvanceEnabled = false;
        this.autoAdvanceTimeout = null;
        this.typingMode = false;
        
        // Challenge mode properties
        this.challengeMode = false;
        this.currentChallenge = null;
        
        // Review mode properties
        this.reviewMode = false;
        this.reviewWords = [];
        
        // Progress tracking
        this.userProgress = this.loadUserProgress();
        this.sessionStats = {
            wordsLearned: 0,
            correctAnswers: 0,
            totalAnswers: 0,
            startTime: Date.now(),
            questionStartTime: null,
            actualStudyTime: 0
        };
        
        // Speech synthesis for pronunciation
        this.speechSynthesis = window.speechSynthesis;
        this.voice = null;
        this.initVoice();
        
        this.initElements();
        this.bindEvents();
        
        // Initialize leaderboard manager
        this.initializeLeaderboard();
        
        // 챌린지 모드 확인
        this.checkChallengeMode() || this.showThemeSelector();
    }
    
    // Progress Management Methods
    loadUserProgress() {
        try {
            const saved = localStorage.getItem('vocabularyQuizProgress');
            const progress = saved ? JSON.parse(saved) : {
                completedThemes: {},
                totalWordsLearned: 0,
                bestScores: {},
                learningStreak: 0,
                lastPlayDate: null,
                wrongAnswers: {},
                totalSessionTime: 0,
                learnedWords: [],
                actualStudyTime: 0
            };
            
            // Ensure new properties exist for backward compatibility
            if (!progress.learnedWords) progress.learnedWords = [];
            if (typeof progress.actualStudyTime === 'undefined') progress.actualStudyTime = 0;
            if (!progress.completedThemes) progress.completedThemes = {};
            if (!progress.bestScores) progress.bestScores = {};
            if (!progress.wrongAnswers) progress.wrongAnswers = {};
            
            return progress;
        } catch (error) {
            console.warn('Could not load user progress:', error);
            return {
                completedThemes: {},
                totalWordsLearned: 0,
                bestScores: {},
                learningStreak: 0,
                lastPlayDate: null,
                wrongAnswers: {},
                totalSessionTime: 0,
                learnedWords: [],
                actualStudyTime: 0
            };
        }
    }
    
    saveUserProgress() {
        try {
            localStorage.setItem('vocabularyQuizProgress', JSON.stringify(this.userProgress));
        } catch (error) {
            console.warn('Could not save user progress:', error);
        }
    }
    
    updateProgress(themeKey, score, accuracy) {
        const today = new Date().toDateString();
        
        // Update theme completion
        if (!this.userProgress.completedThemes[themeKey]) {
            this.userProgress.completedThemes[themeKey] = {
                timesCompleted: 0,
                bestScore: 0,
                lastCompleted: null,
                totalAttempts: 0
            };
        }
        
        const themeProgress = this.userProgress.completedThemes[themeKey];
        themeProgress.timesCompleted++;
        themeProgress.totalAttempts++;
        themeProgress.lastCompleted = today;
        themeProgress.bestScore = Math.max(themeProgress.bestScore, score);
        
        // Update best scores
        this.userProgress.bestScores[themeKey] = Math.max(
            this.userProgress.bestScores[themeKey] || 0,
            score
        );
        
        // Update learning streak
        if (this.userProgress.lastPlayDate !== today) {
            if (this.userProgress.lastPlayDate === new Date(Date.now() - 86400000).toDateString()) {
                this.userProgress.learningStreak++;
            } else {
                this.userProgress.learningStreak = 1;
            }
            this.userProgress.lastPlayDate = today;
        }
        
        // Update session stats with accurate study time
        this.userProgress.actualStudyTime += this.sessionStats.actualStudyTime;
        
        // Track unique words learned in this theme
        const themeWords = vocabularyThemes[themeKey].words;
        for (const word of themeWords) {
            const wordKey = `${themeKey}_${word.word}`;
            if (!this.userProgress.learnedWords.includes(wordKey)) {
                this.userProgress.learnedWords.push(wordKey);
            }
        }
        
        // Update total words learned (accurate count)
        this.userProgress.totalWordsLearned = this.userProgress.learnedWords.length;
        
        this.saveUserProgress();
    }
    
    trackWrongAnswer() {
        const currentWord = vocabularyThemes[this.currentTheme].words[this.currentWordIndex];
        const wrongAnswerKey = `${this.currentTheme}_${this.currentWordIndex}`;
        
        if (!this.userProgress.wrongAnswers[this.currentTheme]) {
            this.userProgress.wrongAnswers[this.currentTheme] = {};
        }
        
        if (!this.userProgress.wrongAnswers[this.currentTheme][wrongAnswerKey]) {
            this.userProgress.wrongAnswers[this.currentTheme][wrongAnswerKey] = {
                word: currentWord.word,
                meaning: currentWord.meaning,
                type: currentWord.type,
                wrongCount: 0,
                lastWrong: null
            };
        }
        
        this.userProgress.wrongAnswers[this.currentTheme][wrongAnswerKey].wrongCount++;
        this.userProgress.wrongAnswers[this.currentTheme][wrongAnswerKey].lastWrong = new Date().toISOString();
        
        this.saveUserProgress();
    }
    
    getWrongAnswersForReview(themeKey = null) {
        const wrongAnswers = [];
        
        if (themeKey) {
            // Get wrong answers for specific theme
            const themeWrong = this.userProgress.wrongAnswers[themeKey] || {};
            Object.values(themeWrong).forEach(item => {
                wrongAnswers.push({
                    ...item,
                    theme: themeKey
                });
            });
        } else {
            // Get all wrong answers
            Object.keys(this.userProgress.wrongAnswers).forEach(theme => {
                const themeWrong = this.userProgress.wrongAnswers[theme] || {};
                Object.values(themeWrong).forEach(item => {
                    wrongAnswers.push({
                        ...item,
                        theme: theme
                    });
                });
            });
        }
        
        // Sort by most recent first
        return wrongAnswers.sort((a, b) => new Date(b.lastWrong) - new Date(a.lastWrong));
    }
    
    startReview(themeKey) {
        const wrongAnswers = this.getWrongAnswersForReview(themeKey);
        
        if (wrongAnswers.length === 0) {
            alert('복습할 틀린 문제가 없습니다!');
            return;
        }
        
        // Create custom word list for review
        this.reviewMode = true;
        this.reviewWords = wrongAnswers;
        this.currentTheme = themeKey;
        this.usedIndices = [];
        this.totalQuestions = 0;
        this.correctAnswers = 0;
        
        this.currentThemeLabel.textContent = `${vocabularyThemes[themeKey].name} (복습 모드)`;
        this.updateScore();
        
        this.themeSelector.style.display = 'none';
        this.mainContent.style.display = 'block';
        
        this.loadReviewWord();
    }
    
    loadReviewWord() {
        if (this.usedIndices.length >= this.reviewWords.length) {
            // Review completed
            this.reviewMode = false;
            this.showCompletionModal();
            return;
        }
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * this.reviewWords.length);
        } while (this.usedIndices.includes(randomIndex));
        
        this.usedIndices.push(randomIndex);
        this.currentWordIndex = randomIndex;
        
        const reviewWord = this.reviewWords[randomIndex];
        
        this.wordElement.textContent = reviewWord.word;
        this.wordTypeElement.textContent = reviewWord.type;
        
        // Generate choices for review word
        const choiceData = this.generateChoicesForReview(reviewWord);
        this.currentChoices = choiceData.choices;
        this.correctChoiceIndex = choiceData.correctIndex;
        this.selectedChoice = null;
        
        // Update choice elements
        for (let i = 0; i < 4; i++) {
            const choiceElement = document.getElementById(`choice${i}`);
            const choiceItem = choiceElement.parentElement;
            
            choiceElement.textContent = this.currentChoices[i] || '';
            choiceItem.className = 'choice-item';
            // Remove all selection/result classes
            choiceItem.classList.remove('correct', 'incorrect', 'selected');
        }
        
        this.feedbackElement.textContent = '';
        this.feedbackElement.className = 'feedback';
        this.nextBtn.style.display = 'none';
        
        // Reset typing mode state for loadReviewWord
        if (this.typingMode) {
            this.typingInput.value = '';
            this.typingInput.disabled = false;
            this.submitTypingBtn.disabled = false;
            this.typingInput.style.borderColor = '';
            this.typingInput.focus();
        }
        
        // Update question progress counter
        this.updateQuestionProgress();
        this.updateQuizProgress();
        
        // Record question start time for accurate study time tracking
        this.sessionStats.questionStartTime = Date.now();
    }
    
    generateChoicesForReview(reviewWord) {
        const choices = [reviewWord.meaning];
        
        // Get all possible meanings from all themes except the correct one
        const allMeanings = [];
        Object.keys(vocabularyThemes).forEach(themeKey => {
            vocabularyThemes[themeKey].words.forEach(word => {
                if (word.meaning !== reviewWord.meaning) {
                    allMeanings.push(word.meaning);
                }
            });
        });
        
        // Add random wrong choices
        while (choices.length < 4 && allMeanings.length > 0) {
            const randomIndex = Math.floor(Math.random() * allMeanings.length);
            const randomMeaning = allMeanings[randomIndex];
            
            if (!choices.includes(randomMeaning)) {
                choices.push(randomMeaning);
            }
            allMeanings.splice(randomIndex, 1);
        }
        
        // Shuffle choices
        const shuffledChoices = [...choices];
        for (let i = shuffledChoices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
        }
        
        return {
            choices: shuffledChoices,
            correctIndex: shuffledChoices.indexOf(reviewWord.meaning)
        };
    }
    
    // Statistics Dashboard Methods
    showStatsDashboard() {
        this.themeSelector.style.display = 'none';
        this.statsDashboard.style.display = 'block';
        this.populateStatsDashboard();
    }
    
    hideStatsDashboard() {
        this.statsDashboard.style.display = 'none';
        this.themeSelector.style.display = 'block';
    }
    
    populateStatsDashboard() {
        this.updateOverviewStats();
        this.updateThemeStats();
        this.updateReviewStats();
    }
    
    updateOverviewStats() {
        // Learning streak
        document.getElementById('learningStreak').textContent = this.userProgress.learningStreak;
        
        // Total words learned (accurate count)
        const totalWords = this.userProgress.totalWordsLearned || this.userProgress.learnedWords.length || 0;
        document.getElementById('totalWordsLearned').textContent = totalWords;
        
        // Total study time (convert milliseconds to minutes)
        const totalMinutes = Math.round((this.userProgress.actualStudyTime || this.userProgress.totalSessionTime || 0) / (1000 * 60));
        document.getElementById('totalStudyTime').textContent = `${totalMinutes}분`;
        
        // Average score
        const scores = Object.values(this.userProgress.bestScores);
        const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
        document.getElementById('averageScore').textContent = `${averageScore}점`;
    }
    
    formatDateToKorean(dateString) {
        if (!dateString || dateString === '없음') return '없음';
        
        try {
            const date = new Date(dateString);
            const now = new Date();
            
            // 같은 날인지 확인
            if (date.toDateString() === now.toDateString()) {
                return '오늘';
            }
            
            // 어제인지 확인
            const yesterday = new Date(now);
            yesterday.setDate(yesterday.getDate() - 1);
            if (date.toDateString() === yesterday.toDateString()) {
                return '어제';
            }
            
            // 일주일 이내인지 확인
            const weekAgo = new Date(now);
            weekAgo.setDate(weekAgo.getDate() - 7);
            if (date > weekAgo) {
                const daysAgo = Math.floor((now - date) / (1000 * 60 * 60 * 24));
                return `${daysAgo}일 전`;
            }
            
            // 그 외의 경우 한국어 날짜 형식으로
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            
            // 올해인 경우 년도 생략
            if (year === now.getFullYear()) {
                return `${month}월 ${day}일`;
            } else {
                return `${year}년 ${month}월 ${day}일`;
            }
        } catch (error) {
            console.warn('Date formatting error:', error);
            return dateString;
        }
    }
    
    updateThemeStats() {
        const themeStatsGrid = document.getElementById('themeStatsGrid');
        themeStatsGrid.innerHTML = '';
        
        Object.keys(vocabularyThemes).forEach(themeKey => {
            const theme = vocabularyThemes[themeKey];
            const themeProgress = this.userProgress.completedThemes[themeKey];
            const bestScore = this.userProgress.bestScores[themeKey] || 0;
            const wrongAnswersCount = Object.keys(this.userProgress.wrongAnswers[themeKey] || {}).length;
            
            const themeStatItem = document.createElement('div');
            themeStatItem.className = 'theme-stat-item';
            
            const completionCount = themeProgress ? themeProgress.timesCompleted : 0;
            const lastCompleted = themeProgress ? this.formatDateToKorean(themeProgress.lastCompleted) : '없음';
            
            themeStatItem.innerHTML = `
                <div class="theme-stat-header">
                    <span class="theme-stat-icon">${theme.icon}</span>
                    <span class="theme-stat-name">${theme.name}</span>
                </div>
                <div class="theme-stat-details">
                    <div class="theme-stat-detail">
                        <span class="theme-stat-label">최고 점수</span>
                        <span class="theme-stat-value">${bestScore}점</span>
                    </div>
                    <div class="theme-stat-detail">
                        <span class="theme-stat-label">완주 횟수</span>
                        <span class="theme-stat-value">${completionCount}회</span>
                    </div>
                    <div class="theme-stat-detail">
                        <span class="theme-stat-label">틀린 문제</span>
                        <span class="theme-stat-value">${wrongAnswersCount}개</span>
                    </div>
                    <div class="theme-stat-detail">
                        <span class="theme-stat-label">마지막 학습</span>
                        <span class="theme-stat-value">${lastCompleted}</span>
                    </div>
                </div>
            `;
            
            themeStatsGrid.appendChild(themeStatItem);
        });
    }
    
    updateReviewStats() {
        const reviewSummary = document.getElementById('reviewSummary');
        
        let totalWrongAnswers = 0;
        let themesWithWrongAnswers = 0;
        
        Object.keys(this.userProgress.wrongAnswers).forEach(themeKey => {
            const wrongCount = Object.keys(this.userProgress.wrongAnswers[themeKey] || {}).length;
            if (wrongCount > 0) {
                totalWrongAnswers += wrongCount;
                themesWithWrongAnswers++;
            }
        });
        
        let reviewMessage = '';
        if (totalWrongAnswers === 0) {
            reviewMessage = '축하합니다! 복습할 틀린 문제가 없습니다! 🎉';
        } else {
            reviewMessage = `복습이 필요한 문제들이 있습니다. 지속적인 복습으로 완벽하게 마스터해보세요! 💪`;
        }
        
        reviewSummary.innerHTML = `
            <div class="review-summary-title">${reviewMessage}</div>
            <div class="review-summary-stats">
                <div class="review-summary-stat">
                    <div class="review-summary-number">${totalWrongAnswers}</div>
                    <div class="review-summary-label">총 틀린 문제</div>
                </div>
                <div class="review-summary-stat">
                    <div class="review-summary-number">${themesWithWrongAnswers}</div>
                    <div class="review-summary-label">복습 필요 테마</div>
                </div>
                <div class="review-summary-stat">
                    <div class="review-summary-number">${6 - themesWithWrongAnswers}</div>
                    <div class="review-summary-label">완벽 마스터 테마</div>
                </div>
            </div>
        `;
    }
    
    // Social Features Methods
    async shareScore(score, accuracy, themeName) {
        try {
            console.log('shareScore called:', { score, accuracy, themeName });
            
            // Generate score card image
            const imageBlob = await this.generateScoreCard(score, accuracy, themeName);
            console.log('Image blob generated:', imageBlob);
            
            if (navigator.share && navigator.canShare) {
                console.log('Navigator.share available');
                const testFile = new File([imageBlob], 'score.png', { type: 'image/png' });
                const canShareFiles = navigator.canShare({ files: [testFile] });
                console.log('Can share files:', canShareFiles);
                
                if (canShareFiles) {
                    console.log('Attempting to share with files...');
                    // Share with image (supported on mobile)
                    const file = new File([imageBlob], 'english-master-score.png', { type: 'image/png' });
                    await navigator.share({
                        title: '🎯 영어 단어 마스터 - 점수 공유',
                        text: `${themeName} 테마에서 ${score}점을 달성했어요! 🎉`,
                        files: [file]
                    });
                    console.log('Share completed successfully!');
                } else {
                    console.log('File sharing not supported, using fallback...');
                    // Fallback: download image and show share text
                    this.downloadScoreCard(imageBlob, `영어단어마스터_${themeName}_${score}점.png`);
                    this.showToast('📸 점수 카드가 다운로드되었습니다!\n이미지를 SNS에 올려보세요!');
                }
            } else {
                console.log('Navigator.share not available, using fallback...');
                // Fallback: download image and show share text
                this.downloadScoreCard(imageBlob, `영어단어마스터_${themeName}_${score}점.png`);
                this.showToast('📸 점수 카드가 다운로드되었습니다!\n이미지를 SNS에 올려보세요!');
            }
        } catch (error) {
            console.error('Error sharing score:', error);
            // Fallback to text sharing
            const correctAnswers = Math.round((accuracy / 100) * 40);
            const shareText = `🎯 영어 단어 마스터에서 ${themeName} 테마를 완주했어요!\n📊 점수: ${score}점 | 정답: ${correctAnswers}/40\n\n함께 영어 단어를 마스터해보세요! 🚀`;
            const appUrl = 'https://prepaid114.github.io/prepaid114/';
            this.fallbackShare(shareText, appUrl);
        }
    }
    
    shareStats() {
        const streak = this.userProgress.learningStreak;
        const totalWords = this.userProgress.totalWordsLearned || this.userProgress.learnedWords.length;
        const totalMinutes = Math.round((this.userProgress.actualStudyTime || this.userProgress.totalSessionTime) / (1000 * 60));
        const completedThemes = Object.keys(this.userProgress.completedThemes).length;
        
        const shareText = `📚 영어 단어 마스터 학습 현황 📚\n\n🔥 연속 학습: ${streak}일\n📖 학습한 단어: ${totalWords}개\n⏱️ 총 학습시간: ${totalMinutes}분\n🎯 완료한 테마: ${completedThemes}개\n\n꾸준한 학습으로 영어 실력을 키워가고 있어요! 💪`;
        const appUrl = 'https://prepaid114.github.io/prepaid114/';
        
        if (navigator.share) {
            navigator.share({
                title: '📚 영어 단어 마스터 - 학습 통계',
                text: shareText,
                url: appUrl
            }).catch(err => {
                console.log('Error sharing:', err);
                this.fallbackShare(shareText, appUrl);
            });
        } else {
            this.fallbackShare(shareText, appUrl);
        }
    }
    
    async challengeFriends() {
        // 현재 사용자의 최고 기록 가져오기
        const bestScores = this.userProgress.bestScores;
        const availableThemes = Object.keys(bestScores).filter(theme => bestScores[theme] > 0);
        
        if (availableThemes.length === 0) {
            this.showToast('먼저 테마를 완주한 후 친구에게 도전장을 보낼 수 있어요!');
            return;
        }
        
        // 도전할 테마 선택 (가장 높은 점수의 테마)
        const bestTheme = Object.keys(bestScores).reduce((a, b) => 
            bestScores[a] > bestScores[b] ? a : b
        );
        const bestScore = bestScores[bestTheme];
        const themeName = vocabularyThemes[bestTheme].name;
        
        // 챌린지 생성
        const challenge = this.createChallenge(bestTheme, bestScore, themeName);
        
        try {
            // 챌린지 카드 이미지 생성
            const imageBlob = await this.generateChallengeCard(challenge);
            
            if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([imageBlob], 'challenge.png', { type: 'image/png' })] })) {
                // Share with image
                const file = new File([imageBlob], 'english-master-challenge.png', { type: 'image/png' });
                await navigator.share({
                    title: '🎯 영어 단어 마스터 - 도전장',
                    text: `${themeName} 테마에서 ${bestScore}점에 도전해보세요! 🏆`,
                    files: [file]
                });
            } else {
                // Fallback: download image and show challenge URL
                this.downloadScoreCard(imageBlob, `영어단어마스터_도전장_${themeName}.png`);
                const challengeUrl = `${window.location.origin}${window.location.pathname}?challenge=${challenge.id}`;
                
                await navigator.clipboard.writeText(challengeUrl);
                this.showToast('🎯 도전장 이미지가 다운로드되고 링크가 복사되었습니다!\n친구에게 이미지와 링크를 함께 보내보세요!');
            }
        } catch (error) {
            console.error('Error creating challenge:', error);
            // Text fallback
            const challengeUrl = `${window.location.origin}${window.location.pathname}?challenge=${challenge.id}`;
            const challengeText = `🎯 영어 단어 마스터 도전장! 🎯\n\n${themeName} 테마에서 내 기록 ${bestScore}점을 넘어보세요!\n\n${challengeUrl}`;
            this.fallbackShare(challengeText, '');
        }
    }
    
    createChallenge(themeKey, targetScore, themeName) {
        const challengeId = this.generateChallengeId();
        const challenge = {
            id: challengeId,
            theme: themeKey,
            themeName: themeName,
            targetScore: targetScore,
            createdAt: Date.now(),
            creatorName: '도전자', // 추후 사용자 이름 기능 추가 시 사용
        };
        
        // LocalStorage에 챌린지 저장
        const challenges = JSON.parse(localStorage.getItem('englishMasterChallenges') || '{}');
        challenges[challengeId] = challenge;
        localStorage.setItem('englishMasterChallenges', JSON.stringify(challenges));
        
        return challenge;
    }
    
    generateChallengeId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    async generateChallengeCard(challenge) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = 800;
        canvas.height = 800;
        
        const themeColors = this.getThemeColors(challenge.theme);
        const themeIcon = vocabularyThemes[challenge.theme].icon;
        
        // 배경 (도전장 느낌의 다른 색상)
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#ff6b6b');
        gradient.addColorStop(0.5, '#ffd93d');
        gradient.addColorStop(1, '#6c5ce7');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 카드 배경
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.roundRect(50, 80, canvas.width - 100, canvas.height - 160, 30);
        ctx.fill();
        
        // 도전장 타이틀
        ctx.fillStyle = '#e74c3c';
        ctx.font = 'bold 52px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🎯 도전장! 🎯', canvas.width / 2, 180);
        
        // 테마 정보
        ctx.font = '60px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#2c3e50';
        ctx.fillText(themeIcon, canvas.width / 2, 280);
        
        ctx.font = 'bold 32px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillText(challenge.themeName, canvas.width / 2, 330);
        
        // 도전 메시지
        ctx.font = 'bold 28px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText('이 점수를 넘어보세요!', canvas.width / 2, 400);
        
        // 목표 점수
        ctx.font = 'bold 100px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = themeColors.accent;
        ctx.fillText(`${challenge.targetScore}점`, canvas.width / 2, 520);
        
        // 도전 버튼 효과
        ctx.fillStyle = '#e74c3c';
        ctx.roundRect(250, 560, 300, 60, 30);
        ctx.fill();
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 28px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillText('도전하기!', canvas.width / 2, 600);
        
        // 앱 정보
        ctx.font = '24px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#999';
        ctx.fillText('영어 단어 마스터', canvas.width / 2, 680);
        ctx.font = '20px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillText('prepaid114.github.io/prepaid114', canvas.width / 2, 720);
        
        return new Promise(resolve => {
            canvas.toBlob(resolve, 'image/png', 0.9);
        });
    }
    
    async copyAppLink() {
        const appUrl = 'https://prepaid114.github.io/prepaid114/';
        const linkText = `🎯 영어 단어 마스터\n\n테마별 영어 단어 학습 앱\n📚 240개 단어 | 🔊 원어민 발음 | 📱 모바일 최적화\n\n${appUrl}`;
        
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(linkText);
                this.showToast('✅ 링크가 클립보드에 복사되었습니다!');
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = linkText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showToast('✅ 링크가 클립보드에 복사되었습니다!');
            }
        } catch (err) {
            console.error('Failed to copy link:', err);
            this.showToast('❌ 링크 복사에 실패했습니다. 직접 복사해주세요.');
            // Show the link in an alert as fallback
            alert(`링크를 직접 복사해주세요:\n\n${linkText}`);
        }
    }
    
    fallbackShare(text, url) {
        const fullText = `${text}\n\n${url}`;
        
        // Try to copy to clipboard first
        if (navigator.clipboard) {
            navigator.clipboard.writeText(fullText).then(() => {
                this.showToast('📋 텍스트가 클립보드에 복사되었습니다!\n카카오톡, 문자 등에 붙여넣기 하세요.');
            }).catch(() => {
                this.showShareAlert(fullText);
            });
        } else {
            this.showShareAlert(fullText);
        }
    }
    
    showShareAlert(text) {
        alert(`다음 내용을 복사해서 공유해주세요:\n\n${text}`);
    }
    
    showToast(message) {
        // Create toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 10000;
            font-size: 0.9rem;
            text-align: center;
            max-width: 90%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 3000);
    }
    
    // Score Card Image Generation
    async generateScoreCard(score, accuracy, themeName) {
        console.log('Starting canvas generation...');
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
            throw new Error('Canvas 2D context not supported');
        }
        
        // Canvas 크기 설정 (Instagram Square format)
        canvas.width = 800;
        canvas.height = 800;
        console.log('Canvas size set:', canvas.width, canvas.height);
        
        // 테마별 색상 및 아이콘 가져오기
        const themeKey = Object.keys(vocabularyThemes).find(key => 
            vocabularyThemes[key].name === themeName
        );
        const themeIcon = themeKey ? vocabularyThemes[themeKey].icon : '📚';
        const themeColors = this.getThemeColors(themeKey);
        
        console.log('Canvas debug:', { themeKey, themeIcon, themeColors, themeName });
        
        // 단순한 배경색으로 시작 (그라데이션 대신)
        ctx.fillStyle = themeColors.primary || '#4ecdc4';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        console.log('Solid background applied');
        
        // 카드 컨테이너 (roundRect 대신 일반 rect 사용)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(50, 100, canvas.width - 100, canvas.height - 200);
        console.log('Card container drawn');
        
        // 제목 (더 진한 색상과 큰 글씨)
        ctx.fillStyle = '#1a252f';
        ctx.font = 'bold 36px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🎯 영어 단어 마스터', canvas.width / 2, 170);
        console.log('Title drawn');
        
        // 구분선 추가
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.lineTo(600, 200);
        ctx.stroke();
        
        // 테마 아이콘 (더 크게)
        ctx.font = '80px Arial, sans-serif';
        ctx.fillText(themeIcon, canvas.width / 2, 290);
        console.log('Theme icon drawn');
        
        // 테마 이름 (더 진한 색상)
        ctx.font = 'bold 32px Arial, sans-serif';
        ctx.fillStyle = '#1a252f';
        ctx.fillText(themeName, canvas.width / 2, 340);
        console.log('Theme name drawn');
        
        // 점수 (메인, 더 강조)
        ctx.font = 'bold 120px Arial, sans-serif';
        ctx.fillStyle = themeColors.accent || '#16a085';
        ctx.fillText(`${score}점`, canvas.width / 2, 480);
        console.log('Score drawn');
        
        // 정답 개수 (더 진한 색상과 큰 글씨)
        let correctAnswers, totalQuestions;
        if (typeof accuracy === 'string' && accuracy.includes('/')) {
            // "2/5" 형식인 경우 (복습 모드 등)
            const parts = accuracy.split('/');
            correctAnswers = parseInt(parts[0]) || 0;
            totalQuestions = parseInt(parts[1]) || 40;
        } else {
            // 퍼센트 형식인 경우 (일반 모드)
            totalQuestions = 40;
            correctAnswers = Math.round((accuracy / 100) * totalQuestions);
        }
        ctx.font = 'bold 32px Arial, sans-serif';
        ctx.fillStyle = '#34495e';
        ctx.fillText(`정답 개수: ${correctAnswers}/${totalQuestions}`, canvas.width / 2, 540);
        console.log('Accuracy drawn');
        
        // 구분선 추가
        ctx.strokeStyle = '#ddd';
        ctx.beginPath();
        ctx.moveTo(200, 570);
        ctx.lineTo(600, 570);
        ctx.stroke();
        
        // 하단 로고 (더 작게)
        ctx.font = '18px Arial, sans-serif';
        ctx.fillStyle = '#7f8c8d';
        ctx.fillText('prepaid114.github.io/prepaid114', canvas.width / 2, 600);
        console.log('Footer drawn');
        
        console.log('Canvas rendering completed, converting to blob...');
        
        // Canvas to Blob
        return new Promise(resolve => {
            canvas.toBlob(blob => {
                console.log('Blob conversion completed:', blob);
                resolve(blob);
            }, 'image/png', 0.9);
        });
    }
    
    getThemeColors(themeKey) {
        const colorMap = {
            business: { primary: '#ff6b6b', secondary: '#ee5a24', accent: '#e74c3c' },
            science: { primary: '#4ecdc4', secondary: '#44a08d', accent: '#16a085' },
            travel: { primary: '#f093fb', secondary: '#f5576c', accent: '#e91e63' },
            daily: { primary: '#a8edea', secondary: '#fed6e3', accent: '#ff9a56' },
            academic: { primary: '#667eea', secondary: '#764ba2', accent: '#5a6fd8' },
            technology: { primary: '#ff9a56', secondary: '#ff6b6b', accent: '#ff5722' }
        };
        
        return colorMap[themeKey] || colorMap.academic;
    }
    
    downloadScoreCard(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    // Challenge System
    checkChallengeMode() {
        const urlParams = new URLSearchParams(window.location.search);
        const challengeId = urlParams.get('challenge');
        
        if (challengeId) {
            const challenges = JSON.parse(localStorage.getItem('englishMasterChallenges') || '{}');
            const challenge = challenges[challengeId];
            
            if (challenge) {
                this.startChallengeMode(challenge);
                return true;
            } else {
                this.showToast('❌ 유효하지 않은 도전장입니다.');
                // URL에서 챌린지 파라미터 제거
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
        return false;
    }
    
    startChallengeMode(challenge) {
        this.challengeMode = true;
        this.currentChallenge = challenge;
        
        // 챌린지 정보 표시
        this.showChallengeInfo(challenge);
    }
    
    showChallengeInfo(challenge) {
        // 기존 요소들 숨기기
        this.themeSelector.style.display = 'none';
        this.mainContent.style.display = 'none';
        
        // 챌린지 정보 모달 생성
        this.createChallengeModal(challenge);
    }
    
    createChallengeModal(challenge) {
        // 기존 챌린지 모달이 있으면 제거
        const existingModal = document.getElementById('challengeModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        const modal = document.createElement('div');
        modal.id = 'challengeModal';
        modal.className = 'modal-overlay';
        modal.style.display = 'flex';
        
        const themeIcon = vocabularyThemes[challenge.theme].icon;
        const createdDate = new Date(challenge.createdAt).toLocaleDateString('ko-KR');
        
        modal.innerHTML = `
            <div class="modal-content challenge-modal-content">
                <div class="challenge-header">
                    <h2>🎯 도전장이 도착했어요!</h2>
                </div>
                
                <div class="challenge-info">
                    <div class="challenge-theme">
                        <span class="challenge-theme-icon">${themeIcon}</span>
                        <div class="challenge-theme-name">${challenge.themeName}</div>
                    </div>
                    
                    <div class="challenge-target">
                        <div class="challenge-label">목표 점수</div>
                        <div class="challenge-score">${challenge.targetScore}점</div>
                    </div>
                    
                    <div class="challenge-message">
                        <p>친구가 ${challenge.themeName} 테마에서 <strong>${challenge.targetScore}점</strong>을 달성했어요!</p>
                        <p>이 기록을 넘어서 도전에 성공해보세요! 🏆</p>
                    </div>
                    
                    <div class="challenge-date">
                        도전장 생성일: ${createdDate}
                    </div>
                </div>
                
                <div class="challenge-actions">
                    <button class="action-btn primary" id="acceptChallengeBtn">
                        🔥 도전 수락하기
                    </button>
                    <button class="action-btn secondary" id="declineChallengeBtn">
                        나중에 하기
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 이벤트 리스너 추가
        document.getElementById('acceptChallengeBtn').onclick = () => {
            modal.remove();
            this.acceptChallenge(challenge);
        };
        
        document.getElementById('declineChallengeBtn').onclick = () => {
            modal.remove();
            window.history.replaceState({}, document.title, window.location.pathname);
            this.showThemeSelector();
        };
        
        // 배경 클릭으로 닫기
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
                window.history.replaceState({}, document.title, window.location.pathname);
                this.showThemeSelector();
            }
        };
    }
    
    acceptChallenge(challenge) {
        // 챌린지 모드로 게임 시작
        this.challengeMode = true;
        this.currentChallenge = challenge;
        
        // 해당 테마로 바로 시작
        this.selectTheme(challenge.theme);
        
        // 챌린지 모드 UI 표시
        this.updateChallengeUI();
    }
    
    updateChallengeUI() {
        if (this.challengeMode && this.currentChallenge) {
            // 테마 라벨 업데이트
            this.currentThemeLabel.textContent = `${this.currentChallenge.themeName} (도전 모드 🎯)`;
            
            // 헤더에 도전 정보 추가
            const challengeInfo = document.createElement('div');
            challengeInfo.className = 'challenge-info-bar';
            challengeInfo.innerHTML = `
                <div class="challenge-target-info">
                    🎯 목표: ${this.currentChallenge.targetScore}점 넘기
                </div>
            `;
            
            // 기존 챌린지 정보가 있으면 제거
            const existingInfo = document.querySelector('.challenge-info-bar');
            if (existingInfo) {
                existingInfo.remove();
            }
            
            // 현재 테마 섹션에 추가
            const currentThemeSection = document.querySelector('.current-theme');
            currentThemeSection.appendChild(challengeInfo);
        }
    }
    
    checkChallengeSuccess(finalScore) {
        if (this.challengeMode && this.currentChallenge) {
            const success = finalScore > this.currentChallenge.targetScore;
            this.showChallengeResult(finalScore, success);
            return true;
        }
        return false;
    }
    
    showChallengeResult(finalScore, success) {
        setTimeout(() => {
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.style.display = 'flex';
            
            const resultIcon = success ? '🏆' : '😅';
            const resultTitle = success ? '도전 성공!' : '도전 실패...';
            const resultMessage = success 
                ? `축하합니다! ${this.currentChallenge.targetScore}점을 넘어 ${finalScore}점을 달성했어요!`
                : `아쉽게도 ${this.currentChallenge.targetScore}점을 넘지 못했어요. ${finalScore}점으로 도전 실패! 다시 도전해보세요!`;
            
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="completion-celebration">${resultIcon}</div>
                    <h2 class="completion-title">${resultTitle}</h2>
                    <div class="challenge-result-info">
                        <div class="result-scores">
                            <div class="score-comparison">
                                <div class="target-score">
                                    <span class="score-label">목표 점수</span>
                                    <span class="score-value">${this.currentChallenge.targetScore}점</span>
                                </div>
                                <div class="vs">VS</div>
                                <div class="my-score ${success ? 'success' : 'fail'}">
                                    <span class="score-label">내 점수</span>
                                    <span class="score-value">${finalScore}점</span>
                                </div>
                            </div>
                        </div>
                        <p class="result-message">${resultMessage}</p>
                    </div>
                    <div class="completion-actions">
                        <button class="action-btn primary" id="shareResultBtn">
                            📱 결과 공유하기
                        </button>
                        <button class="action-btn secondary" id="retrychallengeBtn">
                            🔄 다시 도전하기
                        </button>
                        <button class="action-btn secondary" id="backToMainBtn">
                            🏠 메인으로 돌아가기
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // 이벤트 리스너
            document.getElementById('shareResultBtn').onclick = () => {
                this.shareChallengeResult(finalScore, success);
            };
            
            document.getElementById('retrychallengeBtn').onclick = () => {
                modal.remove();
                this.selectTheme(this.currentChallenge.theme);
            };
            
            document.getElementById('backToMainBtn').onclick = () => {
                modal.remove();
                this.challengeMode = false;
                this.currentChallenge = null;
                window.history.replaceState({}, document.title, window.location.pathname);
                this.showThemeSelector();
            };
        }, 500);
    }
    
    async shareChallengeResult(myScore, success) {
        try {
            const imageBlob = await this.generateChallengeResultCard(myScore, success);
            
            if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([imageBlob], 'result.png', { type: 'image/png' })] })) {
                const file = new File([imageBlob], 'challenge-result.png', { type: 'image/png' });
                await navigator.share({
                    title: '🎯 영어 단어 마스터 - 도전 결과',
                    text: success ? '도전에 성공했어요! 🏆' : '아쉽게 실패했지만 다시 도전할게요! 💪',
                    files: [file]
                });
            } else {
                this.downloadScoreCard(imageBlob, `도전결과_${success ? '성공' : '실패'}_${myScore}점.png`);
                this.showToast('📸 도전 결과가 다운로드되었습니다!');
            }
        } catch (error) {
            console.error('Error sharing result:', error);
            const resultText = success 
                ? `🏆 도전 성공! ${this.currentChallenge.themeName}에서 ${myScore}점 달성! 목표 ${this.currentChallenge.targetScore}점을 넘었어요!`
                : `😅 도전 실패... ${this.currentChallenge.themeName}에서 ${myScore}점. 목표 ${this.currentChallenge.targetScore}점에 조금 못 미쳤어요!`;
            this.fallbackShare(resultText, window.location.origin + window.location.pathname);
        }
    }
    
    async generateChallengeResultCard(myScore, success) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = 800;
        canvas.height = 800;
        
        const themeColors = this.getThemeColors(this.currentChallenge.theme);
        const themeIcon = vocabularyThemes[this.currentChallenge.theme].icon;
        
        // 배경 (성공/실패에 따른 다른 색상)
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        if (success) {
            gradient.addColorStop(0, '#00d2ff');
            gradient.addColorStop(1, '#3a7bd5');
        } else {
            gradient.addColorStop(0, '#ff9a9e');
            gradient.addColorStop(1, '#fad0c4');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 카드 배경
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.roundRect(50, 80, canvas.width - 100, canvas.height - 160, 30);
        ctx.fill();
        
        // 결과 아이콘 및 제목
        ctx.font = '80px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(success ? '🏆' : '😅', canvas.width / 2, 180);
        
        ctx.fillStyle = success ? '#27ae60' : '#e74c3c';
        ctx.font = 'bold 42px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillText(success ? '도전 성공!' : '도전 실패', canvas.width / 2, 240);
        
        // 테마 정보
        ctx.font = '40px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#2c3e50';
        ctx.fillText(themeIcon, canvas.width / 2, 310);
        
        ctx.font = 'bold 28px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillText(this.currentChallenge.themeName, canvas.width / 2, 350);
        
        // 점수 비교
        ctx.font = 'bold 24px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText('목표', 250, 420);
        ctx.fillText('내 결과', 550, 420);
        
        ctx.font = 'bold 60px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#999';
        ctx.fillText(`${this.currentChallenge.targetScore}점`, 250, 480);
        
        ctx.fillStyle = success ? '#27ae60' : '#e74c3c';
        ctx.fillText(`${myScore}점`, 550, 480);
        
        // VS
        ctx.font = 'bold 32px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#333';
        ctx.fillText('VS', canvas.width / 2, 465);
        
        // 결과 메시지
        ctx.font = 'bold 24px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#666';
        const message = success ? '목표를 넘어 도전에 성공했어요!' : '아쉽지만 다음 기회에! 💪';
        ctx.fillText(message, canvas.width / 2, 560);
        
        // 앱 정보
        ctx.font = '24px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#999';
        ctx.fillText('영어 단어 마스터', canvas.width / 2, 650);
        ctx.font = '20px "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif';
        ctx.fillText('prepaid114.github.io/prepaid114', canvas.width / 2, 690);
        
        return new Promise(resolve => {
            canvas.toBlob(resolve, 'image/png', 0.9);
        });
    }
    
    initElements() {
        console.log('Initializing elements...');
        
        this.themeSelector = document.getElementById('themeSelector');
        this.themeGrid = document.getElementById('themeGrid');
        this.mainContent = document.getElementById('mainContent');
        this.currentThemeLabel = document.getElementById('currentTheme');
        this.changeThemeBtn = document.getElementById('changeThemeBtn');
        this.wordElement = document.getElementById('currentWord');
        this.wordTypeElement = document.getElementById('wordType');
        this.choicesSection = document.getElementById('choicesSection');
        this.nextBtn = document.getElementById('nextBtn');
        this.feedbackElement = document.getElementById('feedback');
        this.scoreElement = document.getElementById('score');
        this.accuracyElement = document.getElementById('accuracy');
        this.progressFill = document.getElementById('progressFill');
        this.pronunciationBtn = document.getElementById('pronunciationBtn');
        this.autoAdvanceToggle = document.getElementById('autoAdvanceToggle');
        this.questionProgress = document.getElementById('questionProgress');
        
        // Typing mode elements
        this.typingModeToggle = document.getElementById('typingModeToggle');
        this.typingSection = document.getElementById('typingSection');
        this.typingInput = document.getElementById('typingInput');
        this.submitTypingBtn = document.getElementById('submitTypingBtn');
        
        // Statistics dashboard elements
        this.statsBtn = document.getElementById('statsBtn');
        this.statsDashboard = document.getElementById('statsDashboard');
        this.closeStatsBtn = document.getElementById('closeStatsBtn');
        
        // Social feature elements
        this.shareScoreBtn = document.getElementById('shareScoreBtn');
        this.shareStatsBtn = document.getElementById('shareStatsBtn');
        this.challengeFriendsBtn = document.getElementById('challengeFriendsBtn');
        this.copyLinkBtn = document.getElementById('copyLinkBtn');
        
        // Leaderboard elements
        this.leaderboardBtn = document.getElementById('leaderboardBtn');
        this.saveToLeaderboardBtn = document.getElementById('saveToLeaderboardBtn');
        this.nicknameModal = document.getElementById('nicknameModal');
        this.leaderboardModal = document.getElementById('leaderboardModal');
        this.nicknameInput = document.getElementById('nicknameInput');
        this.saveNicknameBtn = document.getElementById('saveNicknameBtn');
        this.cancelNicknameBtn = document.getElementById('cancelNicknameBtn');
        this.closeLeaderboardBtn = document.getElementById('closeLeaderboardBtn');
        this.connectionStatus = document.getElementById('connectionStatus');
        
        // Log element states for debugging
        console.log('Elements initialized:', {
            themeSelector: !!this.themeSelector,
            themeGrid: !!this.themeGrid,
            mainContent: !!this.mainContent
        });
        
        // Verify critical elements exist
        if (!this.themeSelector || !this.themeGrid || !this.mainContent) {
            console.error('Critical elements missing:', {
                themeSelector: this.themeSelector,
                themeGrid: this.themeGrid,
                mainContent: this.mainContent
            });
            throw new Error('Critical DOM elements not found');
        }
    }
    
    initVoice() {
        // Wait for voices to load
        const setVoice = () => {
            const voices = this.speechSynthesis.getVoices();
            console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
            
            // Try to find the best English voice
            const englishVoices = voices.filter(voice => 
                voice.lang.startsWith('en-') && 
                (voice.name.includes('Google') || 
                 voice.name.includes('Microsoft') || 
                 voice.name.includes('native') ||
                 voice.name.includes('US') ||
                 voice.name.includes('UK'))
            );
            
            // Prefer US English voices
            this.voice = englishVoices.find(voice => voice.lang === 'en-US') ||
                        englishVoices.find(voice => voice.lang === 'en-GB') ||
                        englishVoices[0] ||
                        voices.find(voice => voice.lang.startsWith('en')) ||
                        voices[0];
                        
            console.log('Selected voice:', this.voice?.name, this.voice?.lang);
        };
        
        if (this.speechSynthesis.getVoices().length > 0) {
            setVoice();
        } else {
            this.speechSynthesis.addEventListener('voiceschanged', setVoice);
        }
    }
    
    bindEvents() {
        this.changeThemeBtn.addEventListener('click', () => this.showThemeSelector());
        this.nextBtn.addEventListener('click', () => this.nextWord());
        this.pronunciationBtn.addEventListener('click', () => this.pronounceWord());
        this.autoAdvanceToggle.addEventListener('change', (e) => {
            this.autoAdvanceEnabled = e.target.checked;
        });
        
        // Typing mode events
        this.typingModeToggle.addEventListener('change', (e) => {
            this.typingMode = e.target.checked;
            this.toggleTypingMode();
        });
        
        this.submitTypingBtn.addEventListener('click', () => this.submitTypingAnswer());
        
        this.typingInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.submitTypingAnswer();
            }
        });
        
        // Statistics dashboard events
        this.statsBtn.addEventListener('click', () => this.showStatsDashboard());
        this.closeStatsBtn.addEventListener('click', () => this.hideStatsDashboard());
        
        // Leaderboard button event
        if (this.leaderboardBtn) {
            this.leaderboardBtn.addEventListener('click', () => this.showLeaderboard());
        }
        
        // Social feature events
        this.shareStatsBtn.addEventListener('click', () => this.shareStats());
        this.challengeFriendsBtn.addEventListener('click', () => this.challengeFriends());
        this.copyLinkBtn.addEventListener('click', () => this.copyAppLink());
        
        // Leaderboard events
        if (this.saveToLeaderboardBtn) {
            this.saveToLeaderboardBtn.addEventListener('click', () => this.showNicknameModal());
        }
        
        if (this.saveNicknameBtn) {
            this.saveNicknameBtn.addEventListener('click', () => this.saveToLeaderboard());
        }
        
        if (this.cancelNicknameBtn) {
            this.cancelNicknameBtn.addEventListener('click', () => this.hideNicknameModal());
        }
        
        if (this.closeLeaderboardBtn) {
            this.closeLeaderboardBtn.addEventListener('click', () => this.hideLeaderboardModal());
        }
        
        // Choice selection
        this.choicesSection.addEventListener('click', (e) => {
            const choiceItem = e.target.closest('.choice-item');
            if (choiceItem && !choiceItem.classList.contains('correct') && !choiceItem.classList.contains('incorrect')) {
                this.selectChoice(parseInt(choiceItem.dataset.choice));
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.mainContent.style.display !== 'none') {
                if (e.key >= '1' && e.key <= '4') {
                    const choiceIndex = parseInt(e.key) - 1;
                    this.selectChoice(choiceIndex);
                } else if (e.key === 'Enter' && this.nextBtn.style.display !== 'none') {
                    this.nextWord();
                }
            }
        });
    }
    
    showThemeSelector() {
        console.log('Showing theme selector...');
        this.themeSelector.style.display = 'block';
        this.mainContent.style.display = 'none';
        this.renderThemes();
    }
    
    renderThemes() {
        console.log('renderThemes called');
        console.log('themeGrid element:', this.themeGrid);
        
        if (!this.themeGrid) {
            console.error('themeGrid element not found');
            return;
        }
        
        this.themeGrid.innerHTML = '';
        
        try {
            Object.keys(vocabularyThemes).forEach(themeKey => {
                const theme = vocabularyThemes[themeKey];
                const themeProgress = this.userProgress.completedThemes[themeKey];
                const bestScore = this.userProgress.bestScores[themeKey] || 0;
                console.log(`Creating theme card for: ${themeKey}`, theme);
                
                const themeCard = document.createElement('button');
                themeCard.className = `theme-card ${themeKey}`;
                
                const wrongAnswersCount = Object.keys(this.userProgress.wrongAnswers[themeKey] || {}).length;
                
                let progressInfo = '';
                if (themeProgress && themeProgress.timesCompleted > 0) {
                    progressInfo = `
                        <div class="theme-progress">
                            <div class="best-score">최고: ${bestScore}점</div>
                            <div class="completion-count">${themeProgress.timesCompleted}회 완주</div>
                        </div>
                    `;
                }
                
                let reviewButton = '';
                if (wrongAnswersCount > 0) {
                    reviewButton = `
                        <button class="review-btn" data-theme="${themeKey}">
                            복습 (${wrongAnswersCount}개)
                        </button>
                    `;
                }
                
                themeCard.innerHTML = `
                    <span class="theme-icon">${theme.icon}</span>
                    <div class="theme-title">${theme.name}</div>
                    <div class="theme-count">${theme.words.length}개 단어</div>
                    ${progressInfo}
                    ${reviewButton}
                `;
                
                themeCard.addEventListener('click', () => this.selectTheme(themeKey));
                
                // Add review button event listener if exists
                const reviewBtn = themeCard.querySelector('.review-btn');
                if (reviewBtn) {
                    reviewBtn.addEventListener('click', (event) => {
                        event.stopPropagation();
                        this.startReview(themeKey);
                    });
                }
                
                this.themeGrid.appendChild(themeCard);
                console.log(`Added theme card: ${themeKey}`);
            });
            
            console.log(`Total theme cards created: ${this.themeGrid.children.length}`);
            
            // Force layout refresh
            this.themeGrid.style.display = 'none';
            this.themeGrid.offsetHeight; // Trigger reflow
            this.themeGrid.style.display = 'grid';
            
        } catch (error) {
            console.error('Error in renderThemes:', error);
            this.themeGrid.innerHTML = '<div style="color: red; text-align: center; padding: 20px;">테마 로딩 중 오류가 발생했습니다.</div>';
        }
    }
    
    selectTheme(themeKey) {
        this.currentTheme = themeKey;
        this.usedIndices = [];
        this.totalQuestions = 0;
        this.correctAnswers = 0;
        
        // Reset session stats for new theme
        this.sessionStats = {
            wordsLearned: 0,
            correctAnswers: 0,
            totalAnswers: 0,
            startTime: Date.now(),
            questionStartTime: null,
            actualStudyTime: 0
        };
        
        this.currentThemeLabel.textContent = vocabularyThemes[themeKey].name;
        this.updateScore();
        
        this.themeSelector.style.display = 'none';
        this.mainContent.style.display = 'block';
        
        this.loadNewWord();
    }
    
    getRandomWordIndex() {
        const currentWords = vocabularyThemes[this.currentTheme].words;
        
        if (this.usedIndices.length >= currentWords.length) {
            // All words completed - show completion modal
            this.showCompletionModal();
            return null;
        }
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * currentWords.length);
        } while (this.usedIndices.includes(randomIndex));
        
        this.usedIndices.push(randomIndex);
        return randomIndex;
    }
    
    generateChoices(correctMeaning) {
        const currentWords = vocabularyThemes[this.currentTheme].words;
        const choices = [correctMeaning];
        
        // Get all possible meanings except the correct one
        const otherMeanings = currentWords
            .filter(word => word.meaning !== correctMeaning)
            .map(word => word.meaning);
        
        // Add random wrong choices
        while (choices.length < 4 && otherMeanings.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherMeanings.length);
            const randomMeaning = otherMeanings[randomIndex];
            
            if (!choices.includes(randomMeaning)) {
                choices.push(randomMeaning);
            }
            otherMeanings.splice(randomIndex, 1);
        }
        
        // If we don't have enough choices from current theme, add from other themes
        if (choices.length < 4) {
            const allOtherMeanings = [];
            Object.keys(vocabularyThemes).forEach(themeKey => {
                if (themeKey !== this.currentTheme) {
                    vocabularyThemes[themeKey].words.forEach(word => {
                        if (!choices.includes(word.meaning)) {
                            allOtherMeanings.push(word.meaning);
                        }
                    });
                }
            });
            
            while (choices.length < 4 && allOtherMeanings.length > 0) {
                const randomIndex = Math.floor(Math.random() * allOtherMeanings.length);
                choices.push(allOtherMeanings[randomIndex]);
                allOtherMeanings.splice(randomIndex, 1);
            }
        }
        
        // Shuffle choices
        const shuffledChoices = [...choices];
        for (let i = shuffledChoices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
        }
        
        return {
            choices: shuffledChoices,
            correctIndex: shuffledChoices.indexOf(correctMeaning)
        };
    }
    
    loadNewWord() {
        this.currentWordIndex = this.getRandomWordIndex();
        
        if (this.currentWordIndex === null) {
            // Theme completed
            this.showCompletionModal();
            return;
        }
        
        const currentWord = vocabularyThemes[this.currentTheme].words[this.currentWordIndex];
        
        this.wordElement.textContent = currentWord.word;
        this.wordTypeElement.textContent = currentWord.type;
        
        // Generate choices
        const choiceData = this.generateChoices(currentWord.meaning);
        this.currentChoices = choiceData.choices;
        this.correctChoiceIndex = choiceData.correctIndex;
        this.selectedChoice = null;
        
        // Update choice elements
        for (let i = 0; i < 4; i++) {
            const choiceElement = document.getElementById(`choice${i}`);
            const choiceItem = choiceElement.parentElement;
            
            choiceElement.textContent = this.currentChoices[i] || '';
            choiceItem.className = 'choice-item';
            // Remove all selection/result classes
            choiceItem.classList.remove('correct', 'incorrect', 'selected');
        }
        
        this.feedbackElement.textContent = '';
        this.feedbackElement.className = 'feedback';
        this.nextBtn.style.display = 'none';
        
        // Reset typing mode state for loadNewWord
        if (this.typingMode) {
            this.typingInput.value = '';
            this.typingInput.disabled = false;
            this.submitTypingBtn.disabled = false;
            this.typingInput.style.borderColor = '';
            this.typingInput.focus();
        }
        
        // Update question progress counter
        this.updateQuestionProgress();
        this.updateQuizProgress();
        
        // Record question start time for accurate study time tracking
        this.sessionStats.questionStartTime = Date.now();
    }
    
    updateQuestionProgress() {
        if (this.questionProgress) {
            const currentQuestion = this.totalQuestions + 1;
            const totalQuestions = this.reviewMode ? this.reviewWords.length : vocabularyThemes[this.currentTheme].words.length;
            this.questionProgress.textContent = `문제 ${currentQuestion}/${totalQuestions}`;
        }
    }
    
    selectChoice(choiceIndex) {
        if (this.selectedChoice !== null) return;
        
        this.selectedChoice = choiceIndex;
        this.totalQuestions++;
        
        // Record actual study time for this question
        if (this.sessionStats.questionStartTime) {
            const questionTime = Date.now() - this.sessionStats.questionStartTime;
            this.sessionStats.actualStudyTime += questionTime;
        }
        
        // Show results
        for (let i = 0; i < 4; i++) {
            const choiceItem = document.querySelector(`[data-choice="${i}"]`);
            
            if (i === this.correctChoiceIndex) {
                choiceItem.classList.add('correct');
            } else if (i === choiceIndex) {
                choiceItem.classList.add('incorrect');
            }
        }
        
        const isCorrect = choiceIndex === this.correctChoiceIndex;
        
        if (isCorrect) {
            this.correctAnswers++;
            this.showFeedback('정답입니다! 🎉', 'correct');
        } else {
            // Track wrong answer for review
            this.trackWrongAnswer();
            this.showFeedback(`틀렸습니다. 😔 정답: ${this.currentChoices[this.correctChoiceIndex]}`, 'incorrect');
        }
        
        this.updateScore();
        this.nextBtn.style.display = 'inline-block';
        
        // Auto advance after 2 seconds if enabled
        if (this.autoAdvanceEnabled) {
            this.autoAdvanceTimeout = setTimeout(() => {
                this.nextWord();
            }, 2000);
        }
    }
    
    showFeedback(message, type) {
        this.feedbackElement.textContent = message;
        this.feedbackElement.className = `feedback ${type}`;
    }
    
    toggleTypingMode() {
        if (this.typingMode) {
            this.choicesSection.style.display = 'none';
            this.typingSection.style.display = 'block';
            this.typingInput.focus();
        } else {
            this.choicesSection.style.display = 'block';
            this.typingSection.style.display = 'none';
        }
        
        // Reset current question state when switching modes
        if (this.currentTheme) {
            this.resetCurrentQuestion();
        }
    }
    
    resetCurrentQuestion() {
        this.selectedChoice = null;
        this.typingInput.value = '';
        this.feedbackElement.textContent = '';
        this.feedbackElement.className = 'feedback';
        this.nextBtn.style.display = 'none';
        
        // Clear choice selections if in choice mode
        if (!this.typingMode) {
            for (let i = 0; i < 4; i++) {
                const choiceItem = document.querySelector(`[data-choice="${i}"]`);
                if (choiceItem) {
                    choiceItem.classList.remove('correct', 'incorrect', 'selected');
                }
            }
        }
    }
    
    submitTypingAnswer() {
        if (this.selectedChoice !== null) return;
        
        const userAnswer = this.typingInput.value.trim().toLowerCase();
        if (!userAnswer) {
            this.showFeedback('답안을 입력해주세요.', 'incorrect');
            return;
        }
        
        this.selectedChoice = 0; // Mark as answered
        this.totalQuestions++;
        
        // Record actual study time for this question
        if (this.sessionStats.questionStartTime) {
            const questionTime = Date.now() - this.sessionStats.questionStartTime;
            this.sessionStats.actualStudyTime += questionTime;
        }
        
        // Get the correct answer
        const correctAnswer = this.reviewMode ? 
            this.reviewWords[this.currentWordIndex].meaning : 
            vocabularyThemes[this.currentTheme].words[this.currentWordIndex].meaning;
        
        // Check if answer is correct (allow for variations)
        const isCorrect = this.checkTypingAnswer(userAnswer, correctAnswer);
        
        if (isCorrect) {
            this.correctAnswers++;
            this.showFeedback('정답입니다! 🎉', 'correct');
            this.typingInput.style.borderColor = 'var(--correct-color)';
        } else {
            // Track wrong answer for review
            this.trackWrongAnswer();
            this.showFeedback(`틀렸습니다. 😔 정답: ${correctAnswer}`, 'incorrect');
            this.typingInput.style.borderColor = 'var(--incorrect-color)';
        }
        
        this.updateScore();
        this.nextBtn.style.display = 'inline-block';
        
        // Disable input after submission
        this.typingInput.disabled = true;
        this.submitTypingBtn.disabled = true;
        
        // Auto advance after 2 seconds if enabled
        if (this.autoAdvanceEnabled) {
            this.autoAdvanceTimeout = setTimeout(() => {
                this.nextWord();
            }, 2000);
        }
    }
    
    checkTypingAnswer(userAnswer, correctAnswer) {
        // Normalize both answers for comparison
        const normalizeAnswer = (answer) => {
            return answer.toLowerCase()
                .trim()
                .replace(/[.,;:!?'"()]/g, '') // Remove punctuation
                .replace(/\s+/g, ' '); // Normalize spaces
        };
        
        const normalizedUser = normalizeAnswer(userAnswer);
        const normalizedCorrect = normalizeAnswer(correctAnswer);
        
        // Exact match
        if (normalizedUser === normalizedCorrect) {
            return true;
        }
        
        // Check if user answer contains the key words (for multi-word meanings)
        const correctWords = normalizedCorrect.split(' ');
        if (correctWords.length > 1) {
            // For multi-word answers, check if user got at least 80% of the words right
            const userWords = normalizedUser.split(' ');
            const matches = correctWords.filter(word => 
                userWords.some(userWord => 
                    userWord.includes(word) || word.includes(userWord)
                )
            );
            return matches.length >= Math.ceil(correctWords.length * 0.8);
        }
        
        // For single words, allow partial matches if the word is long enough
        if (normalizedCorrect.length >= 3) {
            return normalizedUser.includes(normalizedCorrect) || normalizedCorrect.includes(normalizedUser);
        }
        
        return false;
    }
    
    nextWord() {
        // Clear any pending auto-advance timeout
        if (this.autoAdvanceTimeout) {
            clearTimeout(this.autoAdvanceTimeout);
            this.autoAdvanceTimeout = null;
        }
        
        if (this.reviewMode) {
            this.loadReviewWord();
        } else {
            this.loadNewWord();
        }
    }
    
    pronounceWord() {
        if (this.speechSynthesis && this.voice) {
            // Cancel any ongoing speech
            this.speechSynthesis.cancel();
            
            // Get the word currently displayed on screen (works for both normal and review mode)
            const word = this.wordElement.textContent;
            const utterance = new SpeechSynthesisUtterance(word);
            
            utterance.voice = this.voice;
            utterance.rate = 0.7; // Slower for clarity
            utterance.pitch = 1;
            utterance.volume = 1;
            utterance.lang = 'en-US'; // Force English US
            
            console.log(`Pronouncing: ${word} with voice: ${this.voice.name}`);
            this.speechSynthesis.speak(utterance);
        } else {
            console.warn('Speech synthesis not available or voice not set');
        }
    }
    
    updateScore() {
        // Calculate total questions in current quiz (theme or review)
        const totalQuestionsInQuiz = this.reviewMode ? this.reviewWords.length : vocabularyThemes[this.currentTheme].words.length;
        
        // Calculate score as percentage of correct answers (100 points max)
        const score = this.totalQuestions > 0 ? Math.round((this.correctAnswers / this.totalQuestions) * 100) : 0;
        this.scoreElement.textContent = score;
        // Display accuracy as correct/total format
        this.accuracyElement.textContent = `${this.correctAnswers}/${totalQuestionsInQuiz}`;
    }
    
    updateQuizProgress() {
        const currentWords = vocabularyThemes[this.currentTheme].words;
        const progress = (this.usedIndices.length / currentWords.length) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    showCompletionModal() {
        const modal = document.getElementById('completionModal');
        const finalScore = document.getElementById('finalScore');
        const finalAccuracy = document.getElementById('finalAccuracy');
        const completedTheme = document.getElementById('completedTheme');
        const nextThemeBtn = document.getElementById('nextThemeBtn');
        const retryThemeBtn = document.getElementById('retryThemeBtn');
        
        // Update modal content
        const finalScoreValue = this.totalQuestions > 0 ? Math.round((this.correctAnswers / this.totalQuestions) * 100) : 0;
        const accuracy = finalScoreValue; // accuracy as percentage for shareScore function
        finalScore.textContent = finalScoreValue;
        finalAccuracy.textContent = `${this.correctAnswers}/${this.totalQuestions}`;
        completedTheme.textContent = vocabularyThemes[this.currentTheme].name;
        
        // Check for challenge completion
        if (this.checkChallengeSuccess(finalScoreValue)) {
            return; // Challenge result modal will be shown instead
        }
        
        // Update user progress
        this.updateProgress(this.currentTheme, finalScoreValue, accuracy);
        
        // Show modal
        modal.style.display = 'flex';
        
        // Bind events
        nextThemeBtn.onclick = () => {
            modal.style.display = 'none';
            this.showThemeSelector();
        };
        
        retryThemeBtn.onclick = () => {
            modal.style.display = 'none';
            this.selectTheme(this.currentTheme);
        };
        
        this.shareScoreBtn.onclick = () => {
            // 실제 정답 개수/총 문제 수 형식으로 전달
            const accuracyText = `${this.correctAnswers}/${this.totalQuestions}`;
            this.shareScore(finalScoreValue, accuracyText, vocabularyThemes[this.currentTheme].name);
        };
        
        // 리더보드 버튼 표시/숨김 (전체 40문제 완료 시에만 표시)
        const saveToLeaderboardBtn = document.getElementById('saveToLeaderboardBtn');
        if (saveToLeaderboardBtn) {
            if (this.totalQuestions === 40) {
                saveToLeaderboardBtn.style.display = 'inline-block';
            } else {
                saveToLeaderboardBtn.style.display = 'none';
            }
        }
        
        // Close modal on background click
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                this.showThemeSelector();
            }
        };
    }
    
    // Leaderboard Management Methods
    async initializeLeaderboard() {
        console.log('Initializing leaderboard...');
        if (window.leaderboardManager) {
            console.log('LeaderboardManager found, initializing...');
            await window.leaderboardManager.initialize();
            this.updateConnectionStatus();
        } else {
            console.warn('LeaderboardManager not found');
        }
    }
    
    updateConnectionStatus() {
        // Update both connection status elements
        const connectionElements = [
            document.getElementById('connectionStatus'), // Nickname modal
            document.getElementById('leaderboardConnectionInfo') // Leaderboard modal
        ];
        
        const isOnline = window.leaderboardManager?.isConnected();
        
        connectionElements.forEach((element, index) => {
            if (!element) return;
            
            const statusDot = element.querySelector('.status-dot');
            const statusText = element.querySelector('.status-text');
            
            if (isOnline) {
                if (statusDot) statusDot.className = 'status-dot online';
                if (statusText) statusText.textContent = '온라인 모드';
            } else {
                if (statusDot) statusDot.className = 'status-dot offline';
                if (statusText) statusText.textContent = '오프라인 모드';
            }
        });
    }
    
    showNicknameModal() {
        console.log('showNicknameModal called');
        
        if (!this.nicknameModal) {
            console.warn('nicknameModal element not found');
            return;
        }
        
        // Update connection status
        this.updateConnectionStatus();
        
        // Check if user already has a nickname
        const currentUser = window.leaderboardManager?.getCurrentUser();
        if (currentUser) {
            this.nicknameInput.value = currentUser.nickname;
        }
        
        console.log('Showing nickname modal');
        this.nicknameModal.style.display = 'flex';
        
        if (this.nicknameInput) {
            this.nicknameInput.focus();
            
            // Enter key to save
            this.nicknameInput.onkeypress = (e) => {
                if (e.key === 'Enter') {
                    this.saveToLeaderboard();
                }
            };
        }
        
        // Add background click to close modal
        this.nicknameModal.onclick = (e) => {
            if (e.target === this.nicknameModal) {
                this.hideNicknameModal();
            }
        };
    }
    
    hideNicknameModal() {
        if (this.nicknameModal) {
            this.nicknameModal.style.display = 'none';
            this.nicknameInput.value = '';
            this.updateConnectionStatus();
        }
    }
    
    async saveToLeaderboard() {
        console.log('saveToLeaderboard function called!');
        
        if (!this.nicknameInput) {
            alert('닉네임 입력 필드를 찾을 수 없습니다.');
            return;
        }
        
        const nickname = this.nicknameInput.value.trim();
        
        if (!nickname || nickname.length < 2) {
            alert('닉네임은 2자 이상 입력해주세요.');
            return;
        }

        if (nickname.length > 10) {
            alert('닉네임은 10자 이하로 입력해주세요.');
            return;
        }

        if (!window.leaderboardManager) {
            alert('리더보드 시스템이 초기화되지 않았습니다.');
            return;
        }
        
        try {
            // Set user nickname
            window.leaderboardManager.setUser(nickname);
            
            // Prepare score data from current quiz results
            const finalScore = document.getElementById('finalScore')?.textContent || '0';
            const finalAccuracyText = document.getElementById('finalAccuracy')?.textContent || '0/40';
            // Parse "10/40" format to get percentage
            const [correct, total] = finalAccuracyText.split('/').map(num => parseInt(num) || 0);
            const finalAccuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
            
            console.log('Score data preparation:', {
                finalScore,
                finalAccuracyText,
                finalAccuracy,
                theme: this.currentTheme
            });
            
            const scoreData = {
                score: parseInt(finalScore),
                accuracy: finalAccuracy,
                theme: this.currentTheme,
                studyTime: this.sessionStats.actualStudyTime || 0
            };
            
            // Save to leaderboard with timeout
            const savePromise = window.leaderboardManager.saveScore(scoreData);
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout')), 5000)
            );
            
            const result = await Promise.race([savePromise, timeoutPromise]);
            
            this.hideNicknameModal();
            
            if (result.success) {
                if (result.online) {
                    alert('🎉 점수가 온라인 리더보드에 저장되었습니다!');
                } else {
                    alert('✅ 점수가 로컬에 저장되었습니다.');
                }
                this.showLeaderboardModal();
            } else {
                alert('점수 저장 중 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error('Error saving to leaderboard:', error);
            this.hideNicknameModal();
            alert('점수 저장 중 오류가 발생했습니다.');
        }
    }
    
    // Leaderboard display method
    async showLeaderboard() {
        console.log('showLeaderboard called');
        
        // Initialize leaderboard manager if needed
        if (!window.leaderboardManager) {
            console.warn('Leaderboard manager not initialized');
            this.showToast('리더보드 시스템이 초기화되지 않았습니다.');
            return;
        }
        
        try {
            // Initialize Firebase connection
            console.log('Initializing Firebase connection...');
            const isOnline = await window.leaderboardManager.initialize();
            console.log('Firebase initialization result:', isOnline);
            console.log('isConnected check:', window.leaderboardManager.isConnected());
            
            // Show leaderboard modal directly
            this.showLeaderboardModal();
        } catch (error) {
            console.error('Error showing leaderboard:', error);
            this.showToast('리더보드를 불러오는 중 오류가 발생했습니다.');
        }
    }
    
    showLeaderboardModal() {
        if (this.leaderboardModal) {
            this.leaderboardModal.style.display = 'flex';
            this.initializeLeaderboardTabs();
            this.loadLeaderboardData();
        }
    }
    
    initializeLeaderboardTabs() {
        // Tab button event listeners
        const tabButtons = this.leaderboardModal.querySelectorAll('.tab-btn');
        const tabContents = this.leaderboardModal.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Update active tab button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update active tab content
                tabContents.forEach(content => content.classList.remove('active'));
                const targetContent = this.leaderboardModal.querySelector(`#${targetTab}Tab`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
                
                // Load appropriate data
                if (targetTab === 'global') {
                    this.loadLeaderboardData();
                } else if (targetTab === 'personal') {
                    this.loadPersonalStats();
                }
            });
        });
    }
    
    hideLeaderboardModal() {
        if (this.leaderboardModal) {
            this.leaderboardModal.style.display = 'none';
        }
    }
    
    async loadLeaderboardData() {
        try {
            const leaderboard = await window.leaderboardManager.getLeaderboard(10);
            this.displayLeaderboard(leaderboard);
        } catch (error) {
            console.error('Failed to load leaderboard:', error);
        }
    }
    
    loadPersonalStats() {
        const personalStatsDiv = document.getElementById('personalStats');
        if (!personalStatsDiv) {
            console.error('personalStats element not found');
            return;
        }
        
        console.log('Loading personal stats...');
        
        const currentUser = window.leaderboardManager?.getCurrentUser();
        if (!currentUser) {
            personalStatsDiv.innerHTML = '<div class="loading">닉네임을 설정해주세요.</div>';
            return;
        }
        
        console.log('Current user:', currentUser);
        console.log('User progress:', this.userProgress);
        console.log('User progress details:', {
            completedThemes: this.userProgress.completedThemes,
            bestScores: this.userProgress.bestScores,
            totalWordsLearned: this.userProgress.totalWordsLearned
        });
        console.log('completedThemes keys:', Object.keys(this.userProgress.completedThemes || {}));
        console.log('bestScores keys:', Object.keys(this.userProgress.bestScores || {}));
        
        // Get local user progress data
        const userProgress = this.userProgress || {};
        
        // Calculate personal statistics with safe defaults
        const totalThemes = Object.keys(vocabularyThemes || {}).length;
        const completedThemes = Object.keys(userProgress.completedThemes || {}).length;
        const totalGames = Object.values(userProgress.completedThemes || {})
            .reduce((sum, theme) => sum + (theme.timesCompleted || 0), 0);
        
        const bestScores = Object.values(userProgress.bestScores || {});
        const averageScore = bestScores.length > 0 
            ? bestScores.reduce((sum, score) => sum + score, 0) / bestScores.length 
            : 0;
        
        console.log('Calculated stats:', {
            totalThemes,
            completedThemes,
            totalGames,
            averageScore
        });
        
        personalStatsDiv.innerHTML = `
            <div class="personal-stat-item">
                <span class="personal-stat-label">닉네임</span>
                <span class="personal-stat-value">${currentUser.nickname}</span>
            </div>
            <div class="personal-stat-item">
                <span class="personal-stat-label">완료한 테마</span>
                <span class="personal-stat-value">${completedThemes}/${totalThemes}</span>
            </div>
            <div class="personal-stat-item">
                <span class="personal-stat-label">총 게임 수</span>
                <span class="personal-stat-value">${totalGames}회</span>
            </div>
            <div class="personal-stat-item">
                <span class="personal-stat-label">평균 점수</span>
                <span class="personal-stat-value">${Math.round(averageScore)}점</span>
            </div>
            <div class="personal-stat-item">
                <span class="personal-stat-label">학습한 단어</span>
                <span class="personal-stat-value">${userProgress.totalWordsLearned || 0}개</span>
            </div>
            <div class="personal-stat-item">
                <span class="personal-stat-label">연속 학습일</span>
                <span class="personal-stat-value">${userProgress.currentStreak || 0}일</span>
            </div>
        `;
        
        console.log('Personal stats loaded successfully');
    }
    
    displayLeaderboard(leaderboard) {
        const globalLeaderboard = document.getElementById('globalLeaderboard');
        if (!globalLeaderboard) return;
        
        if (leaderboard.length === 0) {
            globalLeaderboard.innerHTML = '<div class="loading">아직 등록된 점수가 없습니다.</div>';
            return;
        }
        
        globalLeaderboard.innerHTML = leaderboard.map((entry, index) => {
            const rank = index + 1;
            const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
            
            // 가장 최근에 플레이한 테마 찾기
            let recentTheme = '테마';
            let correctAnswers = 0;
            let totalQuestions = 40; // 각 테마당 40문제
            
            if (entry.themes) {
                const themeEntries = Object.entries(entry.themes);
                if (themeEntries.length > 0) {
                    // 가장 높은 점수를 받은 테마 찾기
                    const bestThemeEntry = themeEntries.reduce((best, current) => {
                        return current[1].bestScore > (best[1].bestScore || 0) ? current : best;
                    });
                    
                    // 테마 이름을 한글로 변환
                    const themeNames = {
                        'business': '비즈니스',
                        'science': '과학기술', 
                        'travel': '여행교통',
                        'daily': '일상생활',
                        'academic': '학문교육',
                        'it': 'IT컴퓨터'
                    };
                    
                    recentTheme = themeNames[bestThemeEntry[0]] || bestThemeEntry[0];
                    
                    // 정답률로부터 정답 개수 계산 (100점 만점 = 40문제 전부 정답)
                    const accuracy = bestThemeEntry[1].lastAccuracy || entry.averageAccuracy || 0;
                    correctAnswers = Math.round((accuracy / 100) * totalQuestions);
                }
            } else {
                // themes 정보가 없는 경우 평균 정답률 사용
                const accuracy = entry.averageAccuracy || 0;
                correctAnswers = Math.round((accuracy / 100) * totalQuestions);
            }
            
            // 플레이 시간 포맷
            const playTime = this.formatDateToKorean(entry.lastPlayed);
            
            return `
                <div class="leaderboard-item">
                    <div class="leaderboard-rank ${rankClass}">${rank}</div>
                    <div class="leaderboard-info">
                        <div class="leaderboard-nickname">${entry.nickname}</div>
                        <div class="leaderboard-stats">${recentTheme} • ${correctAnswers}/${totalQuestions} • ${playTime}</div>
                    </div>
                    <div class="leaderboard-score">${entry.bestScore}점</div>
                </div>
            `;
        }).join('');
    }
}

// Global quiz instance for review functionality
let quiz;

// Ensure the app initializes even if there are timing issues
let initAttempts = 0;
const maxInitAttempts = 3;

function initializeApp() {
    console.log(`DOM loaded, starting VocabularyQuiz... (attempt ${initAttempts + 1})`);
    
    try {
        // Check if critical elements exist
        const themeGrid = document.getElementById('themeGrid');
        const themeSelector = document.getElementById('themeSelector');
        const mainContent = document.getElementById('mainContent');
        
        if (!themeGrid || !themeSelector || !mainContent) {
            console.warn('Critical elements not found, retrying...');
            initAttempts++;
            if (initAttempts < maxInitAttempts) {
                setTimeout(initializeApp, 100);
                return;
            } else {
                throw new Error('Critical DOM elements not found after multiple attempts');
            }
        }
        
        window.quiz = new VocabularyQuiz();
        console.log('VocabularyQuiz initialized successfully');
    } catch (error) {
        console.error('Error initializing VocabularyQuiz:', error);
        console.error('Error stack:', error.stack);
        
        // Fallback: create a basic error display and manual theme buttons
        const themeGrid = document.getElementById('themeGrid');
        if (themeGrid) {
            themeGrid.innerHTML = `
                <div style="color: red; text-align: center; padding: 20px; grid-column: 1/-1;">
                    로딩 중 오류가 발생했습니다. 
                    <br><small>오류: ${error.message}</small>
                    <br><br>
                    <button onclick="location.reload()" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        새로고침
                    </button>
                </div>
            `;
        }
    }
}

// Dark mode functionality
class ThemeManager {
    constructor() {
        this.initializeTheme();
        this.setupEventListeners();
    }
    
    initializeTheme() {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
    }
    
    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
            console.log('Theme toggle event listener added successfully');
        } else {
            console.warn('Theme toggle button not found');
            // Try again after a short delay
            setTimeout(() => {
                const themeToggle = document.getElementById('themeToggle');
                if (themeToggle) {
                    themeToggle.addEventListener('click', () => this.toggleTheme());
                    console.log('Theme toggle event listener added successfully (delayed)');
                } else {
                    console.error('Theme toggle button still not found after delay');
                }
            }, 100);
        }
    }
    
    setTheme(theme) {
        const body = document.body;
        const themeIcon = document.querySelector('.theme-icon');
        
        console.log('Setting theme to:', theme);
        
        if (theme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            if (themeIcon) {
                themeIcon.textContent = '☀️';
                console.log('Set icon to sun (dark mode)');
            } else {
                console.warn('Theme icon not found for dark mode');
            }
        } else {
            body.removeAttribute('data-theme');
            if (themeIcon) {
                themeIcon.textContent = '🌙';
                console.log('Set icon to moon (light mode)');
            } else {
                console.warn('Theme icon not found for light mode');
            }
        }
        
        // Save theme preference
        localStorage.setItem('theme', theme);
        console.log('Theme saved to localStorage:', theme);
    }
    
    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        console.log('Toggling theme from', currentTheme || 'light', 'to', newTheme);
        this.setTheme(newTheme);
    }
    
    getCurrentTheme() {
        return document.body.getAttribute('data-theme') || 'light';
    }
}

// Initialize theme manager
let themeManager;

function initializeThemeManager() {
    console.log('Initializing ThemeManager...');
    themeManager = new ThemeManager();
    console.log('ThemeManager initialized successfully');
}

function initializeComplete() {
    initializeThemeManager();
    initializeApp();
}

document.addEventListener('DOMContentLoaded', initializeComplete);

// Backup initialization for older browsers
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComplete);
} else {
    // DOM is already loaded
    setTimeout(initializeComplete, 10);
}