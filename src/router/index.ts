import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: '/book'
    // component: Home
  },
  {
    path: "/book/:fillName",
    name: "Book",
    component: () => import("views/ebook/index.vue"),
    // children: [
    //   {
    //     path: ':fillname',
    //     component: () => import("views/ebook/index.vue")
    //   }
    // ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
