import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from "vue-resource"
import { apiHost } from './api'
Vue.use(VueResource);

Vue.config.productionTip = false
Vue.http.options.root = apiHost;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')