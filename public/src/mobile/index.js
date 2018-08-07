import Vue from 'vue'

import App from './App'


import common from './components/common'


Vue.use(common)

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  })
  

