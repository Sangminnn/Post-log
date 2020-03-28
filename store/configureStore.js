import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import modules from 'reducers';
import rootSaga from 'sagas';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
    const store = createStore(modules, initialState, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));

    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore;