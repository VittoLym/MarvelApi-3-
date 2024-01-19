import { createRouter, createWebHistory } from 'vue-router';

import HomeRoute from './Views/HomeRoute.vue';
import CharacterRoute from './Views/CharactersRoute.vue';
import ComicRoute from './Views/ComicsRoute.vue';
import EventRoute from './Views/EventsRoute.vue';
import SeriesRoute from './Views/SeriesRoute.vue'
import SearchByIdRoute from './Views/SearchByIdRoute.vue'

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
    },
    {
        path: '/series',
        name: 'Series',
        component: SeriesRoute
    },
    {
        path: '/characters/:title/:id',
        name: 'Characters-id',
        component: SearchByIdRoute
    },
    {
        path: '/comics/:title/:id',
        name: 'Comics-id',
        component: SearchByIdRoute
    },
    {
        path: '/events/:title/:id',
        name: 'Events-id',
        component: SearchByIdRoute
    },
    {
        path: '/series/:title/:id',
        name: 'Series-id',
        component: SearchByIdRoute
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router