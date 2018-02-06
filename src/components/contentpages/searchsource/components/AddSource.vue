<template>
	<!--<el-button type="success" round @click="addsource">新增报文</el-button>-->
	<div id="addsourcepanel">
		<el-button type="success" round @click="dialogFormVisible  = true">新增报文</el-button>
		<el-dialog title="新增搜索报文" :visible.sync="dialogFormVisible" :before-close="handleClose" center>
			<el-form :model="form">
				<el-input type="textarea" autosize placeholder="请输入搜索报文" v-model="form.source">
				</el-input>
				<SelectBtns></SelectBtns>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
				<!--<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>-->
				<el-button @click="cancelSave">取 消</el-button>
				<el-button type="primary" @click="saveBtn">保存</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import SelectBtns from './SelectBtns.vue'
	export default {

		components: {
			SelectBtns
		},
		data() {
			return {
				dialogFormVisible: false,
				form: {
					source: ''
				},
				formLabelWidth: '100%px'
			};
		},
		methods: {
			handleClose(done) {
				this.$confirm('是否放弃保存次报文？')
					.then(_ => {
						done();
						this.$message('取消保存...');
					})
					.catch(_ => {});
			},
			cancelSave() {
				//执行某些操作
				this.$message('取消保存...');
				this.dialogFormVisible = false;
			},
			saveBtn() {
				//执行save操作
				this.$message({
					message: '保存成功!',
					type: 'success'
				});
				this.dialogFormVisible = false;
			}
		}
	};
</script>

<style>

</style>