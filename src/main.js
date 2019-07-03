import Vue from "vue";
import App from "./App.vue";
import elementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";

import "./assets/css/login.css";

Vue.config.productionTip = false;

Vue.use(elementUI);

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else if (localStorage.getItem("token")) {
    next();
  } else {
    router.push("/home");
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
