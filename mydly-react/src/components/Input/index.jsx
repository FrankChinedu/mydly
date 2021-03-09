import React from 'react'

const Input = (prop) => {
	return (
		<input
			{...prop}
			placeholder={prop.placeholder}
			autoComplete='off'
			className={`shadow appearance-none bg-primary-gray w-full py-4 px-3 mb-4
             text-primary-white leading-tight focus:outline-none focus:shadow-outline rounded-none ${prop.className}`}
			type={prop.type}
		/>
	)
}

export default Input
