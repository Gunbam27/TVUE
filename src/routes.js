import { createWebHistory, createRouter } from "vue-router";
import Main from '@/components/Main.vue'
import List from '@/components/List.vue'
const routes = [
  {
    path: "/",
    name: 'Home',
    component: List,
  },
  // {
  //   path: "/details",
  //   name: 'Details',
  //   component: Details,
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 