<template>
	<div class="pagecontent">
		<div class="pagecontent-breadcrumb">
			<!--添加页面的面包屑功能-->
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>搜索报文</el-breadcrumb-item>
				<el-breadcrumb-item>查看报文</el-breadcrumb-item>
			</el-breadcrumb>
			<hr style="height:3px;border:none;border-top:3px double #3BCEF2;" />
		</div>
		<div class="pagecontent-header">
			<!--添加选择报文场景的组件-->
			<SelectBtns></SelectBtns>
		</div>
		<div class="pagecontent-body">
			<!--<div >
				<UpdateSource></UpdateSource>
			</div>-->
			<div>
				<el-row>
					<el-col :span="2" :offset="20">
						<!--执行搜索报文的按钮-->
						<el-button type="primary" round @click="searchsource">搜索报文</el-button>
					</el-col>
					<el-col :span="2">
						<!--添加新增报文的组件-->
						<AddSource></AddSource>
					</el-col>
				</el-row>
			</div>
			<!--添加报文返回结果组件-->
			<SourceTable></SourceTable>
			<!--添加分页的组件-->
			<Pagination></Pagination>
			</el-input>
		</div>
	</div>
</template>

<script>
	import UpdateSource from './components/UpdateSource.vue'

	import TicketSearchMode from './components/TicketSearchMode.vue'

	import ActivityGongGe from './components/ActivityGongGe.vue'
	import ActivitySearchMode from './components/ActivitySearchMode.vue'

	import AutoCompleteSearchType from './components/AutoCompleteSearchType.vue'

	import SourceTable from './components/SourceTable.vue'

	import Pagination from './components/Pagination.vue'

	import AddSource from './components/AddSource.vue'

	import SelectBtns from './components/SelectBtns.vue'

	export default {
		data() {
			return {}
		},
		components: {
			TicketSearchMode,
			ActivityGongGe,
			ActivitySearchMode,
			AutoCompleteSearchType,
			SourceTable,
			Pagination,
			AddSource,
			SelectBtns,
			UpdateSource
		},
		computed: {},
		methods: {
			searchsource() {
				this.$message({
					message: '报文查询中...',
					type: 'success'
				});
			},
//			addsource() {
//				alert("添加搜索报文！")
//			}
		}
	}
</script>

<style>
	.firstbtn {
		position: relative;
		width: 160px;
	}
</style>