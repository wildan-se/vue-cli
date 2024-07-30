import Vue from "vue";
import vueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Products from "./components/products.vue";
import Checkout from "./components/checkout.vue";

library.add(faShoppingCart, faDollarSign);

Vue.use(vueRouter);
Vue.config.productionTip = false;

const router = new vueRouter({
  routes: [
    {
      path: "*",
      component: Products,
    },
    {
      path: "/checkout",
      component: Checkout,
    },
  ],
});

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
