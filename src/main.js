import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from "vue-resource"
import { apiHost } from './api'
import store from './store'

Vue.use(VueResource);

Vue.config.productionTip = false
Vue.http.options.root = apiHost;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')