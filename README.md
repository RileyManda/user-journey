# User Journey Application

This project is a React-based web application designed to simulate a user journey through a basic application process. The application showcases skills in making API calls, managing state with Redux or local storage, and implementing specific design requirements.

## Table of Contents
- [Objective](#objective)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [ProjectSetup](#project-setup)
- [Usage](#usage)
  - [Landing Page](#landing-page)
  - [Application Page](#application-page)
  - [Save & Exit Button](#save--exit-button)
  - [Summary Page](#summary-page)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Evaluation Criteria](#evaluation-criteria)
- [Design](#design)
- [License](#license)

---

## Objective

The objective of this application is to create a simple user journey that includes navigating through multiple pages, making API calls, and preserving the user’s state across pages.

## Features

- **Landing Page**: A starting point for users with a button to initiate the application process.
- **Application Page**: Fetches user data from a remote API and displays it.
- **Save & Exit Button**: Allows users to save their progress and view a summary.
- **Summary Page**: Displays a summary of the user’s application data and offers an option to continue the application.

## Tech Stack

# ProjectSetup

## project-setup

To get started with the project, clone this repository and install the necessary dependencies.

```bash
git clone <repository-url>
cd <project-folder>
npm install 
or
yarn 
```

### Create a .env file:
```bash
VITE_GRAPHQL_ENDPOINT=add-graphql-api-url
VITE_AUTH_TOKEN=add-auth-token-here
```
## Run the application

```bash
npm run dev
or
yarn dev
```

## Tech Stack

The project is built using the following technologies and libraries:

#### **Frontend Framework**
- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces. (version `^18.3.1`)
- **[React DOM](https://react.dev/reference/react-dom/components)**: Provides DOM-specific methods for React. (version `^18.3.1`)

#### **State Management**
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: Simplifies state management with features like `createSlice` and `createAsyncThunk`. (version `^2.3.0`)
- **[React Redux](https://react-redux.js.org/)**: Official React bindings for Redux. (version `^9.1.2`)

#### **Routing**
- **[React Router](https://reactrouter.com/)**: Declarative routing for React applications. (version `^6.28.0`)
- **[React Router DOM](https://reactrouter.com/)**: DOM bindings for React Router. (version `^6.28.0`)

#### **UI Framework**
- **[Material-UI (MUI)](https://mui.com/)**: Components and design system for React apps.
  - **[MUI Material](https://mui.com/)**: Core Material-UI components. (version `^6.1.7`)
  - **[MUI Icons](https://mui.com/material-ui/material-icons/)**: Material Design icons for React. (version `^6.1.7`)
  - **[MUI Styled Engine](https://mui.com/system/styled/)**: Integrates Material-UI with `styled-components`. (version `^6.1.7`)

#### **Styling**
- **[Emotion](https://emotion.sh/docs/introduction)**: A CSS-in-JS library for styling components. 
  - **[Emotion React](https://emotion.sh/docs/@emotion/react)**: Emotion's React bindings. (version `^11.13.3`)
  - **[Emotion Styled](https://emotion.sh/docs/@emotion/styled)**: Emotion's styled component library. (version `^11.13.0`)
- **[Styled Components](https://styled-components.com/)**: CSS-in-JS for building styled React components. (version `^6.1.13`)

#### **GraphQL**
- **[Apollo Client](https://www.apollographql.com/docs/react/)**: A comprehensive GraphQL client for React. (version `^3.11.10`)
- **[GraphQL](https://graphql.org/)**: Query language for APIs. (version `^16.9.0`)

#### **Environment Variables**
- **[dotenv](https://github.com/motdotla/dotenv)**: Loads environment variables from a `.env` file. (version `^16.4.5`)

#### **Build Tool**
- **[Vite](https://vitejs.dev/)**: Fast build tool and development server. (version `^5.4.10`)

#### **TypeScript**
- **[TypeScript](https://www.typescriptlang.org/)**: Adds type safety and modern JavaScript features. (version `~5.6.2`)
- **[@types/react](https://www.npmjs.com/package/@types/react)**: Type definitions for React. (version `^18.3.12`)
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)**: Type definitions for React DOM. (version `^18.3.1`)

#### **Linting and Code Quality**
- **[ESLint](https://eslint.org/)**: A pluggable JavaScript linter. (version `^9.13.0`)
  - **[@eslint/js](https://www.npmjs.com/package/@eslint/js)**: Core ESLint functionality. (version `^9.13.0`)
  - **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)**: Rules for React hooks. (version `^5.0.0`)
  - **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)**: Linting rules for React Refresh. (version `^0.4.14`)
- **[Globals](https://github.com/sindresorhus/globals)**: Provides a list of global variables for linting. (version `^15.11.0`)

---
### License

This project is licensed under the **[MIT License](./LICENSE)**.

---

#### MIT License



