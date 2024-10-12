// src/router/index.ts (or index.js)
import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import ShowOldProject from '../views/ShowOldProject.vue';

const routes = [
 {
  path:'/',
  name:'Welcome',
  component:Welcome
 },
 {
  path:'/project',
  name:'Oldworks',
  component:ShowOldProject,
  children:[
    {
    path:'/project/:id',
    component:ShowOldProject
    }
  ]
 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
