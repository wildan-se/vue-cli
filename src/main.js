// Mengimpor Vue dari library Vue
import Vue from "vue";
// Mengimpor vueRouter untuk routing dalam aplikasi Vue
import vueRouter from "vue-router";
// Mengimpor komponen utama App
import App from "./App.vue";
// Mengimpor Bootstrap untuk styling
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// Mengimpor animate.css untuk animasi
import "animate.css/animate.css";
// Mengimpor library dan ikon dari FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
// Mengimpor komponen Products dan Checkout
import Products from "./components/products.vue";
import Checkout from "./components/checkout.vue";

// Menambahkan ikon yang diimpor ke library FontAwesome
library.add(faShoppingCart, faDollarSign);

// Menggunakan vueRouter dalam aplikasi Vue
Vue.use(vueRouter);
// Menonaktifkan tip produksi Vue (biasanya untuk debug)
Vue.config.productionTip = false;

// Membuat instance router dengan konfigurasi rute
const router = new vueRouter({
  routes: [
    {
      // Rute wildcard yang mencocokkan semua path
      path: "*",
      component: Products, // Menampilkan komponen Products
    },
    {
      // Rute untuk halaman checkout
      path: "/checkout",
      component: Checkout, // Menampilkan komponen Checkout
    },
  ],
});

// Membuat instance baru dari Vue
new Vue({
  // Menggunakan fungsi render untuk merender komponen App
  render: h => h(App),
  // Menyertakan instance router dalam instance Vue
  router,
  // Memasang instance Vue ke elemen dengan id "app"
}).$mount("#app");
