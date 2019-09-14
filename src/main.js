import Vue from 'vue'
import '@/plugins/vuetify'
import App from '@/components/App'
import router from '@/router'
import store from '@/store/index.js';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@/registerServiceWorker";
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

