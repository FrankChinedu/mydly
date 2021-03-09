import React from 'react'

const Checkbox = (prop) => {
	return (
		<input
			{...prop}
			placeholder={prop.placeholder}
			className={`${prop.className} w-5 border h-5 cursor-pointer rounded-none`}
			type='checkbox'
		/>
	)
}

export default Checkbox
