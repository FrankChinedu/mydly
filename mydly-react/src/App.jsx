import { Switch } from 'react-router-dom'

import routes from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AppProvider } from './context/appContext'

const App = () => (
	<AppProvider>
		<div className='bg-primary-dark min-h-screen px-10 py-5 text-primary-white flex flex-col justify-between'>
			<Navbar />
			<Switch>
				{routes.map(({ path, component, RouteType }, id) => (
					<RouteType key={id} path={path} exact component={component} />
				))}
			</Switch>
			<Footer />
		</div>
	</AppProvider>
)

export default App
