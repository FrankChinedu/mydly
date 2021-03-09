import React from 'react'

import Fb from '../../icons/fb'
import Tw from '../../icons/tw'
import Yt from '../../icons/yt'
import List from './list'

import CONSTANTS from '../../utils/constants'

const Footer = () => {
	return (
		<footer>
			<div className='md:grid md:grid-cols-6 py-7 flex flex-col'>
				<div className='col-span-2 md:mb-0 mb-4'>
					<h2 className='capitalize font-extrabold'>{CONSTANTS.APP_NAME}</h2>
					<p className='text-primary-gray pt-1'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
						saepe itaque, sed sequi perferendis
					</p>
				</div>
				<div className='col-span-3 flex md:justify-around justify-between'>
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
				<div className='grid grid-cols-4 gap-x-2'>
					<Fb className='h-5' />
					<div></div>
					<Tw className='h-6' />
					<Yt className='h-6' />
				</div>
			</div>
		</footer>
	)
}

export default Footer
