import React from 'react'

const List = ({ list = [] }) => {
	return (
		<ul>
			{list.length
				? list.map((item, id) => (
						<li
							className='text-sec-white py-1 cursor-pointer capitalize'
							key={id}
						>
							{item}
						</li>
				  ))
				: ''}
		</ul>
	)
}

export default List
