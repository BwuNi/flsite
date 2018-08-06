<template>
    <div>
        <m-header></m-header>
        <m-fab></m-fab>
        <m-aside 
            :animation.sync='asideMoveObj.animation' 
            :right.sync='asideMoveObj.aside_right'
            :open.sync='asideMoveObj.open'
            :close.sync='asideMoveObj.close'>
        </m-aside>
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
            asideMoveObj: {
                isBegin: false,
                startPosition: 0,
                aside_right: 0,
                animation: true,
                open:false,
                close:true
            }
        }
    },
    methods: {

    }
}
</script>

