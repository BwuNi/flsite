<template>
	<bwu-main class="main"></bwu-main>
</template>

<script>
	import Main from './components/main/main.vue'

	export default {
		name: 'app',
		components: {
			'bwu-main': Main,
		}
	}

</script>

<style>
body,html,.main{
	padding: 0;
	position: relative;
	height: 100%;
	width: 100%;
    margin: 0;
}

</style>