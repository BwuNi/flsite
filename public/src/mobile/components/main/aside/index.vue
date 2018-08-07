<template>
    <div class="m-aside" 
        :style="p
            ?{right:(105-distance)+'vw',transition:transition}
            :{left:(105-distance)+'vw',transition:transition}">
        
        <div  class="touch_bar" 
            @touchstart='openStart' 
            :style="p
                ?{ left: '75vw',display:close?'block':'none'}
                :{ right: '75vw',display:close?'block':'none'}">
        </div>
        
        <div class="shadow" 
        :style="Object.assign(
            {width:(105-distance)+'vw',opacity:distance/80 ,transition:transition,display:this.close?'none':'block'},
            p?{left:'75vw'}:{right:'75vw'}
            )"></div>
        <div class="content" @touchstart='closeStart'></div>
    </div>

</template>

<script>
import openStart from './openEvent.js'
import closeStart from './closeEvent.js'

let moveToHandle = null

export default {
    name: 'm-header',
    props: ['position'],
    data() {
        return {
            open: false,
            close: true,
            right: 0,
        }
    },
    computed: {
        p() {
            return (this.position === 'right'
                ? false
                : true)
        },
        distance() {
            const res = ((!this.right || this.right < 0)
                ? 0
                : (this.right > 75)
                    ? 80
                    : this.right)
            
            this.$emit('distance',res)
            return res
        },
        transition() {
            if (this.open) setTimeout(() => {
                this.right = 80
            }, 0);

            if (this.close) setTimeout(() => {
                this.right = 0
            }, 0);

            this.$emit('open_close',{open:this.open,close:this.close})

            return (this.open || this.close
                ? 'all 0.2s ease-out'
                : '')
        }
    },
    methods: {
        openStart(event) {
            openStart(this)(event)
        },
        closeStart(event) {
            closeStart(this)(event)
        },
        moveTo(right) {
            const
                now = this.right,
                _this = this

            if (moveToHandle) clearTimeout(moveToHandle)

            if (
                ((now - right) < 2)
                || ((now - right) > -2)
            )
                this.right = right
            else
                moveToHandle = setTimeout(() => {
                    _this.moveTo((now + right) / 2)
                }, 20);

        }
    }
}



</script>

<style lang="scss" scoped>
.m-aside {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 75vw;
  background: #fff;
  box-shadow: 0vw 0 3vw 0 rgba(0, 0, 0, 0.3);

  .shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .touch_bar {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10vw;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
  }
}
</style>


