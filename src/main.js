import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from 'vue-gtag';
// import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import VueJsonLD from 'vue-jsonld'

import { BButton, BContainer, BCol, BRow, BCard, BTooltip } from 'bootstrap-vue';

Vue.component('b-container', BContainer);
Vue.component('b-button', BButton);
Vue.component('b-tooltip', BTooltip);
Vue.component('b-col', BCol);
Vue.component('b-row', BRow);
Vue.component('b-card', BCard);

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

// eslint-disable-next-line
delete L.Icon.Default.prototype._getIconUrl;
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["throughput-widget"];

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      name: 'root'
    },
    {
      path: '/:dsid/',
      component: App,
      props: true
    },
    {
      path: '/datasets/:dsid/',
      alias: '/:dsid',
      component: App,
      props: true
    }
  ]
});

Vue.use(VueJsonLD)
Vue.use(VueRouter);
Vue.use(VueGtag, {
  config: { id: 'G-3XDNWKENJ4' }
}, router);

new Vue({
  el: '#app',
  router: router,
  render: h => h('router-view')
});
