import Vue from 'vue'
import App from './App.vue'
import VueInitialList from './lib/index'

Vue.use(VueInitialList)
new Vue({
  el: '#app',
  render: h => h(App)
})
