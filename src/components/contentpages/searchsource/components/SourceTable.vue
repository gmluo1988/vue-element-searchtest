<template>
	<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" border>
		<el-table-column type="index" :index="indexMethod">
		</el-table-column>
		<el-table-column prop="date" label="日期">
		</el-table-column>
		<el-table-column prop="apitype" label="接口类型">
		</el-table-column>
		<el-table-column prop="activitygongge" label="宫格入口">
		</el-table-column>
		<el-table-column prop="ticketsearchmode" label="门票搜索场景">
		</el-table-column>
		<el-table-column prop="activitysearchmode" label="玩乐搜索场景">
		</el-table-column>
		<el-table-column prop="autocompletesearvhtype" label="联想词搜索类型">
		</el-table-column>
		<el-table-column prop="des" label="备注">
		</el-table-column>
		<el-table-column fixed="right" label="操作">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="primary" size="mini" round>编辑</el-button>
				<el-button @click="deletesource(scope.row)" type="danger" size="mini" round>删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if(rowIndex % 2 == 1) {
					return 'success-row';
				}
				return '';
			},
			handleClick(row) {
				console.log(row);
			},
			deletesource(row) {
				this.$confirm('是否删除此请求报文, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			indexMethod(index){
				return index+1;
			}
		},
		data() {
			return {
				tableData: [{
						date: '2018-01-31',
						apitype: '门票接口',
						activitygongge: '/',
						ticketsearchmode: '目的地',
						activitysearchmode: '/',
						autocompletesearvhtype: '/',
						des: '筛选主题',

					},
					{
						date: '2018-01-31',
						apitype: '玩乐接口',
						activitygongge: '旅游宫格',
						ticketsearchmode: '/',
						activitysearchmode: '关键字',
						autocompletesearvhtype: '/',
						des: '排除主题',

					},
					{
						date: '2018-01-31',
						apitype: '联想词接口',
						activitygongge: '/',
						ticketsearchmode: '/',
						activitysearchmode: '/',
						autocompletesearvhtype: '纯门票',
						des: '出免费景点',

					},
					{
						date: '2018-01-31',
						apitype: '门票接口',
						activitygongge: '/',
						ticketsearchmode: '目的地',
						activitysearchmode: '/',
						autocompletesearvhtype: '/',
						des: '筛选主题',

					},
					{
						date: '2018-01-31',
						apitype: '玩乐接口',
						activitygongge: '旅游宫格',
						ticketsearchmode: '/',
						activitysearchmode: '关键字',
						autocompletesearvhtype: '/',
						des: '排除主题',

					},
					{
						date: '2018-01-31',
						apitype: '联想词接口',
						activitygongge: '/',
						ticketsearchmode: '/',
						activitysearchmode: '/',
						autocompletesearvhtype: '纯门票',
						des: '出免费景点',

					},
					{
						date: '2018-01-31',
						apitype: '门票接口',
						activitygongge: '/',
						ticketsearchmode: '目的地',
						activitysearchmode: '/',
						autocompletesearvhtype: '/',
						des: '筛选主题',

					},
					{
						date: '2018-01-31',
						apitype: '玩乐接口',
						activitygongge: '旅游宫格',
						ticketsearchmode: '/',
						activitysearchmode: '关键字',
						autocompletesearvhtype: '/',
						des: '排除主题',

					},
					{
						date: '2018-01-31',
						apitype: '联想词接口',
						activitygongge: '/',
						ticketsearchmode: '/',
						activitysearchmode: '/',
						autocompletesearvhtype: '纯门票',
						des: '出免费景点',

					},{
						date: '2018-01-31',
						apitype: '门票接口',
						activitygongge: '/',
						ticketsearchmode: '目的地',
						activitysearchmode: '/',
						autocompletesearvhtype: '/',
						des: '筛选主题',

					}
				]
			}
		}
	}
</script>

<style>
	.el-table .warning-row {
		background: oldlace;
	}
	
	.el-table .success-row {
		background: #f0f9eb;
	}
</style>