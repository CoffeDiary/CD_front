import axios from 'axios';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset = utf-8'
    }
});

instance.interceptors.request.use(
  (config) => {
    if (cookies.isKey("access_token") === true)
      config.headers.Authorization = cookies.get("access_token");
    else
      config.headers.Authorization = '';
    return config;
  },
  (error) => {
    return Promise.rejext(error);
  }, null, { runwhen: getDiaryList }
);

function registerUser(userData) {
  return instance.post('join', userData);
}
function loginUser(userData) {
  return instance.post('login', userData);
}
function postDiary(userData) {
  return instance.post('api/diary', userData);
}
function putDiary(userData, id) {
  return instance.put('api/diary/' + id, userData);
}
function deleteDiary(id) {
  return instance.delete('api/diary/' + id);
}
function getDiaryList(userData) {
  return instance.get('api/diary/list', userData);
}

export { registerUser, loginUser, postDiary, putDiary, deleteDiary, getDiaryList };
