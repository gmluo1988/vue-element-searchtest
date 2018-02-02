<template>
	<el-select v-model="autocompletesearchtype" filterable placeholder="请选择搜索类型" clearable @change="change">
		<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			<span style="float: left">{{ item.label }}</span>
			<span style="float: right; color: #8492a6; font-size: 13px">SearchType={{ item.value }}</span>
		</el-option>
	</el-select>
</template>

<script>
	export default {
		props: ['scenedata'],
		data() {
			return {
				options: [{
					value: '1',
					label: '地面'
				}, {
					value: '2',
					label: '纯门票'
				}, {
					value: '3',
					label: '纯玩乐'
				}, {
					value: '4',
					label: '玩乐混排门票'
				}, {
					value: '5',
					label: '只出一日游产品'
				}, {
					value: '6',
					label: '只出攻略目的地且返回城市ID'
				}],
				autocompletesearchtype: ''
			}
		},
		methods: {
			change() {
				this.scenedata.autocompletesearvhtype = this.autocompletesearchtype;
			}
		}
	}
</script>

<style>

</style>