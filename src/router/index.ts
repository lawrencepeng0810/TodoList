import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import TodoView from '@/views/TodoView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,     // 初始的 layout 版面
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'AboutView',
        component: AboutView,
      },
      {
        path: 'todo',
        name: 'TodoView',
        component: TodoView,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
