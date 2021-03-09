import React, { useEffect, useState, useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'

import CONSTANTS from '../../utils/constants'
import Logo from '../Logo'
import Route from '../../routes/list'
import { AppContext } from '../../context/appContext'

const RouteValue = {
	[Route.home]: CONSTANTS.REGISTRATI,
	[Route.login]: CONSTANTS.REGISTRATI,
	[Route.signUp]: CONSTANTS.ESCI,
}

export default function NavBar() {
	const { auth } = useContext(AppContext)
	const location = useLocation()
	const [pathname, setPathname] = useState('')
	const [togo, setTogo] = useState('')
	const [name, setName] = useState('')

	useEffect(() => {
		setPathname(location.pathname)
	}, [location])

	useEffect(() => {
		console.log('auth', auth)
	}, [auth])

	useEffect(() => {
		if (pathname) {
			setName(RouteValue[pathname])
		}
		if (pathname === Route.home || pathname === Route.login) {
			setTogo(Route.signUp)
		} else if (pathname === Route.signUp) {
			setTogo(Route.home)
		}
	}, [pathname])

	return (
		<header className='grid grid-cols-3 h-12'>
			<div className='content-center flex flex-wrap'>
				<h1 className='text-2xl font-medium tracking-widest uppercase'>
					{CONSTANTS.APP_NAME}
				</h1>
				{auth && (
					<>
						<li>Home</li>
						<li>Generi</li>
						<li>Preferiti</li>
					</>
				)}
			</div>
			<div className='flex justify-center'>
				<Logo />
			</div>
			<div className='content-center flex flex-wrap justify-end'>
				<Link to={togo} className='cursor-pointer'>
					<p className='font-light'>{name}</p>
				</Link>
			</div>
		</header>
	)
}
