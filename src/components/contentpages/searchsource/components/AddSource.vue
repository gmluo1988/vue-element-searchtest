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
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
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
					})
					.catch(_ => {});
			}
		}
	};
</script>

<style>
	#addsourcepanel {
		width: 104px;
		/*margin-left: 97%;*/
		/*text-align: right;
		padding-right: 3%;*/
	}
</style>