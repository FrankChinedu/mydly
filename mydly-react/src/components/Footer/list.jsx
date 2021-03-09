import React from 'react'

const List = ({ list = [] }) => {
	return (
		<ul>
			{list.length
				? list.map((item) => (
						<li className='text-primary-gray py-1 cursor-pointer capitalize'>
							{item}
						</li>
				  ))
				: ''}
		</ul>
	)
}

export default List
