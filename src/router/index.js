import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('../components/Login'),
        beforeEnter: (to, from, next) => {
            let user = JSON.parse(localStorage.getItem("appUser"));
            if (user && user.type == "NU") {
                next("/normal-user");
                return;
            }
            if (user && user.type == "C") {
                next("/contributor");
                return;
            }
            next()
        }
    },
    {
        path: '/normal-user',
        name: 'NormalUser',
        component: () =>
            import ('../components/NormalUser'),
    },
    {
        path: '/contributor',
        name: 'Contributor',
        component: () =>
            import ('../components/Contributor'),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router