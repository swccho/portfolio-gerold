import {createRouter, createWebHistory} from "vue-router";

import MainLayout from "../layout/mainLayout.vue";
import HomePage from "../Pages/homePage.vue";

const routes = [
    {
        path: '/', name: 'MainLayout', component: MainLayout,
        children: [
            {path: '', name: 'HomePage', component: HomePage},
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;