<template>
    <div class="bwu-tree">
        <bwu-tree-item 
            :layerIndex='localLayerIndex'
            v-for="(v,i) in localData" 
            :data='v' 
            :index='i'
            :key="Math.random()"
            @item-height-resize = 'itemHeightResize'
        >
        </bwu-tree-item>
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
        "layerIndex"
    ],

    data() {
        return {
            itemHeights: [],
        }
    },
    methods: {
        itemHeightResize({ index, height }) {
            if (this.itemHeights[index] !== height) this.itemHeights[index] = height

            this.$emit('height-resize', this.itemHeights.reduce((res, v) => (v ? res + v : res), 0))

        }
    },
    computed: {
        localData(data) {
            return (this.data
                ? this.data
                : [])
        },
        mounted() {
            if (localData.lenght > 0)
                this.$emit('height-resize', this.itemHeights.reduce((res, v) => (v ? res + v : res), 0))
        },
        localLayerIndex() {
            return this.layerIndex ? this.layerIndex : 0
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
