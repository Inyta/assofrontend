import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '../views/UserLogin.vue'
import Index from "../views/Index";
import Register from "../views/Register";
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //     path: '/',
    //     name: 'UserLogin',
    //     component: UserLogin
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
