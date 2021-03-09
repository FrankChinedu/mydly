import { Route } from 'react-router-dom'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import RecoverPassword from '../pages/recover-password'
import ROUTES from './list'

const routes = [
	{
		component: Login,
		path: ROUTES.home,
		RouteType: Route,
	},
	{
		component: Login,
		path: ROUTES.login,
		RouteType: Route,
	},
	{
		component: SignUp,
		path: ROUTES.signUp,
		RouteType: Route,
	},
	{
		component: RecoverPassword,
		path: ROUTES.recover_password,
		RouteType: Route,
	},
]

export default routes
