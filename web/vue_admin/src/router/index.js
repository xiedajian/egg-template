import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wangEditor from '@/components/wangEditor'
import LoginPage from '@/pages/login'
import indexPage from '@/pages/index'
import bannerPage from '@/pages/banner'
import linksPage from '@/pages/links'
import newsPage from '@/pages/news'
import websetPage from '@/pages/webset'


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
			  {path:'news',name:'newsPage',component:newsPage},
			  {path:'webset',name:'websetPage',component:websetPage},
		  ]
	  },
	  {
		  path: '/demo',
		  component: HelloWorld
	  },
	  {
		  path: '/ue',
		  component: wangEditor
	  },
	  {
		  path: '**',   // 错误路由[写在最后一个]
		  redirect: '/index'   //重定向
	  }
  ]
})
