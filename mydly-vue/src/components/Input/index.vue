<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:value="value"
		v-on="$listeners"
		@input="$emit('update', $event.target.value)"
		class="shadow appearance-none bg-primary-gray w-full py-4 px-3 mb-4
             text-primary-white leading-tight focus:outline-none focus:shadow-outline rounded-none"
		:class="className"
	/>
</template>

<script>
export default {
	props: {
		type: { type: String },
		placeholder: String,
		className: String,
		value: { type: String, required: false, default: '' },
	},
	model: {
		prop: 'value',
		event: 'update',
	},
}
</script>

<style></style>
