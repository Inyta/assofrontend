import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '../views/UserLogin.vue'
import Register from "../views/Register";
import UserInfo from "../views/UserInfo";
import ResetPwd from "../views/ResetPwd";
import ActivityShow from "../views/EventShow";
import ActivityApplication from "../views/EventApplication";
import AssociationShow from "../views/AssociationShow";
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'userLogin',
        component: UserLogin
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/resetPwd',
      name: 'resetPwd',
      component: ResetPwd
    },
    {
      path: '/userLogin',
      name: 'userLogin',
      component: UserLogin
    },
    {
      path: '/activityShow',
      name: 'activityShow',
      component: ActivityShow
    },
    {
      path: '/activityApplication',
      name: 'activityApplication',
      component: ActivityApplication
    },{
      path: '/associationShow',
      name: 'associationShow',
      component: AssociationShow
    }
  ]
})
