<template>
    <div class="m-aside" :style="{right:(105-position)+'vw'}">
        <div class="shadow" :style="{width:(105-position)+'vw',opacity:position/80 }"></div>
    </div>
</template>

<script>
export default {
    name: 'm-header',
    props: ['right'],
    data() {
        return {
            
        }
    },
    computed:{
        position(){
            return ((!this.right || this.right < 0)
                ? 0
                : (this.right > 75)
                    ? 80
                    : this.right)
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
  box-shadow: 0.5vw 0 1vw 0 rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-out;

  .shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 75vw;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
  }
}
</style>


