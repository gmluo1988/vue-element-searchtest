<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-document"></i> 系统概述</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="ms-doc">
			<h3>README.md</h3>
			<article>
				<h1>elementui-studysystem</h1>
				<p>基于Vue.js 2.x系列 + Element UI 的搜索测试相关后台系统</p>
				<h2>前言</h2>

				<p>该后台用于个人学习Vue.js 2.x的记录系统，自定义的一套多功能的后台，适用于搜索组测试相关功能的后台管理系统。</p>
					
				<p>本平台基于vue.js 2.5.11,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库。</p>
				<h2>功能</h2>
				<el-checkbox disabled checked>登录/注销</el-checkbox>
				<br>
				<el-checkbox disabled checked>搜索报文查看</el-checkbox>
				<br>
				<el-checkbox disabled checked>搜索报文保存</el-checkbox>
				<br>
				<el-checkbox disabled checked>搜索报文编辑</el-checkbox>
				<br>
				<el-checkbox disabled checked>搜索报文删除</el-checkbox>
				<br>
				<el-checkbox disabled checked>从log日志获取报文</el-checkbox>
				<br>
			</article>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {}
		}
	}
</script>

<style>

</style>