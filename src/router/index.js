import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import users from '../components/user/users.vue'
import Booklist from '../components/Booklist.vue'
import Reset from '../components/user/reset.vue'
import Detail from '../components/detail.vue'
//import { from } from 'core-js/core/array'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path:'/welcome', component: Welcome
      },
      {
        path:'/userlist',
        component:users
      },
      {
        path:'/booklist',
        component:Booklist
      },
      {
        path:'/reset',
        component:Reset
      },
      {
        path:'/detail',
        component:Detail
      }
      
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) => {
  //to要访问的路径
  //from代表从哪个路径跳转而来
  //next是一个函数，表示放行 next()放行 , next('/login')强制跳转
  if(to.path ==='/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')

  if(!tokenStr) return next('/login')
  next()
})

export default router
