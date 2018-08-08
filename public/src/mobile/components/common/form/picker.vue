<template>
	<div class='bwu-picker block' @touchend="touchend">
		{{result?result.content:''}}
		<bwu-mask :isShown='popup' :position="'fixed'" :z='999' @tap ="popdown" >
			<bwu-popup :isShown='popup' @confirm = 'choose'></bwu-popup>
		</bwu-mask>

		<!-- <div class='modal'>
			<div class='popup'>
				<div class="content">
					<div v-for='(v,i) in list' class="content--item">
						{{v.content}}
					</div>
				</div>
			</div>
		</div> -->
	</div>

</template>

<script>
import Mask from '../page/mask'
import PopUp from '../page/popup'

export default {
	name: 'bwu-picker',
	props: [],
	data() {
		return {
			list: [
				{ content: 1, id: 12 },
				{ content: 2, id: 23 },
				{ content: 3, id: 34 },
				{ content: 4, id: 45 },
				{ content: 5, id: 56 },
				{ content: 6, id: 67 },
				{ content: 7, id: 78 },
			],
			result:null,
			popup: false,
		}
	},

	methods: {
		touchend(e) {
			this.popup = true
		},
		popdown() {
			this.popup = false
		},
		choose(v){
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


  &.block {
    width: 100%;
	text-align: center;
    height: 10vw;line-height: 10vw;
    box-shadow: 0 0.5vw 0.7vw 0 rgba(0, 0, 0, 0.3);
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
