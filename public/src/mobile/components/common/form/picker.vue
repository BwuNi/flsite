<template>
	<div class='bwu-picker block'>

		<div class='modal'>
			<div class='popup'>
				<div class="content">
					<div v-for='(v,i) in list' class="content--item">
						{{v.content}}
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
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
			]
		}
	},
	methods: {
	},
	mounted() {

	}
}
</script>
<style lang="scss" scoped>
.bwu-picker {
  &.block {
    width: 100%;
    height: 10vw;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);

    .popup {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 33vh;
      background-color: #fff;
      box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.3);
	  overflow: auto;
	  .content{
		padding: 16.5vh 0;

		.content--item{
			height: 10vw;
			text-align: center;
		}
	  }
    }
  }
}
</style>
