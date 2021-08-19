# ReactNextGen

## Project structure
```
.
└── ReactNextGen/
    ├── public/
    │   ├── data
    │   ├── enums
    │   └── model
    ├── src/
    │   ├── app/
    │   │   ├── data
    │   │   ├── enums
    │   │   └── model
    │   ├── assets/
    │   │   ├── config/
    │   │   │   └── default.json
    │   │   ├── images
    │   │   ├── styles/
    │   │   │   ├── commonStyle.ts
    │   │   │   └── index.ts
    │   │   └── themes/
    │   │       ├── index.ts
    │   │       ├── darkTheme.ts
    │   │       └── lightTheme.ts
    │   ├── components/
    │   │   ├── footer
    │   │   ├── header/
    │   │   │   ├── banner.tsx
    │   │   │   ├── index.tsx
    │   │   │   ├── navBar.tsx
    │   │   │   └── subMene.tsx
    │   │   ├── help
    │   │   ├── about.tsx
    │   │   └── home.tsx
    │   ├── modulesAPI/
    │   │   ├── bannerMessgeAPI.ts
    │   │   └── requestAPI.ts
    │   ├── modulesSlice/
    │   │   ├── bannerMessageSlice.ts
    │   │   └── index.ts   
    │   ├── reduxStore/
    │   │   └── store.ts
    │   ├── routes/
    │   │   └── appRoutes.tsx
    │   ├── App.css
    │   ├── App.test.tsx
    │   ├── App.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   └── logo.svg
    ├── .env
    ├── package.json
    └── tsconfig.json
```

## Developing
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so it contains all the scripts you know and love:

### npm/yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
