<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:value="value"
		v-on="$listeners"
		class="w-5 border h-5 cursor-pointer rounded-none"
		:class="className"
	/>
</template>

<script>
export default {
	props: {
		type: { type: String, required: false, default: 'checkbox' },
		placeholder: String,
		className: String,
		value: { type: String, required: false, default: '' },
	},
}
</script>

<style></style>
