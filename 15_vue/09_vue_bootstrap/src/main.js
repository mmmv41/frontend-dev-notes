import { createApp } from 'vue'
import App from './App.vue'

import BootstrapVue3 from 'bootstrap-vue-3';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

/* npm install vue-router@next 해야함 */
// createApp(App).use(router).mount('#app')
const app = createApp(App);
// app.use(router);
app.use(BootstrapVue3);
app.mount('#app');
