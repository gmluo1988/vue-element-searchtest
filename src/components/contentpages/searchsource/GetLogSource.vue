<template>
	<div class="pagecontent">
		<div class="pagecontent-breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>搜索报文</el-breadcrumb-item>
				<el-breadcrumb-item>获取报文</el-breadcrumb-item>
			</el-breadcrumb>
			<hr style="height:3px;border:none;border-top:3px double #3BCEF2;" />
		</div>
		<div class="pagecontent-body">
			父组件数据：{{fatherData}}
			<hr style="height:3px;border:none;border-top:3px double #3BCEF2;" />
			
			<Child1></Child1>
			<Child2></Child2>
			<Child3></Child3>
			
		</div>
	</div>

</template>

<script>
	import Child1 from './components/Child1.vue'
	import Child2 from './components/Child2.vue'
	import Child3 from './components/Child3.vue'
	export default {
//		var Event=new Vue();
		data() {
			return {
				fatherData:'我是父组件的数据啊'
			}
		},
		components: {
			Child1,
			Child2,
			Child3
		}
	}
</script>

<style>

</style>