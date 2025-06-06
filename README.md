# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## babel 플러그인 설치
   ```bash
      npm install --save-dev babel-plugin-module-resolver
   ```
- import할 때 모듈 경로 별칭 설정
## 작업 전

   ```bash
      git pull origin main
   ```
## 작업 후 

   ```bash
      git add .
      git commit -m "COMMENTS"
      git push origin BRANCH
   ```

## branch 만들기

   ```bash
      git fetch origin
      git checkout NAME
   ```

## 📁 디렉토리 구조
```perl
   MeetingHost/
├── app/                     ### 라우팅을 담당하는 폴더 (expo-router)
│   ├── (active)/              # 메인 앱 화면 그룹
│   │   ├── home/
│   │   │   └── index.js       # /home 진입점 → HomeScreen 렌더링
│   │   ├── iceBreakings/
│   │   │   ├── index.js       # 아이스 브레이킹 메뉴
│   │   │   ├── showTopics/    # 주제 제시하기
│   │   │   ├── topicsWorldCup/# 주제 월드컵
│   │   │   ├── liarGame/      # 라이어 게임
│   │   │   └── result/        # 아이스 브레이킹 결과 화면
│   │   └── drinkingGames/
│   │       ├── index.js       # 술게임 메뉴
│   │       ├── whisper        # 귓속말 게임
│   │       ├── king/          # 왕게임
│   │       ├── balance/       # 밸런스게임
│   │       ├── quiz/          # 퀴즈 (인물 맞추기)
│   │       └── result/        # 게임 결과 화면
│   └── _layout.js             # 공통 레이아웃 구성 (ex. Stack, Tabs)
│
├── src/                     ### 실제 기능 로직 및 컴포넌트들
│   ├── features/              # 기능(도메인) 단위 폴더
│   │   ├── home/
│   │   │   ├── components/    # 홈 화면에서만 쓰는 컴포넌트
│   │   │   ├── hooks/         # 홈 관련 커스텀 훅
│   │   │   ├── utils/         # 홈 화면 관련 유틸 함수
│   │   │   └── HomeScreen.js  # 홈 화면 UI 정의
│   │   └── iceBreakings/
│   │       └── ...            # 동일 구조
│   │   └── drinkingGames/
│   │       └── ...            # 동일 구조
│   │
│   ├── components/            # 공통으로 사용되는 UI 컴포넌트
│   │   └── Button.js          # 예: 재사용 가능한 버튼 컴포넌트
│   │
│   ├── stores/                # Zustand 등 상태 관리
│   │   └── useUserStore.js    # 사용자 정보 상태 관리 훅
│   │
│   ├── constants/             # 전역 상수 모음
│   │   └── colors.js          # 테마 색상 등
│   │
│   ├── assets/                # 이미지, 폰트, 사운드 등 리소스
│   │   └── images/          
│   │   └── fonts/          
│   │
│   └── lib/                   # API요청, 외부 모듈 래퍼 등 유틸 함수
│       └── api.js
│
├── App.js                     # 앱 엔트리 포인트
├── package.json
└── README.md

```