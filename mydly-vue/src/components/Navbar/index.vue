<template>
	<header class="grid grid-cols-3 h-12">
		<div class="content-center flex flex-wrap">
			<h1 class="text-2xl font-medium tracking-widest uppercase">
				{{ CONSTANTS.APP_NAME }}
			</h1>
			<ul v-if="auth" class="mx-4 grid grid-cols-3 gap-x-4 my-auto text-sm">
				<li class="cursor-pointer">Home</li>
				<li class="cursor-pointer">Generi</li>
				<li class="cursor-pointer">Preferiti</li>
			</ul>
		</div>
		<div class="flex justify-center">
			<Logo />
		</div>
		<div class="content-center flex flex-wrap justify-end">
			<div v-if="auth" class="content-center flex flex-wrap justify-end">
				<SearchIcon className="w-5 mr-4" />
				<BellIcon className="w-5 mr-4" />
				<div class="w-10">
					<img :src="ImgIcon" alt="avatar" class="rounded-full" />
				</div>
			</div>
			<div v-if="!auth">
				<router-link
					class="cursor-pointer"
					:to="{
						path: routeT[togo],
					}"
				>
					<p class="font-light">{{ name[togo] }}</p>
				</router-link>
			</div>
		</div>
	</header>
</template>

<script>
import Logo from '../Logo'
import CONSTANTS from '../../utils/contants'
import Route from '../../routes/list'
import SearchIcon from '../icons/search'
import BellIcon from '../icons/bell'
import ImgIcon from '../icons/img/icon.png'

export default {
	components: {
		Logo,
		SearchIcon,
		BellIcon,
	},
	data() {
		return {
			CONSTANTS: { ...CONSTANTS },
			name: {
				signUp: CONSTANTS.REGISTRATI,
				home: CONSTANTS.ESCI,
			},
			routeT: { ...Route },
			togo: '',
			auth: false,
			ImgIcon: ImgIcon,
		}
	},
	created() {
		this.togo = this.$route.meta.togo
		this.auth = this.$route.meta.auth
	},
	watch: {
		$route(to) {
			this.togo = to.meta.togo
			this.auth = to.meta.auth
		},
	},
}
</script>

<style></style>
