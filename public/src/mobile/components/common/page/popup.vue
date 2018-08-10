<template>
    <div class='bwu-popup' 
        :style='{
            bottom : _hide? "-64vw" : "0"
        }'
        @touchstart.stop
        @touchend.stop
        @touchcancel.stop
        >
        <div class="chooselist" 
            ref= "chooselist"
            @scroll.stop="scroll" 
            @touchstart.stop= 'touchstart' 
            @touchend.stop= 'touchend' 
            @touchcancel.stop= 'touchend'>

            <div class="content">
                <div v-for='(v,i) in list' class="content--item">
                    {{v[contentField]}}
                </div>
            </div>

        </div>
        <button class="confirm_btn" @touchend = 'confirm'>确认</button>
    </div>
</template>

<script>
let isTouching = false
let isScrolling = false

const debounce = (timeout, func) => {
    let handle = null
    return (...arg) => {
        if (handle) clearTimeout(handle)
        handle = setTimeout(func.bind(null, ...arg), timeout);
    }
}
export default {
    name: 'bwu-popup',
    props: ['z', 'list', 'validate', 'isShown','idField','contentField'],
    data() {
        return {
        }
    },
    computed: {
        _hide() {
            return this.isShown === true ? false : true
        }
    },
    methods: {
        getResult() {
            const target = this.$refs.chooselist
            const index = target.scrollTop/document.body.clientWidth*100/10
            return this.list[Math.round(index)]
        },

        cancel() {
            this.$emit('cancel')
        },
        confirm() {
            this.$emit('confirm',this.getResult())
        },
        touchstart() {
            isTouching = true
        },
        touchend() {
            isTouching = false
        },
        scroll: debounce(200, (e) => {
            if (isTouching || isScrolling) return
            const
                toppx = e.target.scrollTop,
                bw = document.body.clientWidth,
                topvw = toppx / bw * 100,
                distancevw = topvw % 10

            //if ((distancevw <= 0.4) || (distancevw >= 9.6)) return

            isScrolling = true

            scrollTo(
                e.target,
                distancevw < 5
                    ? (topvw - distancevw) * bw / 100
                    : (topvw - distancevw + 10) * bw / 100,
                0.6 * bw / 100,
                () => { isScrolling = false }
            )

        })
    }
}

function scrollTo(target, position, range = 5, callback) {
    let handle = null,
        status = false

    function h() {
        const top = target.scrollTop

        if ((top - position > (range * (-1)))
            && (top - position < range)
        ) {
            target.scrollTop = position
            if (callback) callback()
            return
        } else {
            const newTop = (top + position) / 2
            target.scrollTop = newTop
            handle = requestAnimationFrame(h)
        }
    }

    handle = requestAnimationFrame(h)

    return () => {
        if (handle) clearTimeout(handle)
    }
}

</script>


<style lang="scss" scoped>
.bwu-popup {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 66vw;
  background-color: #fff;
  box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: bottom 0.3s ease-out;
  background:linear-gradient(to bottom, #cccccc, #cccccc 42.7%, white 43%, white 57.3%, #cccccc 57.6%, #cccccc); 

  .confirm_btn {
    position: absolute;
    top: 29.2vw;
    right: 1vw;
    height: 8vw;
    line-height: 8vw;
    width: 16vw;
    background-color: #ff6473;
    text-align: center;
    outline: none !important;
    padding: 0;
    border: none;
    color: #fff;
    border-radius: 2px;
    transition: all 0.2s ease;
  }
  .confirm_btn:active {
    box-shadow: 0 0.3vw 0.5vw 0 rgba(0, 0, 0, 0.3);
  }
  .chooselist {
    position: absolute;
    left: 0;
    right: 0;
    top: 1vw;
    bottom: 1vw;
    overflow: auto;

    // box-shadow: 0 27vw 0 0 rgba(0, 0, 0, 0.1) inset,
    //   0 -27vw 0 0 rgba(0, 0, 0, 0.1) inset;

    .content {
      padding: 27vw 0;
      z-index: -10;

      .content--item {
        height: 10vw;
        line-height: 10vw;
        text-align: center;
        font-size: 4.4vw;
        color: #666666
      }
    }
  }

  .mask {
    height: 50%;
    width: 100%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
  }
}
</style>

