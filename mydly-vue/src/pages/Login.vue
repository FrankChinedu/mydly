<template>
	<div class="flex justify-center content-center ">
		<div
			class="md:w-4/12 w-10/12 p-10 border border-primary-gray text-primary-white"
		>
			<h3 class="text-center text-4xl font-medium mb-7">Login</h3>
			<form @submit="handleSubmit">
				<Input
					placeholder="Email"
					required
					type="email"
					name="email"
					v-model="email"
					:value="email"
				/>
				<Input
					placeholder="Password"
					required
					type="password"
					name="password"
					v-model="password"
					:value="password"
				/>
				<div class="flex flex-wrap content-center">
					<Checkbox
						required
						className="appearance-none checked:bg-sec-gray checked:border-transparent border-sec-gray mr-3"
					/>
					<p>Ricordami</p>
				</div>
				<div>
					<Button
						:disabled="disabled"
						:value="btnValue"
						className="w-full py-2 mt-7 text-black"
						type="submit"
					/>
					<p class="text-sm text-center">
						Prima volta su SoundFit?
						<router-link
							class="cursor-pointer underline text-white"
							:to="{
								name: 'signup',
							}"
						>
							{{ CONSTANTS.REGISTRATI }}
						</router-link>
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import CONSTANTS from '../utils/contants'
import Input from '../components/Input'
import Button from '../components/Input/button'
import Checkbox from '../components/Input/checkbox'
import http from '../utils/http'

export default {
	name: 'Login',
	components: {
		Input,
		Button,
		Checkbox,
	},
	data: () => ({
		disabled: false,
		CONSTANTS: { ...CONSTANTS },
		password: '',
		email: '',
	}),
	methods: {
		handleSubmit(e) {
			e.preventDefault()
			this.disabled = true
			http
				.post('/auth/login', {
					email: this.email,
					password: this.password,
				})
				.then(data => {
					console.log(data)
					this.email = ''
					this.password = ''
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
			return this.disabled ? 'Loading..' : 'Assendi'
		},
	},
}
</script>

<style></style>
