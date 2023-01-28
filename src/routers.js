import Signup from "./components/Signup.vue"
import HomePage from "./components/HomePage.vue"
import LoginPage from "./components/LoginPage.vue"
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
    },
    {
        name: "LoginPage",
        component: LoginPage,
        path: '/loginpage'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;