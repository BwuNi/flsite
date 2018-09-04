<template>
    <div class="bwu-tree">
        <bwu-tree-item v-for="(v,i) in localData" :data='v' :key="Math.random()"></bwu-tree-item>

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
        return {};
    },
    computed: {
        localData(data) {
            return (this.data
                ? this.data
                : [
                    {
                        text: Math.random(), id: Math.random(), chilren: [
                            { text: Math.random(), id: Math.random(), chilren: [] },
                            { text: Math.random(), id: Math.random(), chilren: [] },
                            { text: Math.random(), id: Math.random(), chilren: [] },
                            { text: Math.random(), id: Math.random(), chilren: [] }

                        ]
                    },
                    { text: Math.random(), id: Math.random(), chilren: [] },
                    { text: Math.random(), id: Math.random(), chilren: [] },
                    { text: Math.random(), id: Math.random(), chilren: [] },
                    { text: Math.random(), id: Math.random(), chilren: [] }
                ])
        }
    }
};
</script>

<style lang="sass" scoped>

</style>
