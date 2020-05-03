import api from "../api";

export const checkLogin = (data: any) => api.post(`/api/auth/login`, data);
export const checkRegister = (data: any) => api.post(`/api/auth/register`, data);

export default {
  checkLogin,
  checkRegister
};
