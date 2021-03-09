import React from 'react'

const colors = [
	'bg-p-pink',
	'bg-p-blue',
	'bg-s-blue',
	'bg-p-green',
	'bg-p-yellow',
	'bg-p-orange',
	'bg-p-red',
]
const Logo = () => {
	return (
		<>
			<div className='flex flex-col w-1'>
				{colors.map((color, id) => (
					<p className={`h-1 rounded w-1 mb-0.5 ${color}`} key={id}></p>
				))}
			</div>
		</>
	)
}

export default Logo
