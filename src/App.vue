<template>
  <!-- Div utama dengan id "app" dan kelas "container" -->
  <div id="app" class="container">
    <!-- Router view untuk menampilkan komponen sesuai dengan rute saat ini -->
    <!-- Properti yang diteruskan ke komponen rute yang sedang aktif -->
    <router-view
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      :maximum.sync="maximum"
      :products="products"
      :sliderStatus="style.sliderStatus"
      @toggle="toggleSliderStatus"
      @add="addItem"
      @delete="deleteItem"></router-view>
  </div>
</template>

<script>
export default {
  // Nama komponen
  name: "app",
  // Data lokal komponen
  data() {
    return {
      // Nilai maksimum untuk slider
      maximum: 50,
      // Array untuk menyimpan produk
      products: [],
      // Array untuk menyimpan item dalam keranjang
      cart: [],
      // Objek untuk menyimpan status gaya
      style: {
        sliderStatus: false, // Status slider (terbuka/tutup)
      },
    };
  },
  // Komponen yang digunakan dalam komponen ini (tidak ada dalam hal ini)
  components: {},
  // Fungsi yang dipanggil setelah komponen dimuat
  mounted() {
    // Fetch data produk dari API
    fetch("https://hplussport.com/api/products/order/price")
      .then(response => response.json()) // Mengurai respons menjadi JSON
      .then(data => {
        this.products = data; // Menyimpan data produk ke dalam state
      });
  },
  // Properti terkomputasi
  computed: {
    // Menghitung total harga semua item dalam keranjang
    cartTotal() {
      return this.cart.reduce(
        (sum, item) => sum + item.product.price * item.qty,
        0,
      );
    },
    // Menghitung total kuantitas semua item dalam keranjang
    cartQty() {
      return this.cart.reduce((qty, item) => qty + item.qty, 0);
    },
  },
  // Metode yang digunakan dalam komponen ini
  methods: {
    // Metode untuk toggle status slider
    toggleSliderStatus() {
      this.style.sliderStatus = !this.style.sliderStatus;
    },
    // Metode untuk menambahkan item ke keranjang
    addItem(product) {
      // Mencari item yang sudah ada dalam keranjang berdasarkan id produk
      const existingItem = this.cart.find(
        item => item.product.id === product.id,
      );
      if (existingItem) {
        // Jika item sudah ada, tambahkan kuantitasnya
        existingItem.qty++;
      } else {
        // Jika item belum ada, tambahkan item baru ke keranjang
        this.cart.push({ product, qty: 1 });
      }
    },
    // Metode untuk menghapus item dari keranjang
    deleteItem(index) {
      if (this.cart[index].qty > 1) {
        // Jika kuantitas lebih dari 1, kurangi kuantitasnya
        this.cart[index].qty--;
      } else {
        // Jika kuantitas 1, hapus item dari keranjang
        this.cart.splice(index, 1);
      }
    },
  },
};
</script>
