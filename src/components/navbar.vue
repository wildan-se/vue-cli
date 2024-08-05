<template>
  <!-- Bagian template Vue -->
  <nav class="navbar navbar-light fixed-top">
    <!-- Judul toko -->
    <h1>IDShop</h1>
    <!-- Bagian kanan navbar, di mana elemen-elemen ini akan diratakan ke kanan -->
    <div class="navbar-text ml-auto d-flex">
      <!-- Tombol untuk mengaktifkan/mematikan slide -->
      <button
        class="btn btn-md btn-outline-success"
        @click="$emit('toggle-slide')">
        <!-- Ikon menggunakan FontAwesome -->
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <!-- Dropdown keranjang, hanya ditampilkan jika ada item dalam keranjang -->
      <div class="dropdown ml-3" v-if="cart.length > 0">
        <!-- Tombol untuk membuka dropdown -->
        <button
          class="btn btn-success btn-md dropdown-toggle"
          id="dropdownCart"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <!-- Badge yang menunjukkan jumlah item dalam keranjang -->
          <span class="badge badge-pill badge-light">{{ cartQty }}</span>
          <!-- Ikon keranjang belanja -->
          <i class="fas fa-shopping-cart mx-2"></i>
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <!-- Komponen harga yang menampilkan total harga keranjang -->
          <price :value="Number(cartTotal)"></price>
        </button>
        <!-- Konten dropdown yang muncul saat tombol diklik -->
        <div
          class="dropdown-menu dropdown-menu-right mt-2"
          aria-labelledby="dropdownCart">
          <!-- Looping melalui setiap item dalam keranjang -->
          <div v-for="(item, index) in cart" :key="index">
            <!-- Item dalam dropdown -->
            <div class="dropdown-item-text text-nowrap text-left">
              <!-- Badge yang menunjukkan jumlah item -->
              <span class="badge badge-pill badge-warning align-text-top m-1">
                {{ item.qty }}
              </span>
              <!-- Nama produk -->
              {{ item.product.name }}
              <!-- Harga subtotal dari produk -->
              <b>{{ (item.qty * item.product.price) | currencyFormat }}</b>
              <!-- Link untuk menghapus item dari keranjang -->
              <a
                href="#"
                class="badge badge-danger text-white ml-2"
                @click.stop="$emit('delete-item', index)"
                >-</a
              >
            </div>
          </div>
          <!-- Link untuk menuju halaman checkout -->
          <router-link
            class="btn btn-sm btn-outline-info text-dark float-right mr-2"
            to="/checkout"
            >Checkout</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// Mengimpor komponen Price dan FontAwesomeIcon
import Price from "./price.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  // Nama komponen
  name: "navbarComponent",
  // Properti yang diterima dari komponen induk
  props: ["cart", "cartQty", "cartTotal"],
  // Komponen yang digunakan dalam komponen ini
  components: {
    Price,
    FontAwesomeIcon,
  },
  // Filter untuk format mata uang
  filters: {
    currencyFormat: function (value) {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>
