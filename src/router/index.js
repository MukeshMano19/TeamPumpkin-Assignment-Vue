import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import NormalUser from '../components/NormalUser'
import Contributor from '../components/Contributor'

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
    },
    {
        path: '/contributor',
        name: 'Contributor',
        component: Contributor
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router