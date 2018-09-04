import Picker from './picker.vue'
import Mask from './mask.vue'
import PopUp from './popup.vue'
import Tree from './tree.vue'
import TreeItem from './treeItem.vue'

export default {
    install: function (Vue) {
        Vue.component('bwu-picker', Picker)
        Vue.component('bwu-popup', PopUp)
        Vue.component('bwu-mask', Mask)
        Vue.component('bwu-tree', Tree)
        Vue.component('bwu-tree-item', TreeItem)
    }
}