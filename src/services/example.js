import request from '../utils/request';

export function query() {
  return request('/api/users');
}
//注册
export function register(paload) {
  console.log(paload)
  // return request('/api/emstu/teacher/register',paload);
}
