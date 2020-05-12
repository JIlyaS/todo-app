import { ActionType } from '../constants/ActionType';

export const checkLogin = (payload: any) => {
  return {
    type: ActionType.CHECK_LOGIN,
    payload
  }
}

export const isAuth = (payload: any) => {
  return {
    type: ActionType.IS_AUTH,
    payload
  }
}

export const getLogin = (payload: any) => {
  return {
    type: ActionType.GET_LOGIN,
    payload
  }
}

export const failureLogin = (payload: any) => {
  return {
    type: ActionType.FAILURE_LOGIN,
    payload
  }
}

export const checkRegister = (payload: any) => {
  return {
    type: ActionType.CHECK_REGISTER,
    payload
  }
}

export const checkLogout = () => {
  return {
    type: ActionType.CHECK_LOGOUT
  }
}