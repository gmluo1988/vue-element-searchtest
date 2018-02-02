<template>
	<el-select v-model="activitysearchmode" filterable placeholder="请选择搜索场景" clearable @change="change">
		<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			<span style="float: left">{{ item.label }}</span>
			<span style="float: right; color: #8492a6; font-size: 13px">SearchMode={{ item.value }}</span>
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
					label: '本地'
				}, {
					value: '2',
					label: '周边'
				}, {
					value: '3',
					label: '关键字'
				}, {
					value: '4',
					label: '附近'
				}, {
					value: '5',
					label: '目的地'
				}],
				activitysearchmode: ''
			}
		},
			methods: {
			change() {
				this.scenedata.activitysearchmode = this.activitysearchmode;
			}
		}
	}
</script>

<style>

</style>