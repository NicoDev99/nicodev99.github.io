import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory , createRouter } from 'vue-router'

import App from './App.vue'
import MainView from './Main.vue'
import CGUView from './CGU.vue'

const routes = [
    { path: '/', component: MainView },
    { path: '', component: MainView },
    { name: "CGU", path: '/CGU', component: CGUView },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(to.name == "CGU") {
            return { top: 0 }
        }
      },
})


createApp(App).use(router).mount('#app')
