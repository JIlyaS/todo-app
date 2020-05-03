import { ActionType } from '../constants/ActionType';

export const checkLogin = (authParams: any) => {
  return {
    type: ActionType.FETCH_LOGIN,
    payload: authParams
  }
}

export const checkRegister = (regParams: any) => {
  return {
    type: ActionType.FETCH_REGISTER,
    payload: regParams
  }
}