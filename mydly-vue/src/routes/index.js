import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login'

Vue.use(VueRouter)

const Routes = {
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'index',
			component: Login,
			meta: {
				auth: false,
			},
		},
		{
			path: '/login',
			name: 'index',
			component: Login,
			meta: {
				auth: false,
			},
		},
	],
}

const router = new VueRouter(Routes)

export default router
