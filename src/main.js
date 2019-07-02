import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import elementUI from "element-ui";
Vue.use(elementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
