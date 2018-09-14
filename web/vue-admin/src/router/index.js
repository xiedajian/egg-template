import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/pages/login'
import indexPage from '@/pages/index'
import bannerPage from '@/pages/banner'
import linksPage from '@/pages/links'


Vue.use(Router)

export default new Router({
  routes: [
	  {
		  path: '/',
		  redirect: '/index'
	  },
	  {
		  path: '/login',
		  name: 'LoginPage',
		  component: LoginPage
	  },
	  {
		  path: '/index',
		  name: 'indexPage',
		  component: indexPage,
		  children:[
			  // {path:'',name:'searchPage',component:searchPage},
			  {path:'banner',name:'bannerPage',component:bannerPage},
			  {path:'links',name:'linksPage',component:linksPage},
		  ]
	  },
	  {
		  path: '/demo',
		  component: HelloWorld
	  },
	  {
		  path: '**',   // 错误路由[写在最后一个]
		  redirect: '/index'   //重定向
	  }
  ]
})
