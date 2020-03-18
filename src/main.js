import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import Axios from "axios";
import "./assets/scss/index.scss";

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
