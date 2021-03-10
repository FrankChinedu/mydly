import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Input/button'
import { AppContext } from '../context/appContext'
import Route from '../routes/list'

import http from '../utils/http'

const RecoverPassword = () => {
	const { setAuth } = useContext(AppContext)
	const [data, setData] = useState({
		email: '',
		repeat_email: '',
	})
	const [disabled, setDisabled] = useState(false)

	useEffect(() => {
		setAuth(true)
		return () => {
			setAuth(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleChange = (event) => {
		const name = event.target.name
		let value = event.target.value
		setData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setDisabled(true)

		http
			.post('/auth/forgotPassword', {
				email: data.email,
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
		<div className='flex flex-col justify-center content-center flex-wrap'>
			{/* <div> */}
			<div className='w-7/12 p-5 text-primary-white m-auto'>
				<h3 className='text-center text-4xl font-extralight mb-5'>
					Recover your Password
				</h3>
				<p className='text-center text-sm mb-1'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos
					minus saepe laudantium rerum atque dolorem.
				</p>
			</div>
			<div className='md:w-4/12 w-10/12 p-5 text-primary-white m-auto'>
				<Form onSubmit={handleSubmit}>
					<Input
						onChange={handleChange}
						placeholder='Your Email'
						required
						type='email'
						name='email'
					/>
					<Input
						onChange={handleChange}
						placeholder='Repeat your email'
						required
						type='email'
						name='repeat_email'
					/>
					<div className='flex justify-center mt-4'>
						<Button
							disabled={disabled}
							value={disabled ? 'Loading...' : 'Submit'}
							className='w-2/4 py-2 mr-4 text-black'
							type='submit'
						/>
						<p className='my-auto underline cursor-pointer'>
							<Link to={Route.login}>annulla</Link>
						</p>
					</div>
				</Form>
			</div>
			{/* </div> */}
		</div>
	)
}

export default RecoverPassword
