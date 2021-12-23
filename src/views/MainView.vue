<template>
	<div>
		<h1>{{ title }}</h1>
		<div>
			<router-link to="/signin">signin</router-link>
		</div>
		<div>
			<router-link to="/signup">signup</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "MainView",
	data() {
		return {
			title: "Coffee Diary",
			}
	},
};
</script>

<style scoped>

</style>
