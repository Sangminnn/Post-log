# Post-log-Frontend

## TMI

공부해오던 기술들에 대한 심화학습을 진행하기 위해 react 공부시에 많이 참고하던 velopert 개발자님의 '리액트를 다루는 기술' 책을 보고 배우며 만든 toy project를 개인적으로 custom

원래의 project는 class형 component로 이루어져 있는데, 개인적인 custom 과정을 거치면서 react hooks를 사용한 구조로 바꾸었음.



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


- components - logic이 들어있지 않은 재사용 가능한 view 파일
- containers - 주요한 logic들과 components가 결합된 파일
- pages - routing을 위해 나누어둔 page
- actions - actions들을 관리하기 용이하도록 모아둔 폴더
- reducers - reducer들을 관리하기 용이하도록 모아둔 폴더
- sagas - saga들을 관리하기 용이하도록 모아둔 폴더
- store - sagaMiddleware를 연결하기 위한 store가 들어있는 폴더
- lib - axios에 대한 api를 만들어둔 폴더



## 이전 Project보다 나아진 점


1. 다양한 api들을 연결하는 과정에서 redux-saga에 대한 이해도 향상
2. 여러가지 간단한 module을 만들어 재사용성의 장점에 대해 체감


---


아직 google 및 facebook에 대한 oauth2 적용이 진행중입니다.
