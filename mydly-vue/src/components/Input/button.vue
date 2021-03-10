<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:value="value"
		v-on="$listeners"
		class="cursor-pointer bg-sec-gray rounded-none"
		:class="className"
	/>
</template>

<script>
export default {
	props: {
		type: { type: String, required: true, default: 'submit' },
		placeholder: String,
		className: String,
		value: { type: String, required: false, default: '' },
	},
}
</script>

<style></style>
