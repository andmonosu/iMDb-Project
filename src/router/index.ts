import Home from "@/components/Home.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Catalog from "@/components/Catalog.vue";
import DailyFilm from "@/components/DailyFilm.vue";
import LikedFilms from "@/components/LikedFilms.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/daily',
        name: 'Daily Films',
        component: DailyFilm
    },
    {
        path: '/liked',
        name: 'Liked Films',
        component: LikedFilms
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router