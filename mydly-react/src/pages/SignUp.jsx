import React, { useState } from 'react'

import Form from '../components/Form'
import Input from '../components/Input'
import Checkbox from '../components/Input/checkbox'
import Button from '../components/Input/button'

const SignUp = () => {
	const [disabled] = useState(false)

	return (
		<div className='flex justify-center content-center '>
			<div className='md:w-4/12 w-10/12 p-5 text-primary-white'>
				<p className='text-center text-sm'>Passaggio 1 di 3</p>
				<h3 className='text-center text-4xl font-extralight mb-7'>
					Create a Password
				</h3>
				<p className='text-center text-sm mb-7'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus explicabo
				</p>
				<Form>
					<Input
						placeholder='Password'
						required
						type='password'
						name='password'
					/>
					<Input
						placeholder='Confirm your password'
						required
						type='password'
						name='confirm_password'
					/>
					<div className='flex flex-wrap content-center'>
						<Checkbox
							required
							name='rem'
							className='appearance-none checked:bg-sec-gray checked:border-transparent border-sec-gray mr-3'
						/>
						<p>
							<span className='mr-1'>I accept</span>
							<span className='underline cursor-pointer'>privacy policy</span>
						</p>
					</div>
					<div>
						<Button
							disabled={disabled}
							value='Next'
							className='w-full py-2 mt-7 text-black'
							type='submit'
						/>
					</div>
				</Form>
			</div>
		</div>
	)
}

export default SignUp
