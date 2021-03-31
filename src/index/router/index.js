import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../../store';

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
},{
  path: '/timeline',
  name: 'timeline',
  component: () => import( /* webpackChunkName: "about" */ '../views/Timeline.vue')
},{
  path: '/source',
  name: 'source',
  component: () => import( /* webpackChunkName: "about" */ '../views/Source.vue')
},{
  path: '/post',
  name: 'post',
  component: () => import( /* webpackChunkName: "about" */ '../views/Post.vue')
},{
  path: '/source-detail',
  name: 'sourceDetail',
  component: () => import( /* webpackChunkName: "about" */ '../views/SourceDetail.vue')
},{
  path: '/post-detail',
  name: 'postDetail',
  component: () => import( /* webpackChunkName: "about" */ '../views/PostDetail.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((_to, _from, next) => {
  store.dispatch('user/getUserInfo', { userName: 'yuki' })
  next()
})
export default router