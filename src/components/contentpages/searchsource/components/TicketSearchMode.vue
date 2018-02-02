<template>
	<el-select v-model="ticketsearchmode" placeholder="请选择搜索场景" clearable @change="change">
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
					label: '只取周边'
				}, {
					value: '2',
					label: '只取本地'
				}, {
					value: '3',
					label: '周边加本地'
				}, {
					value: '4',
					label: '关键字'
				}, {
					value: '5',
					label: '附近'
				}, {
					value: '6',
					label: '景点补偿'
				}, {
					value: '7',
					label: '目的地'
				}],
				ticketsearchmode: ''
			}
		},
		methods: {
			change() {
				this.scenedata.ticketsearchmode = this.ticketsearchmode;
			}
		}
	}
</script>