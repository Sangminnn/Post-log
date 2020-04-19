# Post-log-Frontend

## TMI

공부해오던 기술들에 대한 심화학습을 진행하기 위해 간단히 글귀를 Post-it에 적어 게시판에 붙히는 형태의 UI로 구성하여 가벼우면서 공부하던 login기능도 구현한 toy project


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

## Project 화면 구성

### 메인 화면

![](https://images.velog.io/images/sangminnn/post/3c241965-659f-451b-aa66-5345322c6a38/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-20%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.24.00.png)

### 로그인 화면

![](https://images.velog.io/images/sangminnn/post/73b66e80-3f2c-435c-8555-6ad53bb54577/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-20%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.24.11.png)


### 로그인 완료 화면

![](https://images.velog.io/images/sangminnn/post/746a2bad-5475-45aa-9fd6-d388a85fac30/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-04-20%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.24.29.png)


## 이전 Project보다 나아진 점

1. 다양한 api들을 연결하는 과정에서 redux-saga에 대한 이해도를 높힐 수 있는 시간이였다.
2. 여러가지 간단한 module을 만들어 재사용성의 장점에 대해 체감하고 중요성을 알게 되었음.

아직 google 및 facebook에 대한 oauth2 적용이 진행중

++) 현재는 google oauth2 에 대한 기능만 구현 완료
