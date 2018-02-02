<template>
	<div class="loginpage">
		<div class="loginpage-title">用户登录</div>
		<div class="loginpage-login">
			<el-form :model="loginFrom" :rules="rules" ref="loginFrom" label-width="0px" class="loginFrom">
				<el-form-item prop="username">
					<el-input v-model="loginFrom.username" placeholder="username"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" placeholder="password" v-model.number="loginFrom.password" @keyup.enter.native="loginBtn('loginFrom')"></el-input>
				</el-form-item>
				<div class="login-btn">
					<el-button-group >
					<el-button type="primary" icon="el-icon-caret-top" @click="loginBtn('loginFrom')">登录</el-button>
					<el-button type="primary" @click="registerBtn">注册<i class="el-icon-caret-right"></i></el-button>
				</el-button-group>
				</div>
				
				
				<p style="font-size:12px;line-height:30px;color:#999;text-align: right;margin-top: 20px;">Tips : 用户名和密码随便填。</p>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				loginFrom: {
					username: '',
					password: ''
				},
				rules: {
					username: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						}, //验证username不可为空
						{
							min: 3,
							max: 6,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						} //验证username输入长度
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						}, //验证password不可为空
						{
							type: 'number',
							message: '密码必须为数字值',
							trigger: 'blur'
						} //验证password必须是数值类型					
					]
				}
			}
		},
		methods: {
			loginBtn(formName) {
				const self = this;
				self.$refs[formName].validate((valid) => {
					if(valid) {
						localStorage.setItem('ms_username', self.loginFrom.username);//传递username到下个页面
						self.$router.push('/home');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			registerBtn(){
				const self = this;
				self.$router.push('/register');//点击注册按钮跳转至注册页面
			}
		}
	}
</script>

<style scoped>
	.loginpage {
		position: relative;
		width: 100%;
		height: 100%;
		margin-top: 400px;
	}
	
	.loginpage-title {
		position: absolute;
		top: 50%;
		width: 100%;
		margin-top: -230px;
		text-align: center;
		font-size: 30px;
		/*color: #fff;*/
		/*margin-top: 200px;*/
	}
	
	.loginpage-login {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 300px;
		height: 160px;
		margin: -150px 0 0 -190px;
		padding: 40px;
		border-radius: 5px;
		background: #fff;
		/*margin-top: 400px;*/
	}
	
	.login-btn{
		text-align: center;
	}
	/*.login-btn {
		text-align: left;
	}
	
	.login-btn button {
		width: 50%;
		height: 36px;
	}*/
</style>