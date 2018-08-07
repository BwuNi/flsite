<template>
	<div class="mask">
		<form class="panel">
			<input type='text' placeholder="用户名" v-model="uname" ></input>
			<input type='password' placeholder="密码" v-model="ucode" ></input>
			<input type='text' placeholder="验证码" v-model="vcode"></input>
			<div class="check_img"><img :src = 'img_src' @click="init_check"></div>
			<button @click="check_value" type="button" class="btn">登录</button>

		</form>
	</div>
</template>

<script>
import Colorful from '@/common/view/ColorfulBand.js'
import md from '@/common/request/md'

import pageTabs from '@/pc/store/modules/pageTabs'
import system from '@/pc/store/modules/user/system'

import cookie from 'js-cookie'

export default {
	name: 'bwu-login',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			img_src: '',
			vcode: '',
			vcode_id: '',
			ucode: 'Wckj123',
			uname: '超级管理员'
		}
	},
	methods: {
		check_value,
		init_check
	},
	mounted() {
		const _this = this
		init_background(_this.$el)
		init_check.apply(_this)
	}
}


function init_background(el) {
	let c = document.createElement('canvas')
	c.style.height = '100%'
	c.style.width = '100%'

	let the_canvas = Colorful(c)
	the_canvas.render()

	el.appendChild(c)
}

async function init_check() {
	const { src, vcode_id } = await md.getValidateCode()
	this.img_src = src
	this.vcode_id = vcode_id
}

function before_check(_this) {
	if (_this.uname && _this.ucode && _this.vcode)
		return true
	else
		return false
}

async function check_value() {
	const _this = this

	if (!before_check(_this))
		return

	let token = await md.login({
		LOGIN: _this.uname,
		PASSWORD: _this.ucode,
		VCODE: _this.vcode,
		VCODEID: _this.vcode_id
	})

	succ(_this, token)
}

async function succ(_this, id) {
	cookie.set('LOGIN_KEY', id)

	let list = await md.getMyMenuTops()


	_this.$store.commit(
		system.mut.INIT_MOD,
		{ modules: list }
	)

	_this.$emit('login')


}

function err() {

}

</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fdfdfd;
  z-index: 999;
}

.btn {
  position: absolute;
  width: 100%;
  height: 48px;
  bottom: -72px;
  left: 0;
  right: 0;
  border: none;
  background: aqua;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.33);
}
.panel {
  position: absolute;
  left: 50%;
  top: 45%;
  width: 240px;
  transform: translate(-50%, -45%);
  z-index: 999;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.33);
  border: solid 1px #fefefe;
}

.panel h1 {
  text-align: center;
  font-size: 24px;
}

.check_img {
  width: 83px;
  height: 33px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.check_img img {
  display: block;
  height: 100%;
}
</style>

<style>
.mask input {
  border: none !important;
  border-radius: 0;
  height: 56px;
  background-color: transparent !important;
  padding-left: 18px;
  padding-right: 18px;
}

.mask div:first-child > input {
  border-bottom: solid 1px #ccc !important;
}
</style>