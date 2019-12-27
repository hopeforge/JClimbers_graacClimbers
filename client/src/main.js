import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' 
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueResource);

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
