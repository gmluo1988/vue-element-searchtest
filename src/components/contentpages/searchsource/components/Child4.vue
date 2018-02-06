<template>
	<div id="">
		<el-dialog title="查看/修改" :visible.sync="formmsg.dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="序号">
					<el-input v-model="formmsg.rowData.id" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="版本号">
					<el-input v-model="formmsg.rowData.version" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="数据显示">
					<el-input v-model="formmsg.rowData.id" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="formmsg.dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="formmsg.dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		props: ['formmsg'],
		data() {
			return {
				form: {
					id: '',
					version: ''
				}
			}
		},
//		mounted() {
//			this.form.id = this.formmsg.rowData.id;
//			this.form.version = this.formmsg.rowData.version;
//		},
		methods: {

		}
	}
</script>

<style>

</style>