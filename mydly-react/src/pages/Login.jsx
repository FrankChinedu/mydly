import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Form from '../components/Form'
import Input from '../components/Input'
import Checkbox from '../components/Input/checkbox'
import Button from '../components/Input/button'
import CONSTANTS from '../utils/constants'
import ROUTES from '../routes/list'

import http from '../utils/http'

const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		rem: false,
	})
	const [disabled, setDisabled] = useState(false)

	const handleChange = (event) => {
		const name = event.target.name
		let value = event.target.value
		if (name === 'rem') {
			value = !!value
		}
		setData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setDisabled(true)

		http
			.post('/auth/login', {
				email: data.email,
				password: data.password,
			})
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				setDisabled(false)
			})
	}

	return (
		<div className='flex justify-center content-center '>
			<div className='md:w-4/12 w-10/12 p-10 border border-primary-gray text-primary-white'>
				<h3 className='text-center text-4xl font-medium mb-7'>Login</h3>
				<Form onSubmit={handleSubmit}>
					<Input
						onChange={handleChange}
						placeholder='Email'
						required
						type='email'
						name='email'
					/>
					<Input
						onChange={handleChange}
						placeholder='Password'
						required
						type='password'
						name='password'
					/>
					<div className='flex flex-wrap content-center'>
						<Checkbox
							onChange={handleChange}
							required
							name='rem'
							className='appearance-none checked:bg-sec-gray checked:border-transparent border-sec-gray mr-3'
						/>
						<p>Ricordami</p>
					</div>
					<div>
						<Button
							disabled={disabled}
							value={disabled ? 'Loading...' : 'Assendi'}
							className='w-full py-2 mt-7 text-black'
							type='submit'
						/>
						<p className='text-sm text-center'>
							Prima volta su SoundFit?{' '}
							<Link to={ROUTES.signUp} className='underline text-white'>
								{CONSTANTS.REGISTRATI}
							</Link>
						</p>
					</div>
				</Form>
			</div>
		</div>
	)
}

export default Login
