import { createRouter, createWebHistory } from "vue-router";
import BlogMainView from "../views/BlogMainView.vue";
import HomeView from "../views/HomeView.vue";
import SingleBlogView from "../views/SingleBlogView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "BlogLoop",
      component: BlogMainView,
    },
    {
      path: "/blog/:id",
      name: "SingleBlog",
      component: (): Promise<any> => import("../views/SingleBlogView.vue"),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ],
});

export default router;
