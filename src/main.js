import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import "leaflet/dist/leaflet.css";

// eslint-disable-next-line
delete L.Icon.Default.prototype._getIconUrl
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      name: 'root'
    },
    {
      path: "/:dsid/",
      component: App,
      props: true
    }
  ]
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  render: h => h('router-view')
})
