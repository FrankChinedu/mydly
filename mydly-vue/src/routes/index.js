import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import RecoverPassword from '../pages/RecoverPassword'
import routes from './list'

Vue.use(VueRouter)

const Routes = {
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: routes.home,
			name: 'index',
			component: Login,
			meta: {
				auth: false,
				togo: 'signUp',
			},
		},
		{
			path: routes.login,
			name: 'login',
			component: Login,
			meta: {
				auth: false,
				togo: 'signUp',
			},
		},
		{
			path: routes.signUp,
			name: 'signup',
			component: SignUp,
			meta: {
				auth: false,
				togo: 'home',
			},
		},
		{
			path: routes.recover_password,
			name: 'recover_password',
			component: RecoverPassword,
			meta: {
				auth: true,
			},
		},
	],
}

const router = new VueRouter(Routes)

export default router
