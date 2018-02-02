<template>
	<div class="">
		<span>我是Child-1组件-->{{child1data}}</span>
		<!--<el-button type="primary" @click="send">点击把1的数据传给3</el-button>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				child1data: '我是1组件的数据'
			}
		},
//		methods: {
//			send() {
//				this.$emit('child1-data', this.child1data);
//
//			}
//		}
	}
</script>

<style>

</style>