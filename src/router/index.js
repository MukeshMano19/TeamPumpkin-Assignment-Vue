import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import NormalUser from '../components/NormalUser'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/normal-user',
        name: 'NormalUser',
        component: NormalUser
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router