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
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
