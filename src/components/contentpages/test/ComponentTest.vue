<template>
	<div class="pagecontent">
		<div class="pagecontent-breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>测试页面</el-breadcrumb-item>
				<el-breadcrumb-item>组件测试</el-breadcrumb-item>
			</el-breadcrumb>
			<hr style="height:3px;border:none;border-top:3px double #3BCEF2;" />
		</div>
		<div class="pagecontent-body">
			<!--<div class="block">
				<span class="demonstration">默认为 Date 对象</span>
				<div class="demonstration">值：{{ value10 }}</div>
				<el-date-picker v-model="value10" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日">
				</el-date-picker>
			</div>-->
			<!--<div class="block">-->
				<div class="block1">
				<span class="demonstration">使用 value-format</span>
				<div class="demonstration">值：{{ value11 }}</div>
				<el-date-picker v-model="value11" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
				</el-date-picker>
			</div>
			<!--<div class="block">
				<span class="demonstration">时间戳</span>
				<div class="demonstration">值：{{ value12 }}</div>
				<el-date-picker v-model="value12" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp">
				</el-date-picker>
			</div>-->
			
			<div class="radiotest">
				<el-radio v-model="radio" label="1">男</el-radio>
  				<el-radio v-model="radio" label="0">女</el-radio>
				
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio: '0',
				value10: '',
				value11: '',
				value12: ''
			};
		}
	};
</script>

<style>

</style>