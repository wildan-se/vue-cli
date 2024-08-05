<template>
  <!-- Transition group untuk animasi elemen yang masuk dan keluar -->
  <transition-group
    name="fade"
    tag="div"
    @beforeEnter="before"
    @enter="enter"
    @leave="leave">
    <!-- Elemen yang akan diulang berdasarkan item dalam showItems -->
    <div
      class="row d-flex pt-5 align-items-center"
      v-for="(item, index) in showItems"
      :key="item.id"
      :data-index="index">
      <!-- Kolom untuk tombol tambah item -->
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$emit('add-item', item)">+</button>
      </div>
      <!-- Kolom untuk gambar produk -->
      <div class="col-sm-4" loading="lazy">
        <img class="img-fluid" :src="item.image" :alt="item.name" />
      </div>
      <!-- Kolom untuk detail produk -->
      <div class="col">
        <!-- Nama produk -->
        <h2 class="text-info">{{ item.name }}</h2>
        <!-- Deskripsi produk -->
        <p class="mb-0">{{ item.description }}</p>
        <!-- Harga produk -->
        <div class="h5 float-right">
          <price :value="Number(item.price)"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
// Mengimpor komponen price
import price from "./price.vue";

export default {
  // Nama komponen
  name: "product-list",
  // Mendaftarkan komponen price
  components: {
    price,
  },
  // Properti yang diterima dari komponen induk
  props: ["products", "maximum"],
  // Properti terkomputasi
  computed: {
    // Memfilter produk berdasarkan harga maksimum
    showItems() {
      return this.products.filter(item => item.price <= this.maximum);
    },
  },
  // Metode untuk animasi elemen
  methods: {
    // Metode yang dipanggil sebelum elemen masuk
    before(el) {
      el.className = "d-none";
    },
    // Metode yang dipanggil saat elemen masuk
    enter(el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    // Metode yang dipanggil saat elemen keluar
    leave(el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
  },
};
</script>
