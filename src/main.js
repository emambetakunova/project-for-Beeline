import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from './modules/Welcome.vue';
import Agreement from './modules/Agreement.vue'
import Confirmation_page from './modules/Confirmation_page.vue'
import Number from './modules/Number.vue';
import Code from './modules/Code.vue';
import Main from './modules/Main.vue';
import App from './modules/App.vue';
import Rating from './modules/Rating.vue';
import i18n from './lang/lang';
import store from './store';

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

export const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});

window['vue'] = app;
window.store = store;
window.messageType = 0;
window.bottomType = 0;
window.phoneNumber = 0;
window.session = 0;



