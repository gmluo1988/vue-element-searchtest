<template>
	<div class="pagecontent">
		<div class="pagecontent-breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>搜索报文</el-breadcrumb-item>
				<el-breadcrumb-item>获取报文</el-breadcrumb-item>
			</el-breadcrumb>
			<hr style="height:3px;border:none;border-top:3px double #3BCEF2;" />
		</div>
		<div class="pagecontent-body">
			父组件数据：{{fatherData}}
			<hr style="height:3px;border:none;border-top:3px double #3BCEF2;" />

			<Child1></Child1>
			<Child2></Child2>
			<Child3></Child3>

			<div id="">
				<!--表格-->
				<el-table :data="list" border style="width: 100%">
					<el-table-column label="序号" width="180">
						<template scope="scope">
							<a href="javascript:;">{{scope.row.id}}</a>
						</template>
					</el-table-column>

					<el-table-column label="版本号" width="180">
						<template scope="scope">
							<span>{{scope.row.version}}</span >
                		</template>
            		</el-table-column>
             		<el-table-column label="操作" width="180">
               			 <template scope="scope">
                    		<el-button type="text" @click='editShow(scope.row,scope.$index)'>修改</el-button>
                    		 <!--弹窗数据-->
       			 			 <Child4 :formmsg="btnData"></Child4>
                		</template>
                		
            		</el-table-column>
       			 </el-table>
       			 
			</div>
		
				
		</div>
	</div>

</template>

<script>
	import Child1 from './components/Child1.vue'
	import Child2 from './components/Child2.vue'
	import Child3 from './components/Child3.vue'
	import Child4 from './components/Child4.vue'
	export default {
		//		var Event=new Vue();
		data() {
			return {
				fatherData: '我是父组件的数据啊',
				btnData:{
					dialogFormVisible:false,
					testmsg:'hello1',
					rowData:{
						id:'',
                		version:''
					}
				},             	
               list:[
                {
                	id:'1',
                    version:'1.0.0'
                },
                {
                id:'2',
                    version:'1.0.1'
                }
            ]
			}
		},
		components: {
			Child1,
			Child2,
			Child3,
			Child4
		},
		methods: {
             editShow(row,_index){
                 //记录索引
                 this.listIndex=_index;
                 //记录数据
                 this.btnData.rowData=row;
                 //显示弹窗
                 this.btnData.dialogFormVisible=true;
             },
//           editDo(){
//               let _index=this.listIndex
//               //根据索引，赋值到list制定的数
//               this.list[_index]=form.editObj;
//               //关闭弹窗
//               this.dialogFormVisible=false;
//           }
         }
	}
</script>

<style>

</style>