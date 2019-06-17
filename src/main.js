import Vue from 'vue'
import App from './App.vue'

import npmGit from './components/index.js'
Vue.use(npmGit)

new Vue({
  el: '#app',
  render: h => h(App)
})
