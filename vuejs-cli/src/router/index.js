import Vue from 'vue'
import Router from 'vue-router'
import FicheProduit from '@/components/FicheProduit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FicheProduit',
      component: FicheProduit
    }
  ]
})
