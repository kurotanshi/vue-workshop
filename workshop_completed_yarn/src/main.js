
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

window.Vue = Vue;

new Vue({
  el: '#app',
  render: h => h(App)
})

