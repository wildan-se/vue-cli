<template>
  <!-- Template untuk menampilkan harga dengan prefix dan precision -->
  <span>{{ prefix + Number.parseFloat(value).toFixed(precision) }}</span>
</template>

<script>
export default {
  // Nama komponen
  name: "priceComponent",
  // Properti yang diterima dari komponen induk
  props: {
    // Properti untuk nilai harga
    value: Number,
    // Properti untuk prefix mata uang, dengan nilai default "Rp"
    prefix: {
      type: String,
      default: "Rp",
    },
    // Properti untuk jumlah desimal, dengan nilai default 2
    precision: {
      type: Number,
      default: 2,
    },
  },
};
</script>
