<template>
    <div 
        class="bwu-mask"
        :style="{
            position:_position,
            backgroundColor:_color,
            zIndex:_z,
            display:maskDisplay?'block':'none',
            opacity:maskOpacity
        }"
        :title="Shown"
        @touchend.stop="maskClick"
        @touchstart.stop="maskStart"
    >
    <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bwu-mask',

    props: ['position', 'color', 'z', 'isShown'],

    data() {
        return {
            maskDisplay: false,
            maskOpacity: 0
        }
    },

    computed: {
        _position() {
            console.log(this.position)
            return this.position ? this.position : 'absolute'
        },
        _color() {
            return this.color ? this.color : 'rgba(0,0,0,0.3)'
        },
        _z() {
            return this.z ? this.z : '0'
        },
        Shown() {
            const _this = this
            if (!_this.isShown) {

                _this.maskOpacity = 0
                setTimeout(() => {
                    _this.maskDisplay = false
                }, 300);
            } else {
                _this.maskDisplay = true
                setTimeout(() => {
                    _this.maskOpacity = 1
                }, 0);
            }
            return 'mask'
        }

    },

    mounted() {
        // if (this.isShown) this.maskDisplay = true
    },
    methods: {
        maskClick(e) {
            this.$emit('tap', e)
            return false
        },

        maskStart(e) {
            this.$emit('tap', e)
            return false
        }
    }
}
</script>


<style lang="scss" scoped>
.bwu-mask {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>

