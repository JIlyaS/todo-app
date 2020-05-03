import api from '../../api/auth';
// import { browserHistory } from 'react-router';
import history from '../../history';
import { takeLatest, call, put } from 'redux-saga/effects';
// import { checkLogin } from '../../action-creator/action-creator';
import {ActionType} from '../../constants/ActionType';


/** saga worker that is responsible for the side effects */
function* loginEffectSaga(action) {
  try {
    // data is obtained after axios call is resolved
    let { data } = yield call(api.checkLogin, action.payload);
    console.log("function*loginEffectSaga -> data", data);
    
    // store data to localStorage
    // Object.keys(data.session).forEach(key, => {
    //   localStorage.setItem(key, data[key]);
    // });
    // dispatch action to change redux state
    // yield put(updateProfile(data.profile));
    // redirect to home route after successful login
    // history.push('/');
  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}

function* registerEffectSaga(action) {
  try {
    // data is obtained after axios call is resolved
    let { data } = yield call(api.checkRegister, action.payload);
    console.log(data);
    
    // store data to localStorage
    // Object.keys(data.session).forEach(key, => {
    //   localStorage.setItem(key, data[key]);
    // });
    // dispatch action to change redux state
    // yield put(updateProfile(data.profile));
    // redirect to home route after successful login
    // browserHistory.push('/home');
  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}


/**
 * saga watcher that is triggered when dispatching action of type
 * 'LOGIN_WATCHER'
 */
export function* loginWatcherSaga() {
  yield takeLatest(ActionType.FETCH_LOGIN, loginEffectSaga);
}

export function* registerWatcherSaga() {
  yield takeLatest(ActionType.FETCH_REGISTER, registerEffectSaga);
}