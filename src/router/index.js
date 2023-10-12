import { createRouter, createWebHistory } from 'vue-router';
import routes from "@/router/routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        if (sessionStorage.getItem('user')){
            next()
        }
    }else {
        next()
    }
})
export default router;
