import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

// // Onsen UI Styling and Icons
// require('onsenui/css-components-src/src/onsen-css-components.css');
// require('onsenui/css/onsenui.css');

require('onsenui/css/onsenui.css');
require('./assets/onsen-css-components.css')
require('./assets/theme.css')

import App from './components/Navigator.vue';

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template:'<app></app>',
  components: { App }
});

