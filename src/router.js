import { createRouter, createWebHistory } from 'vue-router';

import HomeRoute from './Views/HomeRoute.vue';
import CharacterRoute from './Views/CharactersRoute.vue';
import ComicRoute from './Views/ComicsRoute.vue';
import EventRoute from './Views/EventsRoute.vue';

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
    },
    {
        path: '/comics',
        name:'Comics',
        component: ComicRoute,
    },
    {
        path: '/events',
        name: 'Events',
        component: EventRoute
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router