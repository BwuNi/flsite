<template>
    <div @touchstart = 'touchstart' @touchmove = 'touchmove' @touchend = 'touchend'>
        <m-header></m-header>
        <m-fab></m-fab>
        <m-aside v-bind:right='asideMoveObj.aside_right'></m-aside>
    </div>
</template>

<script>
import Header from './header'
import Fab from './fab'
import Aside from './aside'

export default {
    name: 'bwu-home',
    components: {
        'm-header': Header,
        'm-fab': Fab,
        'm-aside': Aside
    },
    data() {
        return {
            asideMoveObj: {
                isBegin: false,
                startPosition: 0,
                aside_right: 0
            }
        }
    },
    methods: {
        touchstart(event) {
            const _this = this

            console.log(event)
            console.log()

            if (event.touches[0].clientX < 10) {
                _this.asideMoveObj.isBegin = true
                _this.asideMoveObj.startPosition = event.touches[0].clientX / (document.body.clientWidth/100)
            }

            
            console.log(_this.asideMoveObj.isBegin)
        },
        touchmove(event) {
            const _this = this
            if (_this.asideMoveObj.isBegin) {
                _this.asideMoveObj.aside_right = event.touches[0].clientX/(document.body.clientWidth/100) - _this.asideMoveObj.startPosition
            }

            
            console.log(_this.asideMoveObj.aside_right)
        },
        touchend(event) {
            const _this = this

            if (_this.asideMoveObj.isBegin) {
                _this.asideMoveObj.isBegin = false
                if(_this.asideMoveObj.aside_right> 40){
                    _this.asideMoveObj.aside_right = 80
                } else{
                    _this.asideMoveObj.aside_right = 0
                }
            }
        }
    }
}
</script>

