import { createWebHistory, createRouter } from 'vue-router';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

function notRequireAccessToken(to, from, next) {
  if (cookies.isKey("access_token") == true)
    next({ name: 'Home'});
  else
    next();
}

function requireAccessToken(to, from, next) {
  if (cookies.isKey("access_token") == false)
    next({ name: 'MainView'});
  else
    next();
}

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: () => import('@/views/MainView'),
    beforeEnter: notRequireAccessToken,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    beforeEnter: requireAccessToken,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: () => import('@/views/ErrorPage')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/join/Post'),
    beforeEnter: notRequireAccessToken,
    
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/views/login/Post'),
    beforeEnter: notRequireAccessToken,
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/logout'),
    beforeEnter: requireAccessToken,
  },
  {
    path: '/diary/post',
    name: 'DiaryPost',
    component: () => import('@/views/diary/Post'),
    beforeEnter: requireAccessToken,
  },
  {
    path: '/diary/get',
    name: 'DiaryGet',
    component: () => import('@/views/diary/Get'),
    beforeEnter: requireAccessToken,
  },
  {
    path: '/diary/put',
    name: 'DiaryPut',
    component: () => import('@/views/diary/Put'),
    beforeEnter: requireAccessToken,
  },
  {
    path: '/diary/delete',
    name: 'DiaryDelete',
    component: () => import('@/views/diary/Delete'),
    beforeEnter: requireAccessToken,
  },
  {
    path: '/diary/list/get',
    name: 'DiaryListGet',
    component: () => import('@/views/diary/list/Get'),
    beforeEnter: requireAccessToken,
  },
  {
    path: '/user/get',
    name: 'Userget',
    component: () => import('@/views/user/Get'),
    beforeEnter: requireAccessToken,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
