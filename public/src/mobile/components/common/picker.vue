<template>
	<div class='bwu-picker border' :style="_style" @touchmove="touchmove" @touchstart="touchstart" @touchend="touchend">
		{{result?result[_contentField]:''}}

		<bwu-mask :isShown='popup' :position="'fixed'" :z='999' @tap ="popdown" >
			<bwu-popup :isShown='popup' :list='_list' :contentField="_contentField" :idField="_idField" @confirm = 'choose'></bwu-popup>
		</bwu-mask>
	</div>

</template>

<script>

let touchStatus = false


export default {
	name: 'bwu-picker',
	props: ['innerStyle', "list",'decoration', 'idField', 'contentField'],
	data() {
		return {
			result: null,
			popup: false,
		}
	},
	computed: {
		_style() {
			return this.innerStyle ? this.innerStyle : {}
		},
		_decoration() {
			return this.decoration ? this.decoration : 'border'
		},
		_idField() {
			return this.idField ? this.idField : 'id'
		},
		_contentField() {
			return this.contentField ? this.contentField : 'value'
		},
		_list() {
			return this.list ? this.list : []
		}
	},

	methods: {

		touchend(e) {
			if (touchStatus) this.popup = true
			touchStatus = false
		},
		touchstart(e) {
			touchStatus = true
		},

		touchmove(e) {
			touchStatus = false
		},

		popdown() {
			this.popup = false
		},
		choose(v) {
			this.result = v
			this.popdown()
		}

	},
	mounted() {

	}
}
</script>
<style lang="scss" scoped>
.bwu-picker {
  &.card {
    width: 100%;
    text-align: center;
    height: 10vw;
    line-height: 10vw;
    box-shadow: 0 0.5vw 0.7vw 0 rgba(0, 0, 0, 0.3);
  }

  &.border {
    width: 100%;
    text-align: center;
    height: 12vw;
    line-height: 12vw;
    font-size: 5vw;
    color: #2e6699;
    border: solid 1px #2e6699;
    border-radius: 1vw;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
