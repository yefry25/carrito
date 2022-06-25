import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from 'vue-router';
import {routes} from "./routes/routes.js"
import {store} from "./store/store.js"

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  //aqui se ponen las rutas
  routes,
  mode:"history"
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
