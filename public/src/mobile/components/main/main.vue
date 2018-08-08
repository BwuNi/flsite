<template>
    <div>
        <m-header></m-header>
        <m-fab 
            :left = 'fabLeft + "vw"'
            :transition = 'fabTransition' >
        </m-fab>

        <m-aside 
            :position = '"right"'
            @distance = 'asideDistance'
            @open_close = 'asideOpenClose'>
        </m-aside>

        <!-- <bwu-mask :isShown='mask' @tap="maskclick"></bwu-mask>
        <bwu-popup></bwu-popup> -->
    </div>
</template>

<script>
import Header from './header'
import Fab from './fab'
import Aside from './aside/index'

export default {
    name: 'bwu-home',
    components: {
        'm-header': Header,
        'm-fab': Fab,
        'm-aside': Aside
    },
    data() {
        return {
            fabLeft: 80,
            fabTransition: 'all 0.2s ease-out',
            mask:true
        }
    },
    methods: {
        asideDistance(e) {
            this.fabLeft = 80 - (e < 5 ? 0 : e - 5)
        },
        asideOpenClose({ open, close }) {

            this.fabTransition = (open || close
                ? 'all 0.2s ease-out'
                : '')
        },
        maskclick(){
            console.log(1)
            this.mask = !this.mask
        }
    }
}
</script>

