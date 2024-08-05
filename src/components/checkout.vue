<template>
  <!-- Bagian utama template Vue -->
  <div class="pt-2 mt-1">
    <!-- Judul halaman checkout -->
    <h1>Checkout</h1>
    <!-- Tabel yang hanya ditampilkan jika ada item di dalam keranjang -->
    <table class="table table-hover" v-if="cart.length">
      <!-- Bagian caption untuk menampilkan total harga -->
      <caption class="text-right h3">
        <b>Total:</b>
        <!-- Komponen harga yang menerima nilai total dari keranjang -->
        <price
          class="d-block text-success font-weight-light"
          :value="Number(cartTotal)"></price>
      </caption>
      <!-- Bagian header dari tabel -->
      <thead>
        <tr>
          <!-- Kolom untuk tombol aksi -->
          <th scope="col"></th>
          <!-- Kolom nama item -->
          <th scope="col">Item</th>
          <!-- Kolom jumlah item -->
          <th scope="col" class="text-center">Qty</th>
          <!-- Kolom harga per item -->
          <th scope="col" class="text-right">Price</th>
          <!-- Kolom subtotal -->
          <th scope="col" class="text-right">Sub-Total</th>
        </tr>
      </thead>
      <!-- Bagian body dari tabel -->
      <tbody>
        <!-- Looping melalui setiap item dalam keranjang -->
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <!-- Kolom untuk tombol tambah dan hapus item -->
          <td class="text-center">
            <div class="btn-group">
              <!-- Tombol untuk menambah jumlah item -->
              <button @click="$emit('add', item.product)" class="btn btn-info">
                +
              </button>
              <!-- Tombol untuk mengurangi jumlah item -->
              <button
                @click="$emit('delete', index)"
                class="btn btn-outline-info">
                -
              </button>
            </div>
          </td>
          <!-- Kolom nama item -->
          <th scope="row">{{ item.product.name }}</th>
          <!-- Kolom jumlah item -->
          <td class="text-center">{{ item.qty }}</td>
          <!-- Kolom harga per item -->
          <td class="text-right">
            {{ Number(item.product.price).toFixed(2) }}
          </td>
          <!-- Kolom subtotal (harga per item dikalikan jumlah item) -->
          <td class="text-right">
            {{ Number(item.product.price * item.qty).toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Link untuk kembali ke halaman toko -->
    <router-link class="btn btn-sm btn-outline-info text-dark" to="/"
      >Back to Shop</router-link
    >
  </div>
</template>

<script>
// Mengimpor komponen price dari file price.vue
import price from "./price.vue";

export default {
  // Nama komponen
  name: "checkoutComponent",
  // Properti yang diterima dari komponen induk
  props: ["cart", "cartTotal"],
  // Komponen yang digunakan dalam komponen ini
  components: {
    price,
  },
};
</script>
