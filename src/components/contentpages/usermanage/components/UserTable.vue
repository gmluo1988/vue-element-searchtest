<template>
	<div id="tableContent">
		<!--搜索按钮操作的报文列表-->
		<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" border>
			<el-table-column type="index" :index="indexMethod">
			</el-table-column>
			<el-table-column prop="username" label="用户名">
			</el-table-column>
			<el-table-column prop="password" label="密码">
			</el-table-column>
			<el-table-column prop="email" label="邮箱">
			</el-table-column>
			<el-table-column prop="birthday" label="生日">
			</el-table-column>
			<el-table-column prop="gender" label="性别">
			</el-table-column>
			<el-table-column fixed="right" label="操作">
				<template slot-scope="scope">
					<el-row>
						<el-col :span="16">
							<el-button type="primary" round size="mini" @click="updateSourceBtn(scope.row,scope.$index)" class="tabelUpdateBtn">查看/编辑</el-button>
						</el-col>
						<el-col :span="8">
							<el-button @click="deleteSourceBtn(scope.row)" type="danger" size="mini" round class="tableDeleteBtn">删除</el-button>
						</el-col>
					</el-row>
				</template>
			</el-table-column>
		</el-table>
		<!--查看/编辑按钮操作的对话框-->
		<el-dialog title="查看/修改搜索报文" :visible.sync="updateVisible" :before-close="handleClose" center>
			弹出框显示内容
			<!--<el-form :model="updateForm">
				<el-input type="textarea" autosize placeholder="此处显示数据的id" v-model="updateForm.id">
				</el-input>
				<el-input type="textarea" autosize placeholder="此处显示搜索报文内容" v-model="updateForm.source">
				</el-input>
				<el-input type="textarea" autosize placeholder="此处显示搜索报文备注" v-model="updateForm.des">
				</el-input>
				<p style="font-size:12px;line-height:30px;color:#999;text-align: left;margin-top: 20px;">Tips : 若报文场景变更，请在下方重新选择报文场景。</p>
			</el-form>-->
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancelUpdate">取消变更</el-button>
				<el-button type="primary" @click="saveUpdate">提交修改</el-button>
			</div>
		</el-dialog>

	</div>
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
			updateSourceBtn(row, _index) {
				//记录索引
				this.tableDataIndex = _index;
				//记录数据
				this.updateForm = row;
				this.updateVisible = true;
			},
			cancelUpdate() {
				this.$message('取消修改...');
				this.updateVisible = false;
			},
			saveUpdate() {
				//执行数据修改操作
				this.$message({
					message: '修改成功!',
					type: 'success'
				});
				this.updateVisible = false;
			},
			handleClose(done) {
				this.$confirm('是否放弃此次修改？')
					.then(_ => {
						done();
						this.$message('取消修改...');
					})
					.catch(_ => {});
			},
			//删除按钮执行的操作
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
				updateVisible: false,
				rowinfo: {
					id: '',
					date: '',
					apitype: '',
					activitygongge: '',
					ticketsearchmode: '',
					activitysearchmode: '',
					autocompletesearvhtype: '',
					des: '',
					source: ''
				},
				updateForm: {
					id: '',
					date: '',
					apitype: '',
					activitygongge: '',
					ticketsearchmode: '',
					activitysearchmode: '',
					autocompletesearvhtype: '',
					des: '',
					source: ''
				},
				tableData: [{
						id: 1,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'
					}, {
						id: 2,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					},
					{
						id: 3,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					},
					{
						id: 4,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					},
					{
						id: 5,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					},
					{
						id: 6,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					},
					{
						id: 7,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					},
					{
						id: 8,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					},
					{
						id: 9,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					},
					{
						id: 10,
						username: 'gmluo01',
						password: '122333',
						email: 'gmluo@126.com',
						birthday: '1988-07-16',
						gender: '1'

					}, 
//					{
//						id: 11,
//						username: 'gmluo01',
//						password: '122333',
//						email: 'gmluo@126.com',
//						birthday: '1988-07-16',
//						gender: '1'
//
//					}
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