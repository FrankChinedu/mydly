<template>
	<ul>
		<li
			class="text-sec-white py-1 cursor-pointer capitalize"
			v-for="(item, i) in lists"
			:key="i"
		>
			{{ item }}
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		lists: Array,
	},
}
</script>

<style></style>
