<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# Post-log-Frontend

## TMI

공부해오던 기술들에 대한 심화학습을 진행하기 위해 react 공부시에 많이 참고하던 velopert 개발자님의 '리액트를 다루는 기술' 책을 보고 배우며 만든 toy project를 개인적으로 custom

원래의 project는 class형 component로 이루어져 있는데, 개인적인 custom 과정을 거치면서 react hooks를 사용한 구조로 바꾸었음.

간단히 글을 Post-it을 게시판에 붙히는 형태의 UI로 구성하여 가벼우면서 공부하던 login기능도 구현한 project


## 사용한 기술

- react (hooks)
- react-router-dom
- redux
- redux-actions
- immer
- redux-saga
- axios
- styled-components

## Project 구조

- components
    - logic이 들어있지 않은 재사용 가능한 view 파일
- containers
    - 주요한 logic들과 components가 결합된 파일
- pages
    - routing을 위해 나누어둔 page
- actions
    - actions들을 관리하기 용이하도록 모아둔 폴더
- reducers
    - reducer들을 관리하기 용이하도록 모아둔 폴더
- sagas
    - saga들을 관리하기 용이하도록 모아둔 폴더
- store
    - sagaMiddleware를 연결하기 위한 store가 들어있는 폴더
- lib
    - axios에 대한 api를 만들어둔 폴더


## 이전 Project보다 나아진 점

1. 다양한 api들을 연결하는 과정에서 redux-saga에 대한 이해도를 높힐 수 있는 시간이였다.
2. 여러가지 간단한 module을 만들어 재사용성의 장점에 대해 체감하고 중요성을 알게 되었음.

아직 google 및 facebook에 대한 oauth2 적용이 진행중
>>>>>>> 572a6025f2ab5a885a74f47937f55ceb2f10f3fc
