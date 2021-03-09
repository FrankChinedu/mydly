import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../components/Form'
import Input from '../components/Input'
import Checkbox from '../components/Input/checkbox'
import Button from '../components/Input/button'
import CONSTANTS from '../utils/constants'

const Home = () => {
	return (
		<div className='flex justify-center content-center '>
			<div className='w-4/12 p-10 border border-primary-gray text-primary-white'>
				<h3 className='text-center text-4xl font-extralight mb-7'>Login</h3>
				<Form action='#'>
					<Input placeholder='Email' required type='email' />
					<Input placeholder='Password' required type='password' />
					<div className='flex flex-wrap content-center'>
						<Checkbox
							required
							className='appearance-none checked:bg-sec-gray checked:border-transparent border-sec-gray mr-3'
						/>
						<p>Ricordami</p>
					</div>
					<div>
						<Button
							value='Assendi'
							className='w-full py-2 mt-7 text-black'
							type='submit'
						/>
						<p className='text-sm'>
							Prima volta su SoundFit?{' '}
							<Link to='/' className=' underline'>
								{CONSTANTS.REGISTRATI}
							</Link>
						</p>
					</div>
				</Form>
			</div>
		</div>
	)
}

export default Home
