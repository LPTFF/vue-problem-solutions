import Vue from 'vue';
import router from './router';//新增
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,//新增
  render: h => h(App),
}).$mount('#app');
