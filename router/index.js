import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'MainView',
		component: () => import('@/views/MainView')
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'ErrorPage',
		component: () => import('@/views/ErrorPage')
	},
	{
		path: '/signup',
		name: 'Signup',
		component: () => import('@/views/Signup')
	},
	{
		path: '/signin',
		name: 'Signin',
		component: () => import('@/views/Signin')
	},
	{
		path: '/diary/post',
		name: 'DiaryPost',
		component: () => import('@/views/diary/Post')
	},
	{
		path: '/diary/get',
		name: 'DiaryGet',
		component: () => import('@/views/diary/Get')
	},
	{
		path: '/user/get',
		name: 'Userget',
		component: () => import('@/views/user/Get')
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
