# typescript + node + eslint - boilerplate

## 설치

- yarn add -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-prettier

- yarn add -D prettier typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser

## eslint 관련 파일 생성 및 설정

- .eslintrc (eslint 설정들)

```json
{
  "parser": "@typescript-eslint/parser",
  "env": {
    "node": true
  },
  "extends": ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended"],
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint/eslint-plugin"],
  "rules": {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "quotes": [2, "single", "avoid-escape"],

    // Delete `␍`eslintprettier/prettier 대응
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}
```

- .eslintignore (eslint 를 적용하지 않을 파일 및 폴더 지정)

```json
**/build/*
**/node_modules/*
**/.vscode/*
```

## prettier 관련 설정

- .prettierrc (prettier 설정들)

```json
{
  "name": "node-typescript-eslint-boilerplate",
  "version": "0.0.0",
  "description": "TypeScript + TypeORM + PostgreSQL + Express API Server",
  "author": "",
  "license": "ISC",
  "scripts": {
    "start": "npm run build && cross-env NODE_ENV=production node build/server.js",
    "dev": "cross-env NODE_ENV=development nodemon",
    "build": "tsc",
    "test": "jest --forceExit --detectOpenHandles",
    "lint": "eslint . --ext ts --ext js",
    "lint:fix": "npm run lint -- --fix"
  },
  "dependencies": {
    "cross-env": "^7.0.3",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.3"
  },
  "devDependencies": {
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.11",
    "@types/node": "^14.14.36",
    "@typescript-eslint/eslint-plugin": "^4.19.0",
    "@typescript-eslint/parser": "^4.19.0",
    "eslint": "^7.22.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-config-prettier": "^8.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "node-gyp": "^7.1.2",
    "nodemon": "^2.0.7",
    "prettier": "^2.2.1"
  }
}
```

## 에디터 관련 설정

- .vscode > settings.json

```json
{
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javscript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
   "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```
