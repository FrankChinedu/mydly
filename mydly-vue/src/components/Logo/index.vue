<template>
	<Fragment>
		<div class="flex flex-col w-1">
			<p
				v-for="(color, i) in colors"
				class="h-1 rounded w-1 mb-0.5"
				:key="i"
				:class="color"
			></p>
		</div>
	</Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
	components: {
		Fragment,
	},
	data() {
		return {
			colors: [
				'bg-p-pink',
				'bg-p-blue',
				'bg-s-blue',
				'bg-p-green',
				'bg-p-yellow',
				'bg-p-orange',
				'bg-p-red',
			],
		}
	},
}
</script>

<style></style>
