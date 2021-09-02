import { createRouter, createWebHistory } from "vue-router";
import PageHome from '@/views/PageHome.vue';
import PageNews from '@/views/PageNews.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/news',
    name: 'News',
    component: PageNews
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
