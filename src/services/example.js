import request from '../utils/request';

export function query() {
  return request('/api/users');
}
//注册
export function register(paload) {
  // console.log(paload)
  // return request('http://148.70.121.59:9001/emstu/teacher/register',paload);
}