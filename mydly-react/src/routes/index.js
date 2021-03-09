import { Route } from 'react-router-dom'

import Login from '../pages/Login'
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
]

export default routes
