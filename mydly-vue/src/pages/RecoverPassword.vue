<template>
	<div class="flex flex-col justify-center content-center flex-wrap">
		<div class="w-7/12 p-5 text-primary-white m-auto">
			<h3 class="text-center text-4xl font-extralight mb-5">
				Recover your Password
			</h3>
			<p class="text-center text-sm mb-1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos
				minus saepe laudantium rerum atque dolorem.
			</p>
		</div>
		<div class="md:w-4/12 w-10/12 p-5 text-primary-white m-auto">
			<form @submit="handleSubmit">
				<Input
					placeholder="Your Email"
					required
					type="email"
					name="email"
					v-model="email"
				/>
				<Input
					placeholder="Repeat your email"
					required
					type="email"
					name="repeat_email"
					v-model="repeat_email"
				/>
				<div class="flex justify-center mt-4">
					<Button
						:disabled="disabled"
						:value="btnValue"
						className="w-2/4 py-2 mr-4 text-black"
						type="submit"
					/>
					<p class="my-auto underline cursor-pointer">
						<router-link
							:to="{
								name: 'index',
							}"
						>
							annulla
						</router-link>
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import Input from '../components/Input'
import Button from '../components/Input/button'
import http from '../utils/http'

export default {
	name: 'RecoverPassword',
	components: {
		Input,
		Button,
	},
	data: () => ({
		disabled: false,
		email: '',
		repeat_email: '',
	}),
	methods: {
		handleSubmit(e) {
			e.preventDefault()
			this.disabled = true

			http
				.post('/auth/forgotPassword', {
					email: this.email,
				})
				.then(data => {
					console.log(data)
				})
				.catch(error => {
					console.log(error)
				})
				.finally(() => {
					this.disabled = false
				})
		},
	},
	computed: {
		btnValue() {
			return this.disabled ? 'Loading..' : 'Submit'
		},
	},
}
</script>

<style></style>
