import Vue from 'vue'
import Router from 'vue-router'
import PayDetail from '@/components/pages/PayDetail'
import MyDialog from '@/components/common/MyDialog'
import CommonDialog from '../components/common/CommonDialog'
import selecrDemo from '../components/common/selecrDemo'
import Result from '../components/pages/Result'
import testupload from '@/components/pages/testupload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'testupload',
      component: testupload
    },
    {
      path: '/',
      name: 'payDetail',
      component: PayDetail
    },
    {
      path: '/demo',
      name: 'selecrDemo',
      component: selecrDemo
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
