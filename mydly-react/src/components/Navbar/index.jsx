import React from 'react'

import CONSTANTS from '../../utils/constants'
import Logo from '../Logo'

export default function NavBar() {
	return (
		<header className='grid grid-cols-3 h-12'>
			<div className='content-center flex flex-wrap'>
				<h1 className='text-2xl font-light tracking-widest uppercase'>
					{CONSTANTS.APP_NAME}
				</h1>
			</div>
			<div className='flex justify-center'>
				<Logo />
			</div>
			<div className='content-center flex flex-wrap justify-end'>
				<p className='font-light'>{CONSTANTS.REGISTRATI}</p>
			</div>
		</header>
	)
}
