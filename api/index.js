import axios from 'axios';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

var accessToken = '';
try {
  accessToken = cookies.get("access_token");
  // console.log(accessToken);
} catch (err) {
  console.log(err);
}

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
    'Authorization': accessToken,
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
function getDiaryList(userData) {
  return instanceIfTokenExist.get('api/diary/list', userData);
}

export { registerUser, loginUser, postDiary, getDiaryList };
