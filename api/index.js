import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset = utf-8'
    }
});
const instanceIfTokenExist = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': '${this.$cookies.get("access_token")}',
    'Content-Type': 'application/json; charset = utf-8'
    }
});
function registerUser(userData) {
  return instance.post('join', userData);
}
function loginUser(userData) {
  return instance.post('login', userData);
}
function postDiary(userData) {
  return instanceIfTokenExist.post('api/diary', userData);
}
export { registerUser, loginUser, postDiary };
