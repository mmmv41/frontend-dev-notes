import {createRouter, createWebHistory} from 'vue-router';

import HomeView from '@/views/01_router/HomeView.vue';
import RootRouter from '@/views/02_nestedRoute/RootRouter.vue';
// import NestedHome from '@/views/02_nestedRoute/NestedHome.vue';
import NestedView from '@/views/02_nestedRoute/NestedView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/nested',
            component: RootRouter,
            /* 중첩 라우팅에서 하위 컴포넌트를 위한 라우팅에서는 path에 /를 붙이지 않아야함. */
            children: [
                {
                    path: 'home',
                    // component: NestedHome 

                    /* 
                        lazy 
                    */
                    component: () => import('@/views/02_nestedRoute/NestedHome.vue'),
                },
                {
                    path: 'view',
                    component: NestedView
                }
            ]
        }
    ]
});

export default router;