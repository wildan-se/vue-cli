<template>
  <!-- Div utama yang membungkus komponen-komponen lainnya -->
  <div>
    <!-- Navbar dengan properti cart, cartQty, dan cartTotal serta event toggle-slide dan delete-item -->
    <navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @delete-item="deleteItem"></navbar>
    <!-- Price slider dengan properti sliderStatus dan maximum -->
    <price-slider
      :sliderStatus="sliderStatus"
      :maximum="maximum"></price-slider>
    <!-- Product list dengan properti maximum dan products serta event add-item -->
    <product-list
      :maximum="maximum"
      :products="products"
      @add-item="addItem"></product-list>
  </div>
</template>

<script>
// Mengimpor komponen-komponen yang dibutuhkan
import productList from "./productList.vue";
import priceSlider from "./priceSlider.vue";
import navbar from "./navbar.vue";

export default {
  // Nama komponen
  name: "productsComponent",
  // Properti yang diterima dari komponen induk
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
  ],
  // Komponen yang digunakan dalam komponen ini
  components: {
    navbar,
    productList,
    priceSlider,
  },
  // Metode yang digunakan dalam komponen ini
  methods: {
    // Metode untuk toggle slider, memancarkan event toggle ke komponen induk
    toggleSlider() {
      this.$emit("toggle");
    },
    // Metode untuk menambah item ke cart, memancarkan event add ke komponen induk dengan item sebagai parameter
    addItem(item) {
      this.$emit("add", item);
    },
    // Metode untuk menghapus item dari cart, memancarkan event delete ke komponen induk dengan index sebagai parameter
    deleteItem(index) {
      this.$emit("delete", index);
    },
  },
};
</script>
