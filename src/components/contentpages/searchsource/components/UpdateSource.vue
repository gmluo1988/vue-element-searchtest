<template>
	<div id="updatesourcepanel">
		<!--<el-dialog title="查看/修改搜索报文" :visible.sync="dialogDate.dialogFormVisible" :before-close="handleClose" center append-to-body="true">-->
		<el-dialog title="查看/修改搜索报文" :visible.sync="dialogDate.dialogFormVisible" :before-close="handleClose">
			<el-form :model="form">
				<el-input type="textarea" autosize placeholder="此处应该有搜索报文" v-model="dialogDate.rowinfo.des">
				</el-input>
				<SelectBtns></SelectBtns>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<!--<el-button @click="dialogDate.dialogFormVisible = false"></el-button>
				<el-button type="primary" @click="dialogDate.dialogFormVisible = false">提交修改</el-button>-->
				<el-button @click="cancelSave">取消变更</el-button>
				<el-button type="primary" @click="saveBtn">提交修改</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import SelectBtns from './SelectBtns.vue'
	export default {
		props: ['dialogDate'],
		components: {
			SelectBtns
		},
		data() {
			return {
				form: {
					source: ''
				},
				formLabelWidth: '100%px',
			};
		},
		methods: {
			handleClose(done) {
				this.$confirm('是否放弃修改次报文？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			cancelSave() {
				//执行某些操作
				this.dialogDate.dialogFormVisible = false;
			},
			saveBtn() {
				//执行save操作
				this.dialogDate.dialogFormVisible = false;
			}
		}
	};
</script>

<style>

</style>