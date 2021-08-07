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
import MyTeam from '../views/homePage/myTeam/MyTeam.vue'
import MyClass from '../views/homePage/myClass/MyClass.vue'
import ClassDetail from '../views/course/classDetail/ClassDetail.vue'
import StudentInfo from '../views/homePage/studentInfo/StudentInfo.vue'
import Work from '../views/course/work/Work.vue'
import WorkDetail from '../views/course/workDetail/WorkDetail.vue'
import TaskSituation from '../views/course/taskSituation/TaskSituation.vue'
import GoupingSituation from '../views/course/goupingSituation/GoupingSituation.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/course/goupingSituation',
    children: [
      { path: '/main', component: Main },
      { path: '/course', component: Course },
      { path: '/recordVideo', component:  RecordVideo },
      { path: '/recovery', component:  Recovery },
      { path: '/course/courseDetail', component:  CourseDetail },
      { path: '/homePage/myClass', component:  MyClass },
      { path: '/homePage/myTeam', component:  MyTeam },
      { path: '/course/classDetail', component:  ClassDetail },
      { path: '/homePage/studentInfo', component:  StudentInfo },
      { path: '/course/work', component:  Work },
      { path: '/course/workDetail', component:  WorkDetail },
      { path: '/course/taskSituation', component:  TaskSituation },
      { path: '/course/goupingSituation', component:  GoupingSituation },
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
    path: '/accountInfomation',
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
