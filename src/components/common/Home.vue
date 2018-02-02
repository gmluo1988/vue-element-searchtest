<template>
	<div class="homepage">
		<!--<h1>homepage:注意事项</h1>-->
		<HomeHeader></HomeHeader>
		<HomeSiderBar></HomeSiderBar>
		<div class="homepage-content">
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
	import HomeHeader from './Header.vue'
	import HomeSiderBar from './SiderBar.vue'

	export default {
		components: {
			HomeHeader,
			HomeSiderBar
		}
	}
</script>

<style>

</style>