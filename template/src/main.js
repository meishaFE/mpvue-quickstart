{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// mpvue has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import _ from 'lodash';
import * as $utils from '@/utils/index';
import { fly as $http } from '@/utils/fetch';
import { ENV, API } from '@/config/api';

Vue.prototype._ = _;
Vue.prototype.$utils = $utils;
Vue.prototype.$http = $http;
Vue.prototype.$ENV = ENV;
Vue.prototype.$API = API;

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
  store,
  ...App
});
app.$mount();
