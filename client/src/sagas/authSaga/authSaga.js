import api from '../../api/auth';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getLogin, checkRegister, checkLogout, isAuth } from '../../action-creator/action-creator';
import {ActionType} from '../../constants/ActionType';


/** saga worker that is responsible for the side effects */
function* loginEffectSaga(action) {

  try {
    // yield put(fetchLogin());
    // data is obtained after axios call is resolved
    let { data } = yield call(api.checkLogin, action.payload);

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.token) {
      yield put(getLogin(userData));
    } else {
      yield put(getLogin(data));
    }

    localStorage.setItem('userData', JSON.stringify({
      token: data.token,
      userId: data.userId
    }));
    
    // store data to localStorage
    // Object.keys(data.session).forEach(key, => {
    //   localStorage.setItem(key, data[key]);
    // });
    // dispatch action to change redux state
    // yield put(updateProfile(data.profile));
    // redirect to home route after successful login
  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}

function* registerEffectSaga(action) {
  try {
    // data is obtained after axios call is resolved
    let { data } = yield call(api.checkRegister, action.payload);

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.token) {
      yield put(getLogin(userData));
    } else {
      yield put(checkRegister(data));
    }

    localStorage.setItem('userData', JSON.stringify({
      token: data.token,
      userId: data.userId
    }));


    
    // store data to localStorage
    // Object.keys(data.session).forEach(key, => {
    //   localStorage.setItem(key, data[key]);
    // });
    // dispatch action to change redux state
    // yield put(updateProfile(data.profile));
    // redirect to home route after successful login
  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}

function* logoutEffectSaga() {
  try {

    localStorage.removeItem('userData');

    yield put(checkLogout());
    
    
  } catch (e) {
    
  }
}


/**
 * saga watcher that is triggered when dispatching action of type
 * 'LOGIN_WATCHER'
 */
export function* loginWatcherSaga() {
  yield takeLatest(ActionType.CHECK_LOGIN, loginEffectSaga);
}

export function* registerWatcherSaga() {
  yield takeLatest(ActionType.CHECK_REGISTER, registerEffectSaga);
}

export function* logoutWatcherSaga() {
  yield takeLatest(ActionType.CHECK_LOGOUT, logoutEffectSaga);
}