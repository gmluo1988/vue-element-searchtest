<template>
	<el-select v-model="activitygongge" filterable placeholder="请选择宫格入口" clearable @change="change">
		<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			<span style="float: left">{{ item.label }}</span>
			<span style="float: right; color: #8492a6; font-size: 13px">Type={{ item.value }}</span>
		</el-option>
	</el-select>
</template>

<script>
	export default {
		props: ['scenedata'],
		data() {
			return {
				options: [{
					value: '0',
					label: '默认'
				}, {
					value: '1',
					label: '景点玩乐宫格'
				}, {
					value: '2',
					label: '旅游宫格'
				}, {
					value: '3',
					label: '一日游宫格'
				}, {
					value: '4',
					label: 'WIFI宫格'
				}, {
					value: '5',
					label: '其他宫格'
				}],
				activitygongge: ''
			}
		},
		methods: {
			change() {
				this.scenedata.activitygongge = this.activitygongge;
			}
		}
	}
</script>

<style>

</style>