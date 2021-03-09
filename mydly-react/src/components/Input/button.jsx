import React from 'react'

const Button = (prop) => {
	return (
		<input
			{...prop}
			placeholder={prop.placeholder}
			className={`${prop.className} cursor-pointer bg-sec-gray rounded-none`}
			type={prop.type}
		/>
	)
}

export default Button
