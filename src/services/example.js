import request from '../utils/request';

export function query() {
  return request('/api/users');
}
//注册
export function register(paload) {
  return request('/api/emstu/teacher/register',paload);
}
//登录
export function login(paload) {
  return request('/api/emstu/teacher/login',paload);
}
