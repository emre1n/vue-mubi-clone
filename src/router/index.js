import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NowShowingView from '@/views/NowShowingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/now-showing',
      name: 'NowShowing',
      component: NowShowingView,
    },
  ],
});

export default router;
