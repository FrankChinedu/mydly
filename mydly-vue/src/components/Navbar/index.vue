<template>
	<header class="grid grid-cols-3 h-12">
		<div class="content-center flex flex-wrap">
			<h1 class="text-2xl font-medium tracking-widest uppercase">
				{{ CONSTANTS.APP_NAME }}
			</h1>
		</div>
		<div class="flex justify-center">
			<Logo />
		</div>
		<div class="content-center flex flex-wrap justify-end">
			<router-link
				class="cursor-pointer"
				:to="{
					path: routeT[togo],
				}"
			>
				<p class="font-light">{{ name[togo] }}</p>
			</router-link>
		</div>
	</header>
</template>

<script>
import Logo from '../Logo'
import CONSTANTS from '../../utils/contants'
import Route from '../../routes/list'

export default {
	components: {
		Logo,
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
		}
	},
	created() {
		this.togo = this.$route.meta.togo
	},
	watch: {
		$route(to) {
			this.togo = to.meta.togo
		},
	},
}
</script>

<style></style>
