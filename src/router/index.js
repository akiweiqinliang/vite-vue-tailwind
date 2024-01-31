import { createRouter, createWebHistory } from 'vue-router';
import routes from "@/router/routes";
import {ElMessage} from "element-plus";

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        if (sessionStorage.getItem('user')){
            next()
        }else {
            ElMessage.warning('请先登录')
        }
    }else {
        next()
    }
})
export default router;
