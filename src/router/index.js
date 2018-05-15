
//导入相关引用
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
				{
					path: '/usermanage',
					component: resolve => require(['../components/contentpages/usermanage/UserManage.vue'], resolve)
				},
				{
					path: '/componenttest',
					component: resolve => require(['../components/contentpages/test/ComponentTest.vue'], resolve)
				}
			]

		},
	]
})