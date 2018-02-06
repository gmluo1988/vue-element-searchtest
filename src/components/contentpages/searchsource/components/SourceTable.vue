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
				<el-row>
					<el-col :span="16">
						<!--此处是父组件在一个表格中添加了一个子组件，用来打开一个对话框-->
						<el-button type="primary" round size="mini" @click="updateSourceBtn(scope.row,scope.$index)" class="tabelUpdateBtn">查看/编辑</el-button>
						<UpdateSource :dialogDate="rowData"></UpdateSource>
					</el-col>
					<el-col :span="8">
						<el-button @click="deleteSourceBtn(scope.row)" type="danger" size="mini" round class="tableDeleteBtn">删除</el-button>
					</el-col>
				</el-row>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	import UpdateSource from './UpdateSource.vue'
//	import FindSource from './FindSource.vue'
	
	export default {
		components: {
			UpdateSource,
//			FindSource
		},
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
//			findSourceBtn(row) {
//				this.rowData.rowinfo=row;
//				this.rowData.dialogFormVisible=true;
////				//可以传递参数
////				console.log(row.date); //可获取这一行数据对象，并获取对象下的节点数据
//////				this.rowDate=row;
////				this.formVisible=true;
////				console.log(this.formVisible);
//			},
			updateSourceBtn(row,_index){
				//记录索引
                 this.tableDataIndex=_index;
                 //记录数据
				this.rowData.rowinfo=row;
				this.rowData.dialogFormVisible=true;
			},
			deleteSourceBtn(row) {
				var rowInfo = row.des //可以传递参数
				this.$confirm('是否删除【' + rowInfo + '】请求报文, 是否继续?', '提示', {
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
						message: '取消删除...'
					});
				});
			},
			indexMethod(index) {
				return index + 1;
			}
		},
		data() {
			return {
				rowData:{
					dialogFormVisible:false,
					rowinfo:{
						date: '',
						apitype: '',
						activitygongge: '',
						ticketsearchmode: '',
						activitysearchmode: '',
						autocompletesearvhtype: '',
						des: '',
					}
				},
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

					}, {
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
	
	.tableDeleteBtn {
		/*margin-left: -100px;*/
	}
</style>