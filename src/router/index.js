import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/homePage/main/Main.vue'
import Course from '../views/course/Course.vue'
import RecordVideo from '../views/recordVideo/RecordVideo.vue'
import Recovery from '../views/recovery/Recovery.vue'
import AllNotice from '../views/homePage/allNotice/AllNotice.vue'
import Organization from '../views/homePage/organization/Organization.vue'
import AccountInfomation from '../views/homePage/accountInfomation/AccountInfomation.vue'
import CourseDetail from '../views/course/courseDetail/CourseDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/main',
    children: [
      { path: '/main', component: Main },
      { path: '/course', component: Course },
      { path: '/recordVideo', component:  RecordVideo },
      { path: '/recovery', component:  Recovery },
      { path: '/course/courseDetail', component:  CourseDetail },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/allNotice',
    // path: '/',
    name: 'AllNotice',
    component: AllNotice,
  },
  {
    path: '/organization',
    // path: '/',
    name: 'Organization',
    component: Organization,
  },
  {
    // path: '/accountInfomation',
    path: '/',
    name: 'AccountInfomation',
    component: AccountInfomation,
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
