<template>
	<div class="flex justify-center content-center ">
		<div class="md:w-4/12 w-10/12 p-5 text-primary-white">
			<p class="text-center text-sm">Passaggio 1 di 3</p>
			<h3 class="text-center text-4xl font-extralight mb-7">
				Create a Password
			</h3>
			<p class="text-center text-sm mb-7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
				explicabo
			</p>
			<Form>
				<Input
					placeholder="Password"
					required
					type="password"
					name="password"
				/>
				<Input
					placeholder="Confirm your password"
					required
					type="password"
					name="confirm_password"
				/>
				<div class="flex flex-wrap content-center">
					<Checkbox
						required
						name="rem"
						className="appearance-none checked:bg-sec-gray checked:border-transparent border-sec-gray mr-3"
					/>
					<p>
						<span class="mr-1">I accept</span>
						<span class="underline cursor-pointer">privacy policy</span>
					</p>
				</div>
				<div>
					<Button
						value="Next"
						className="w-full py-2 mt-7 text-black"
						type="submit"
					/>
				</div>
			</Form>
		</div>
	</div>
</template>

<script>
import Input from '../components/Input'
import Button from '../components/Input/button'
import Checkbox from '../components/Input/checkbox'

export default {
	name: 'SignUp',
	components: {
		Input,
		Button,
		Checkbox,
	},
}
</script>

<style></style>
