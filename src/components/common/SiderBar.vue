<template>
	<div class="sidebar">
		<el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index">
						<template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
						<el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
						</el-menu-item>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index">
						<i :class="item.icon"></i>{{ item.title }}
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						icon: 'el-icon-setting',
						index: 'home',
						title: '系统概述'
					},
					{
						icon: 'el-icon-menu',
						index: 'searchsource',
						title: '搜索报文',
						subs: [{
								index: 'sourceoperation',
								title: '查看报文'
						},{
								index: 'getlogsource',
								title: '获取报文'
							}
						]
					},
					
//					{
//						icon: 'el-icon-menu',
//						index: 'table',
//						title: '表格',
//						subs: [
//							{
//								index: 'extendbutton',
//								title: '门票接口'
//							}, {
//								index: 'basebutton',
//								title: '玩乐接口'
//							}, {
//								index: 'basebutton',
//								title: '联想词接口接口'
//							}
//						]
//					},
//					{
//						icon: 'el-icon-date',
//						index: 'form',
//						title: '表单',
//						subs: [{
//								index: 'baseform',
//								title: '典型表单'
//							},
//							{
//								index: 'inlineform',
//								title: '行内表单'
//							},
//							{
//								index: 'positionfrom',
//								title: '对齐方式'
//							},
//							{
//								index: 'rulesform',
//								title: '表单验证'
//							},
//							{
//								index: 'selfrulesform',
//								title: '自定义校验规则'
//							},
//							{
//								index: 'additemform',
//								title: '动态增减表单项'
//							},
//							{
//								index: 'numberrulesform',
//								title: '数字类型验证'
//							},
//							{
//								index: 'sizeform',
//								title: '组件尺寸控制'
//							}
//						]
//					},
//					{
//						icon: 'el-icon-menu',
//						index: 'collapse',
//						title: '折叠面板',
//						subs: [{
//								index: 'basecollapse',
//								title: '基础用法'
//							},
//							{
//								index: 'extendcollapse',
//								title: '扩展用法'
//							}
//						]
//					},
//					{
//						icon: 'el-icon-document',
//						index: 'upload',
//						title: '文件上传',
//						subs: [{
//								index: 'baseupload',
//								title: '基本样式'
//							},
//							{
//								index: 'imgupload',
//								title: '上传图像'
//							},
//							{
//								index: 'imgwall',
//								title: '照片墙'
//							},
//							{
//								index: 'imglist',
//								title: '图片列表缩略图'
//							},
//							{
//								index: 'dragupload',
//								title: '拖拽上传'
//							},
//							{
//								index: 'manualupload',
//								title: '手动上传'
//							},
//							{
//								index: 'imguploadsize',
//								title: '支持图片裁剪'
//							}
//						]
//					},
//					{
//						icon: 'el-icon-document',
//						index: 'editor',
//						title: '编辑器',
//						subs: [{
//								index: 'vueeditor',
//								title: 'VueEditor'
//							},
//							{
//								index: 'markdownditor',
//								title: 'MarkdownEditor'
//							}
//						]
//					},
//					{
//						icon: 'el-icon-star-on',
//						index: 'basecharts',
//						title: '图表'
//					},
//					{
//						icon: 'el-icon-upload2',
//						index: 'drag',
//						title: '拖拽'
//					}
				]
			}
		},
		computed: {
			onRoutes() {
				return this.$route.path.replace('/', '');
			}
		}
	}
</script>

<style scoped>
	.sidebar {
		display: block;
		position: absolute;
		width: 200px;
		left: 10px;
		top: 70px;
		bottom: 0;
		/*background: #1396F4;*/
		margin-top: 10px;
	}
	
	.sidebar>ul {
		height: 100%;
		background: #A5D3F4;
	}
</style>