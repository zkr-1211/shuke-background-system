import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
const Home = () => import(/* webpackChunkName: 'Home' */ '../views/Home.vue')
const AllNotice = () => import(/* webpackChunkName: 'Home' */ '../views/homePage/allNotice/AllNotice.vue')
const Organization = () => import(/* webpackChunkName: 'Home' */ '../views/homePage/organization/Organization.vue')
const AccountInfomation = () => import(/* webpackChunkName: 'Home' */ '../views/homePage/accountInfomation/AccountInfomation.vue')
const MyTeam = () => import(/* webpackChunkName: 'Home' */ '../views/homePage/myTeam/MyTeam.vue')
const MyClass = () => import(/* webpackChunkName: 'Home' */ '../views/homePage/myClass/MyClass.vue')
const Main = () => import(/* webpackChunkName: 'Home' */ '../views/homePage/main/Main.vue')
const StudentInfo = () => import(/* webpackChunkName: 'Home' */ '../views/homePage/studentInfo/StudentInfo.vue')
const AddTeam = () => import(/* webpackChunkName: 'Home' */ '../views/homePage/addTeam/AddTeam.vue')
// 录播资源
const RecordVideo = () => import(/* webpackChunkName: 'recordVideo' */ '../views/recordVideo/RecordVideo.vue')
// 课程回收站
const Recovery = () => import(/* webpackChunkName: 'recovery' */ '../views/recovery/Recovery.vue')
// 课程
const Course = () => import(/* webpackChunkName: 'Course' */ '../views/course/Course.vue')
const CourseDetail = () => import(/* webpackChunkName: 'Course' */ '../views/course/courseDetail/CourseDetail.vue')
const ClassDetail = () => import(/* webpackChunkName: 'Course' */ '../views/course/classDetail/ClassDetail.vue')
const Work = () => import(/* webpackChunkName: 'Course' */ '../views/course/work/Work.vue')
const WorkDetail = () => import(/* webpackChunkName: 'Course' */ '../views/course/workDetail/WorkDetail.vue')
const TaskSituation = () => import(/* webpackChunkName: 'Course' */  '../views/course/taskSituation/TaskSituation.vue')
const GoupingSituation = () => import(/* webpackChunkName: 'Course' */ '../views/course/goupingSituation/GoupingSituation.vue')
const Setting = () => import(/* webpackChunkName: 'Course' */ '../views/course/setting/Setting.vue')
const AllEvaluation = () => import(/* webpackChunkName: 'Course' */ '../views/course/allEvaluation/AllEvaluation.vue')
const Ladders = () => import(/* webpackChunkName: 'Course' */ '../views/course/ladders/Ladders.vue')
const ChapterIssue = () => import(/* webpackChunkName: 'Course' */ '../views/course/chapterIssue/ChapterIssue.vue')
const LaddersTemplateDesign = () => import(/* webpackChunkName: 'Course' */ '../views/course/laddersTemplateDesign/LaddersTemplateDesign.vue')
const LaddersTaskDesign = () => import(/* webpackChunkName: 'Course' */ '../views/course/laddersTaskDesign/LaddersTaskDesign.vue')
const WorkDesign = () => import(/* webpackChunkName: 'Course' */ '../views/course/workDesign/WorkDesign.vue')
const EditProblem = () => import(/* webpackChunkName: 'Course' */ '../views/course/editProblem/EditProblem.vue')
const ProblemDetail = () => import(/* webpackChunkName: 'Course' */ '../views/course/problemDetail/ProblemDetail.vue')
const UploadResource = () => import(/* webpackChunkName: 'Course' */ '../views/course/uploadResource/UploadResource.vue')
const UploadResourceOther = () => import(/* webpackChunkName: 'Course' */ '../views/course/uploadResourceOther/UploadResourceOther.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/course/WorkDesign',
    children: [
      {
        path: '/main',
        component: Main,

        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/course',
        component: Course
      },
      {
        path: '/recordVideo',
        component: RecordVideo
      },
      {
        path: '/recovery',
        component: Recovery
      },
      {
        path: '/course/courseDetail',
        component: CourseDetail
      },
      {
        path: '/homePage/myClass',
        component: MyClass
      },
      {
        path: '/homePage/myTeam',
        component: MyTeam
      },
      {
        path: '/course/classDetail',
        component: ClassDetail
      },
      {
        path: '/homePage/studentInfo',
        component: StudentInfo
      },
      {
        path: '/course/work',
        component: Work
      },
      {
        path: '/course/workDetail',
        component: WorkDetail
      },
      {
        path: '/course/taskSituation',
        component: TaskSituation
      },
      {
        path: '/course/goupingSituation',
        component: GoupingSituation
      },
      {
        path: '/course/Setting',
        component: Setting
      },
      {
        path: '/course/all_evaluation',
        component: AllEvaluation
      },
      {
        path: '/course/ladders',
        component: Ladders
      },
      {
        path: '/course/chapterIssue',
        component: ChapterIssue
      },
      {
        path: '/course/laddersTemplateDesign',
        component: LaddersTemplateDesign
      },
      {
        path: '/course/laddersTaskDesign',
        component: LaddersTaskDesign
      },
      {
        path: '/course/workDesign',
        component: WorkDesign
      },
      {
        path: '/course/editProblem',
        component: EditProblem
      },
      {
        path: '/course/problemDetail',
        component: ProblemDetail
      },
      {
        path: '/course/uploadResource',
        component: UploadResource
      },
      {
        path: '/course/uploadResourceOther',
        component: UploadResourceOther
      }

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
  },
  {
    // path: '/accountInfomation',
    path: '/addTeam',
    name: 'addTeam',
    component: AddTeam,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
import { setCookie, getCookie } from '@/utils/cookieUtil'
// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log("Vue", Vue)
  setCookie('token', 123)
  let token = getCookie('token')
  // console.log("totototototo", to.path,to.fullPath)
  // const token = localStorage.getItem('token')
  //如果是登录页面路径，就直接next()
  if (token) {
    next();
  } else {
    if (to.path == '/main') {
      next();
    } else { //不然就跳转到登录；
      next({
        path: '/main',
        // query: {
        //   redirect: to.fullPath
        // }
      })
    }
  }
});
export default router
