<template>
    <div class="bwu-tree_item">
        <div class="bwu-tree_item--text" @click="textClick">
            {{localData.text}}
        </div>
        <div class="bwu-tree_item--children" 
            :style="{height:this.isOpen?this.chilrenHeight+'vw':'0'}">
            <bwu-tree :data="localChildren"></bwu-tree>
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
        "childrenField"
    ],

    data() {
        return {
            isOpen: true,
            itemHeight: 10
        };
    },
    computed: {
        localData(data) {
            return (this.data
                ? this.data
                : {
                    text: Math.random(), id: Math.random(), chilren: []
                })
        },
        localChildren() {
            return (
                this.data && this.data.chilren
                    ? this.data.chilren
                    : []
            )
        },
        chilrenHeight() {
            return this.localChildren.length * this.itemHeight
        }
    },
    methods:{
        textClick(){
            console.log(this.isOpen)
            this.isOpen = !this.isOpen
            console.log(this.isOpen)
            console.log(this.chilrenHeight)
        },
        itemClick(){

        }
    }
};
</script>

<style lang="scss" scoped>
.bwu-tree_item {
  .bwu-tree_item--text {
    height: 10vw;
    padding-left: 4vw;
    line-height: 10vw;
  }
  .bwu-tree_item--text:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .bwu-tree_item--children {
    padding-left: 4vw;
    overflow: hidden;
    transition: all 0.3s ease-out
  }
}
</style>
