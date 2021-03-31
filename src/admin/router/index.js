import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../../store';

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'admin',
  component: () => import('../views/Home.vue')
},{
  path: '/source-list',
  name: 'source',
  component: () => import('../views/SourceList.vue')
}, {
  path: '/source',
  name: 'source',
  component: () => import('../views/Source.vue')
}, {
  path: '/user-list',
  name: 'userList',
  component: () => import('../views/UserList.vue')
},]

const router = new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
router.beforeEach((_to, _from, next) => {
  store.dispatch('user/getUserInfo', { userName: '长明山小仙女' })
  next()
})
export default router