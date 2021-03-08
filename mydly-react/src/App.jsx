import { Switch } from 'react-router-dom'

import routes from './routes'
import './App.css'

const App = () => (
	<div>
		<Switch>
			{routes.map(({ path, component, RouteType }, id) => (
				<RouteType key={id} path={path} exact component={component} />
			))}
		</Switch>
	</div>
)

export default App
