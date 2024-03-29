/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**para las graficas sacar de Quick Start https://vue2-leaflet.netlify.app/quickstart/#nuxt */
/**USAGE In your entry point: ie: app.js o main.js */
//api clima
//
import 'leaflet/dist/leaflet.css';
/**Marker Icons are missing */
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.component('usuario-component', require('./components/UsuarioComponent.vue').default);
Vue.component('estacion-component', require('./components/EstacionComponent.vue').default);
Vue.component('detalle-component', require('./components/DetalleEstacionComponent.vue').default);
Vue.component('principal-component', require('./components/PrincipalComponent.vue').default);
Vue.component('noticias-component', require('./components/NoticiasComponent.vue').default);
Vue.component('detallenoticias-component', require('./components/DetalleNoticiasComponent.vue').default);
Vue.component('poblacion-component', require('./components/PoblacionComponent.vue').default);
Vue.component('escuela-component', require('./components/EscuelaComponent.vue').default);
Vue.component('sensor-component', require('./components/SensorComponent.vue').default);

import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LControlZoom } from 'vue2-leaflet';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-tooltip', LTooltip);
Vue.component('l-control-zoom', LControlZoom);
//paginacion
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)
//select
import vSelect from 'vue-select';

Vue.component('v-select', vSelect);

//fecha
import moment from 'moment';
require('moment/locale/es');
moment.locale('es');
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(value).fromNow()
    }
});
//
import store from './store';
const app = new Vue({
    store,
    el: '#app',
});
