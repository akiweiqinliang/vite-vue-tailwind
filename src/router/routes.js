import {pageCode} from "@/enums/pageCode";
import CommonLayout from '@/layouts/CommonLayout.vue'
const Home = () => import('@/pages/Home.vue');
const About = () => import('@/pages/About.vue');
const Collection = () => import('@/pages/Collection.vue');
const Dashboard = () => import('@/pages/Dashboard.vue');
const Happy = () => import('@/pages/Happy.vue')
const Feedback = () => import('@/pages/Feedback.vue')
const Login = () => import('@/pages/auth/Login.vue')
const routes = [
    {
        path: '/',
        name: 'CommonLayout',
        component: CommonLayout,
        redirect: { name: pageCode.HOME },
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/about',
                name: 'About',
                component: About,
            },
            {
                path: '/collection',
                name: 'Collection',
                component: Collection,
                meta: { requiresAuth: true },
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard,
                meta: { requiresAuth: true },
            },
            {
                path: '/happy',
                name: 'Happy',
                component: Happy,
                meta: { requiresAuth: true },
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/:catchAll(.*)',
        name: 'Feedback',
        component: Feedback,
    }
]

export default routes;
