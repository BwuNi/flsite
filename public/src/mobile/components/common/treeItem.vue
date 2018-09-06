<template>
    <div class="bwu-tree_item">
        <div 
            :class="{
                'bwu-tree_item--text':true,
                'animation':isAnimation,
                'with_children':this.localChildren.length > 0,
                'children_open':isOpen
            }" 
            :style="{
                paddingLeft:layerIndex * 4 + 6 +'vw',
                height:itemHeight +'vw',
                lineHeight:itemHeight+'vw'
            }"
            @touchend="textClick">
            <span 
            class="bwu-tree_item--icon"
            :style="{
                left:layerIndex * 4 + 3 +'vw',
            }"
            ></span>
            {{localData.text}}

        </div>
        <div
            v-if="localChildren.length" 
            :class="{'bwu-tree_item--children':true,'--children__open':isOpen}" 
            :style="{
                height:realHeight+'vw'
            }">

            <bwu-tree 
                :layerIndex='layerIndex+1'
                @height-resize = 'treeResize'
                :data="localChildren">
            </bwu-tree>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        "innerStyle",
        "data",
        "idField",
        "textField",
        "valueField",
        "childrenField",
        'index',
        'layerIndex'
    ],

    data() {
        return {
            isOpen: true,
            isAnimation: false,
            itemHeight: 12,
            treeHeight: 0
        };
    },
    computed: {
        localData(data) {
            return (this.data
                ? this.data
                : {
                    text: Math.random(), id: Math.random(), children: []
                })
        },
        localChildren() {
            return (
                this.data && this.data.children
                    ? this.data.children
                    : []
            )
        },
        realHeight() {
            return this.isOpen ? this.treeHeight : 0
        }
    },
    methods: {
        textClick() {
            const _this = this
            if (this.localChildren.length) this.isOpen = !this.isOpen
            this.$emit('item-height-resize', { height: this.realHeight + this.itemHeight, index: this.index })

            if (this.isAnimation) {
                this.isAnimation = false
                setTimeout(() => { _this.isAnimation = true }, 50)
            } else {
                this.isAnimation = true
            }
        },
        treeResize(height) {
            this.treeHeight = height
            this.$emit('item-height-resize', { height: this.realHeight + this.itemHeight, index: this.index })
        },
        itemClick() {

        }
    },
    mounted() {
        // this.treeHeight = this.localChildren.length * this.itemHeight

        this.$emit('item-height-resize', { height: this.realHeight + this.itemHeight, index: this.index })
    }
};
</script>

<style lang="scss" scoped>
@keyframes myfirst {
  0% {
    left: 0;
    right: 100%;
    opacity: 0;
  }
  50% {
    left: 0;
    right: 0;
    opacity: 1;
  }
  100% {
    left: 100%;
    right: 0;
    opacity: 0;
  }
}

.bwu-tree_item {
  .bwu-tree_item--text {
    height: 10vw;
    padding-left: 6vw;
    line-height: 10vw;
    position: relative;
    overflow: hidden;
    &.animation::before {
      content: "";
      animation: myfirst 0.4s ease-out 1;
      display: block;
      position: absolute;
      background-color: rgba(37, 44, 65, 0.05);
      left: 0;
      right: 100%;
      top: 0;
      bottom: 0;
    }
    &.with_children > .bwu-tree_item--icon {
      content: "";
      border-left: 1.2vw solid rgba(0, 0, 0, 0.3);
      border-top: 1.2vw solid transparent;
      border-bottom: 1.2vw solid transparent;
      display: block;
      position: absolute;
      left: 3vw;
      top: 50%;
      transform: translate(-50%, -50%) rotate(0);
      height: 0;
      width: 0;
      transition: all 0.3s ease-out;
    }

    &.with_children.children_open > .bwu-tree_item--icon {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }

  .bwu-tree_item--children {
    // padding-left: 4vw;
    overflow: hidden;
    transition: all 0.3s ease-out;
    background-color: rgba(88, 116, 152, 0.06);

    &.--children__open {
      border-top: 0.1vw solid rgba(0, 0, 0, 0.2);
      border-bottom: 0.1vw solid rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
