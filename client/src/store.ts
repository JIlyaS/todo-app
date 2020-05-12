import createSagaMiddleWare from "redux-saga";
import {createStore, compose, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./sagas/rootSaga";
import reducers from "./reducers/reducers";

// создать saga middleware
const sagaMiddleware = createSagaMiddleWare();
// записать в store
const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
  reducers,
  compose(middlewares)
);

// Запустить saga
sagaMiddleware.run(rootSaga);

export default store;
