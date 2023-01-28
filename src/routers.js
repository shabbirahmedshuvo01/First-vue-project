import Signup from "./components/Signup.vue"
import HomePage from "./components/HomePage.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: '/'
    },
    {
        name: "Signup",
        component: Signup,
        path: '/signup'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;