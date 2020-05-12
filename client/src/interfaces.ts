export interface IRegisterForm {
  isAuthenticated: Boolean
  // checkRegister?: (form: {name: String, email: String, password: String}) => void
  checkRegister: (...args: any[]) => any
}

export interface IAuthForm {
  isAuthenticated: Boolean
  checkLogin: (...args: any[]) => any
  // checkRegister?: (form: {name: String, email: String, password: String}) => void
}