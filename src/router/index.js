import Vue from 'vue';
import VueRouter from 'vue-router';

//使用路由
Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
	scrollBehavior: () => ({
		y: 0
	}), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes: [
		//	使用重定向(redirect)配置默认页面
		{
			path: '/',
			redirect: '/login'

		},
		//	配置登录页面地址
		{
			path: '/login',
			component: resolve => require(['../components/contentpages/Login.vue'], resolve)

		},
		//	配置注册页面地址
		{
			path: '/register',
			component: resolve => require(['../components/contentpages/Register.vue'], resolve)

		},
		{
			path: '/home',
			component: resolve => require(['../components/common/Home.vue'], resolve),
			children: [{
					path: '/',
					component: resolve => require(['../components/contentpages/Readme.vue'], resolve)
				},
				//				配置报文操作页面路由地址				
				{
					path: '/sourceoperation',
					component: resolve => require(['../components/contentpages/searchsource/SourceOperation.vue'], resolve)
				},
				{
					path: '/getlogsource',
					component: resolve => require(['../components/contentpages/searchsource/GetLogSource.vue'], resolve)
				},

				//				//				配置按钮页面路由地址
				//				{
				//					path: '/basebutton',
				//					component: resolve => require(['../components/contentpages/buttonpages/BaseButton.vue'], resolve)
				//				},
				//				{
				//					path: '/extendbutton',
				//					component: resolve => require(['../components/contentpages/buttonpages/ExtendButton.vue'], resolve)
				//				},
				//				//				配置表格页面路由地址
				//				{
				//					path: '/basetable',
				//					component: resolve => require(['../components/contentpages/tablepages/BaseTable.vue'], resolve)
				//				},
				//				{
				//					path: '/extendtable',
				//					component: resolve => require(['../components/contentpages/tablepages/ExtendTable.vue'], resolve)
				//				},
				//				{
				//					path: '/vuetable',
				//					component: resolve => require(['../components/contentpages/tablepages/VueTable.vue'], resolve)
				//				},
				//				{
				//					path: '/practicetable',
				//					component: resolve => require(['../components/contentpages/tablepages/PracticeTable.vue'], resolve)
				//				},
				//
				//				//				配置表单页面路由地址
				//				{
				//					path: '/baseform',
				//					component: resolve => require(['../components/contentpages/formpages/BaseForm.vue'], resolve)
				//				},
				//				{
				//					path: '/inlineform',
				//					component: resolve => require(['../components/contentpages/formpages/InlineFrom.vue'], resolve)
				//				},
				//				{
				//					path: '/positionfrom',
				//					component: resolve => require(['../components/contentpages/formpages/PositionForm.vue'], resolve)
				//				},
				//				{
				//					path: '/rulesform',
				//					component: resolve => require(['../components/contentpages/formpages/RulesForm.vue'], resolve)
				//				},
				//				{
				//					path: '/selfrulesform',
				//					component: resolve => require(['../components/contentpages/formpages/SelfrulesForm.vue'], resolve)
				//				},
				//				{
				//					path: '/additemform',
				//					component: resolve => require(['../components/contentpages/formpages/AdditemForm.vue'], resolve)
				//				},
				//				{
				//					path: '/numberrulesform',
				//					component: resolve => require(['../components/contentpages/formpages/NumberrulesForm.vue'], resolve)
				//				},
				//				{
				//					path: '/sizeform',
				//					component: resolve => require(['../components/contentpages/formpages/SizeForm.vue'], resolve)
				//				}
				//				//				配置折叠面板页面路由地址
				//				,
				//				{
				//					path: '/basecollapse',
				//					component: resolve => require(['../components/contentpages/collapsepages/BaseCollapse.vue'], resolve)
				//				},
				//				{
				//					path: '/extendcollapse',
				//					component: resolve => require(['../components/contentpages/collapsepages/ExtendCollapse.vue'], resolve)
				//				}
				//
				//				//				配置编辑器页面路由地址
				//				,
				//				{
				//					path: '/vueeditor',
				//					component: resolve => require(['../components/contentpages/editorpages/VueEditor.vue'], resolve)
				//				},
				//				{
				//					path: '/markdownditor',
				//					component: resolve => require(['../components/contentpages/editorpages/MarkdownEditor.vue'], resolve)
				//				}

			]

		},
	]
})