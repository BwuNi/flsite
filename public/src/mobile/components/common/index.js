import Picker from './form/picker.vue'
import Mask from './page/mask.vue'
import PopUp from './page/popup.vue'

export default {
    install: function (Vue) {
        Vue.component('bwu-picker', Picker),
        Vue.component('bwu-popup', PopUp)
        Vue.component('bwu-mask', Mask)
    }
}