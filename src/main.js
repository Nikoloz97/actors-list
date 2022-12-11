import Vue from 'vue'
import App from './App.vue'
import store from './Store'
// Portal vue does not work : https://v2.portal-vue.linusb.org/guide/getting-started.html#what-is-portalvue
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
