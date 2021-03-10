<template>
	<div
		id="app"
		class="bg-primary-dark min-h-screen px-10 py-5 text-primary-white flex flex-col justify-between"
	>
		<Navbar />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
	name: 'App',
	components: {
		Navbar,
		Footer,
	},
}
</script>

<style></style>
