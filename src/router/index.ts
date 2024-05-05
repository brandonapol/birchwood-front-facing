import { createRouter, createWebHistory } from 'vue-router'
import BlogMainView from '../views/BlogMainView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'BlogLoop',
      component: BlogMainView
    },
    {
      path: '/blog/:title',
      name: 'SingleBlog',
      component: (): Promise<any> => import('@/views/SingleBlogView.vue'),
      props: true 
    }
  ]
})

export default router
