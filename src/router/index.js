import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main/Main.vue'
import Course from '../views/Course/Course.vue'
import RecordVideo from '../views/RecordVideo/RecordVideo.vue'
import Recovery from '../views/Recovery/Recovery.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/main',
    children: [
      { path: '/main', component: Main },
      { path: '/course', component: Course },
      { path: '/recordVideo', component:  RecordVideo },
      { path: '/recovery', component:  Recovery },
      // { path: '/rights', component: RightsList },
      // { path: '/roles', component: RolesList },
      // { path: '/categories', component: Categories },
      // { path: '/params', component: Params },
      // { path: '/goods', component: List },
      // { path: '/goods/add', component: AddGoods },
      // { path: '/orders', component: Order },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
