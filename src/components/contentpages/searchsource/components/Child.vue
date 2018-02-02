<template>
	<div class="">
	<h3>我是子组件数据:{{childmsg}}</h3>
	<el-button type="primary" @click="change">点击更改父组件传递过来的数据</el-button>
	<h3>{{childmsg}}</h3>
	</div>
</template>
<script>
	export default {
		props:["fathermsg"],
		data() {
			return {
				childmsg: '子组件数据'
			}
		},
		mounted(){
			this.childmsg=this.fathermsg;
		},
		methods:{
			change(){
				this.childmsg="被改了";
			}
		}
	}
</script>

<style>

</style>