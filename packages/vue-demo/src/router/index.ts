import { createRouter, createWebHistory } from 'vue-router'
import AlertList from '@/views/AlertList.vue'
import InstrumentDemo from '../views/InstrumentDemo.vue'
import ResponsiveInstrumentDemo from '../views/ResponsiveInstrumentDemo.vue'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'instrument-demo',
      component: LandingView,
      meta: {
        title: 'Azimuths'
      }
    },
    {
      path: '/responsive',
      name: 'responsive-instrument-demo',
      component: ResponsiveInstrumentDemo,
      meta: {
        title: 'Azimuth Clock'
      }
    },
    {
      path: '/alert',
      name: 'alert',
      component: AlertList,
      meta: {
        title: 'Alerts'
      }
    }
  ]
})

export default router
