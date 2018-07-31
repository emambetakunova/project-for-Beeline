import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from './modules/Welcome.vue';
import Agreement from './modules/Agreement.vue'
import Confirmation_page from './modules/Confirmation_page.vue'
import Number from './modules/Number.vue';
import Code from './modules/Code.vue';
import Main from './modules/Main.vue';
import App from './modules/App.vue';
import axios from 'axios';
import Rating from './modules/Rating.vue';


Vue.use(VueRouter);

const routes = [
  {path: '/confirm', component: Confirmation_page},
  {path: '/agreement', component: Agreement},
  {path: '/code', component: Code},
  {path: '/number', component: Number},
  {path: '/welcome', component: Welcome},
  {path: '/rating', component: Rating},
  {path: '/', component: Main}
];

const router = new VueRouter(
  {routes}
);

const axiosConfig = {
  baseUrl: 'http://localhost:8181/wifi/',
  timeout: 30000,
};

Vue.prototype.$axios = axios.create(axiosConfig);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
