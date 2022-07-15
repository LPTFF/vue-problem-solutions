import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [//添加路由对象
    {
        path: '/TestNexttick',
        name: 'TestNexttick',
        component: () => import('../views/TestNexttick.vue')
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../views/demo.vue')
    },
    {
        path: '/question1',
        name: 'question1',
        component: () => import('../views/question/question1.vue')
    }
];

const router = new VueRouter({
    mode: 'history',//采用哪种路由模式,默认是history,可改为hash
    routes
});

export default router;