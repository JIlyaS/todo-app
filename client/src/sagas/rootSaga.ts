import { all } from 'redux-saga/effects';
import {
  loginWatcherSaga,
  registerWatcherSaga
} from './authSaga/authSaga';

export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    registerWatcherSaga()
  ]);
}