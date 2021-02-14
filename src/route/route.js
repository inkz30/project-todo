import ViewOne from '../views/view-one.vue'
import ViewTwo from '../views/view-two.vue'

const routes = [
  { path: '/', component: ViewOne },
  { path: '/viewone', component: ViewOne },
  { path: '/viewtwo', component: ViewTwo }
]

export default routes