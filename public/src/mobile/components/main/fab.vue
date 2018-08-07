<template>
    <div class="m-fab" :style="{left:left,transition:transition}">
        
    </div>
</template>

<script>
export default {
    name:'m-header',
    props:['left','transition']
}
</script>

<style lang="scss" scoped>

.m-fab{
    width: 15.55vw;
    height: 15.55vw;                         
    box-shadow: 0 0.7vw 2.4vw 0 rgba(0,0,0,0.4);
    position: fixed;
    bottom: 5vw;
    background-color: #90aeff;
    border-radius: 50%;
}
</style>
