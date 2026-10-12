import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue';

export const menuRoutes: RouteRecordRaw[] = [
  { path: 'dashboard', component: () => import('../views/Dashboard.vue'), meta: { title: '经营概览' } },
  { path: 'leads', component: () => import('../views/Leads.vue'), meta: { title: '招生线索' } },
  { path: 'students', component: () => import('../views/Students.vue'), meta: { title: '学员管理' } },
  { path: 'schedule', component: () => import('../views/Schedule.vue'), meta: { title: '班级排课' } },
  { path: 'orders', component: () => import('../views/Orders.vue'), meta: { title: '收费报名' } },
  { path: 'campuses', component: () => import('../views/Campuses.vue'), meta: { title: '多校区' } },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', component: BasicLayout, redirect: '/dashboard', children: menuRoutes }],
});
