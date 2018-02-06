<template>
	<div id="findSourceDialog">

		<el-dialog title="查看搜索报文" :visible.sync="dialogDate.dialogFormVisible" append-to-body="true">
			<el-form :model="form">
				<el-input type="textarea" autosize placeholder="请输入搜索报文" v-model="dialogDate.rowinfo.des">
				</el-input>
				<SelectBtns></SelectBtns>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancelSave">取 消</el-button>
				<el-button type="primary" @click="saveBtn">保存</el-button>
			</div>
		</el-dialog>


	</div>
</template>

<script>
	import SelectBtns from './SelectBtns.vue'
	export default {
		props:['dialogDate'],

		components: {
			SelectBtns
		},
		data() {
			return {
//				dialogFormVisible: false,
				form: {
					source: ''
				},
				formLabelWidth: '100%px'
			};
		},
		methods: {
			cancelSave(){
				//执行某些操作
					this.dialogDate.dialogFormVisible = false;
			},
			saveBtn(){
				//执行save操作
				
				this.dialogDate.dialogFormVisible = false;
			}
		}
	};
</script>

<style>

</style>