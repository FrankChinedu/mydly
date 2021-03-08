import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import ROUTES from './list'

const routes = [
	{
		component: Home,
		path: ROUTES.home,
		RouteType: Route,
	},
]

export default routes
