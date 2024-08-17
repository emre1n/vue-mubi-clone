import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NowShowingView from '@/views/NowShowingView.vue';
import CollectionView from '@/views/CollectionView.vue';
import FilmView from '@/views/FilmView.vue';

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
    {
      path: '/collections/:slug',
      name: 'collection',
      component: CollectionView,
    },
    {
      path: '/films/:slug',
      name: 'film',
      component: FilmView,
    },
  ],
});

export default router;
