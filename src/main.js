import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from "vue-resource"
import { apiHost } from './api'
import store from './store'
import '../src/components/style.css'

Vue.use(VueResource);

Vue.config.productionTip = false
Vue.http.options.root = apiHost;

Vue.http.interceptors.push(request => {
    var token = localStorage.getItem("appToken");
    if (token) {
        request.headers.set("Authorization", "Bearer " + token);
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')