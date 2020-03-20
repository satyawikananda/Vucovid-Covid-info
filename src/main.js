import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import Axios from "axios";
import "./assets/scss/index.scss";
import moment from "moment/src/moment";

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.filter("lastUpdate", function(value) {
  if (value) {
    return moment(value).format("DD/MM/YYYY HH:mm:ss ZZ");
  }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
