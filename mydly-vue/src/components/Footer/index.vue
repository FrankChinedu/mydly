<template>
	<footer>
		<div class="md:grid md:grid-cols-6 py-7 flex flex-col">
			<div class="col-span-2 md:mb-0 mb-4">
				<h2 class="capitalize font-extrabold">{{ CONSTANTS.APP_NAME }}</h2>
				<p class="text-primary-gray pt-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					saepe itaque, sed sequi perferendis
				</p>
			</div>
			<div class="col-span-3 flex md:justify-around justify-between">
				<div>
					<h4>Azienda</h4>
					<List :lists="['Home', 'About Us', 'Blog', 'Contattaci']" />
				</div>
				<div>
					<h4>Prodotto</h4>
					<List :lists="['Log in', 'Prezzi', 'FAQ']" />
				</div>
				<div>
					<h4>Legal</h4>
					<List
						:lists="['Privacy Policy', 'Cookie Policy', 'Terms andConditions']"
					/>
				</div>
			</div>
			<div></div>
		</div>
		<div
			class="border-t border-primary-gray flex text-sec-white pt-4 justify-between"
		>
			<p>2020 SoundFit - Made by XXX</p>
			<div class="grid grid-cols-4 gap-x-2">
				<Fb class="h-5" />
				<div></div>
				<Tw class="h-6" />
				<Yt class="h-6" />
			</div>
		</div>
	</footer>
</template>

<script>
import CONSTANTS from '../../utils/contants'
import Fb from '../icons/fb'
import Tw from '../icons/tw'
import Yt from '../icons/yt'
import List from './list'

export default {
	components: {
		Fb,
		Tw,
		Yt,
		List,
	},
	data() {
		return {
			CONSTANTS: { ...CONSTANTS },
		}
	},
}
</script>

<style></style>
