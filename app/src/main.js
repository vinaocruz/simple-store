// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

import VueRouter from 'vue-router'

import ManageProducts from './components/ManageProducts'
import ProductCatalog from './components/ProductCatalog'

Vue.use(VueRouter)

const routes = [
	{path: '/home', alias: '/', component: ProductCatalog},
	{path: '/manage-products', component: ManageProducts}
]
const router = new VueRouter({routes})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
