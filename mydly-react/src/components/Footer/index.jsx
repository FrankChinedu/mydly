import React from 'react'

import Fb from '../../icons/fb'
import Tw from '../../icons/tw'
import Yt from '../../icons/yt'
import List from './list'

import CONSTANTS from '../../utils/constants'

const Footer = () => {
	return (
		<div>
			<div className='grid grid-cols-6 py-7'>
				<div className='col-span-2'>
					<h2 className='capitalize font-extrabold'>{CONSTANTS.APP_NAME}</h2>
					<p className='text-primary-gray pt-1'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
						saepe itaque, sed sequi perferendis
					</p>
				</div>
				<div className='col-span-3 flex justify-around'>
					<div>
						<h4>Azienda</h4>
						<List list={['Home', 'About Us', 'Blog', 'Contattaci']} />
					</div>
					<div>
						<h4>Prodotto</h4>
						<List list={['Log in', 'Prezzi', 'FAQ']} />
					</div>
					<div>
						<h4>Legal</h4>
						<List
							list={['Privacy Policy', 'Cookie Policy', 'Terms and Conditions']}
						/>
					</div>
				</div>
				<div></div>
			</div>
			<div className='border-t border-primary-gray flex text-sec-white pt-4 justify-between'>
				<p>2020 SoundFit - Made by XXX</p>
				<div className='flex '>
					<Fb className='w-3' />
					<Tw className='w-3' />
					<Yt className='w-3' />
				</div>
			</div>
		</div>
	)
}

export default Footer
