import createSagaMiddleWare from "redux-saga";
import {createStore, compose, applyMiddleware} from "redux";

import rootSaga from "./sagas/rootSaga";
import reducers from "./reducers/reducers";

const sagaMiddleware = createSagaMiddleWare();
const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(
  reducers,
  compose(middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
