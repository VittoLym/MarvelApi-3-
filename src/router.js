import { createRouter, createWebHistory } from 'vue-router';

import HomeRoute from './Views/HomeRoute.vue'
import CharacterRoute from './Views/CharactersRoute.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: HomeRoute,
    },
    {
        path:'/characters',
        name:'Characters',
        component: CharacterRoute,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router