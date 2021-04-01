# Anticipations

## Getting Started

### Prerequisites

- [Node v12 or above](https://nodejs.org/en/)
- Yarn or NPM

### Installing

Clone the repo and move to the project directory

```(shell)
$ git clone https://github.com/matheusls/anticipations.git
$ cd anticipations
```

Install the dependencies with Yarn

```(shell)
$ yarn
```

Or with NPM

```(shell)
$ npm i
```

Run the project locally

```(shell)
$ yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn test`

Launches the test runner once.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.

### `yarn lint`

Runs the linter inside the `src` folder and logs any error or warnings.

### `yarn lint:fix`

Same as above, but tries to fix errors and warnings given.\
Anything that the linter can't fix will be logged in the console at the end.

### `yarn format`

Runs prettier inside the `src` folder and logs any any code style inconsistencies.

### `yarn format:fix`

Same as above, but tries to fix any code style inconsistencies.\
Anything that prettier can't fix will be logged in the console at the end.

## Folder Structure

### `components`

Folder responsible for holding our presentational components. Components in this folder may have some simple states, such as a toogle.

### `containers`

Folder responsible for holding our components with more complex states. These components may have more complex states and execute tasks such as API calls, validations and error handling.

### `hooks`

Folder responsible for holding our custom hooks.

### `pages`

Folder responsible for holding our pages. These components are responsible for laying out our presentational components and containers.

### `services`

Folder responsible for

### `styles`

Folder responsible for holding everything related to styles that are not specific to any component or page, such as global styles and themes.

### `tests`

Folder responsible for holding everything related to tests that are not specific to anything, such as test utilities and fixtures.

### `utils`

Folder responsible for holding general utilities that are not specific to anything, such as reusable functions.

## Built With

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/), for styling
- [styled-normalized](https://github.com/sergeysova/styled-normalize), for setting an default style across browsers
- [react-use](https://github.com/streamich/react-use), for useful hooks
- [react-hook-form](https://react-hook-form.com/), for creating our forms
- [workbox](https://developers.google.com/web/tools/workbox), for PWA capabilities
- [jest](https://jestjs.io/), for running tests
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/), for testing our React components
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction), for nice toast messages out of the box
- [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library), for testing our React hooks
- [husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged), for commit hooks
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/), for code styling and formatting
- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter), for commit message standardization
