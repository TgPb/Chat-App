import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleWare from 'redux-saga';

import {rootReducer} from "./rootReducer";
import {rootSaga} from "./rootSaga";

const sagaMiddleware = createSagaMiddleWare();

const middlewares = [
    sagaMiddleware
];

const composeEnchansers = composeWithDevTools({});

export const store = createStore(
    rootReducer,
    composeEnchansers(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);