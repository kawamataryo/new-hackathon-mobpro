import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/views/Top'
import Signin from '@/components/Signin'
import Signout from '@/views/Signout'
import Wantedly from '@/views/Wantedly'
import Task from '@/views/Task'

import firebase from 'firebase'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'index',
        component: Top
    },
    {
        path: '/Signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/Signout',
        name: 'signout',
        component: Signout,
        meta: { requiresAuth: true }
    },
    {
        path: '/wantedly',
        name: 'wantedly',
        component: Wantedly,
    },
    {
        path: '/task',
        name: 'task',
        component: Task,
    },
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                next()
            } else {
                next({
                    path: '/signin',
                    query: { redirect: to.fullPath }
                })
            }
        })
    } else {
        next()
    }
})

export default router;
