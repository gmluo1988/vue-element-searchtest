<template>
	<div class="">
		<span>我是Child-2组件-->{{child2data}}</span>
		<!--<el-button type="primary" @click="change">点击把2的数据传给3</el-button>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				child2data: '我是2组件的数据'
			}
		},
//		methods:{
//			send(){
//				
//			}
//		}
	}
</script>

<style>
</style>