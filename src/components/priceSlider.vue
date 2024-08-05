<template>
  <!-- Transition untuk efek fade-in dan fade-out -->
  <transition
    name="fade"
    enter-active-class="fade-enter-active"
    leave-active-class="fade-leave-active">
    <!-- Div yang hanya muncul jika sliderStatus bernilai true -->
    <div v-if="sliderStatus">
      <!-- Kontainer flex untuk label dan input -->
      <div class="d-flex align-items-center w-100 mt-5 pt-5">
        <!-- Label untuk input maksimal -->
        <label for="" class="font-weight-bold mr-2">Max</label>
        <!-- Input tipe number untuk nilai maksimal -->
        <input
          type="number"
          min="0"
          max="200"
          style="width: 60px; text-align: center; margin: 10px"
          v-model="maxAmount"
          @change="$emit('update:maximum', maxAmount)" />
        <!-- Input tipe range untuk nilai maksimal -->
        <input
          type="range"
          min="0"
          max="200"
          style="width: max-content"
          v-model="maxAmount"
          @input="$emit('update:maximum', maxAmount)" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // Nama komponen
  name: "price-slider",
  // Data lokal komponen
  data() {
    return {
      // Nilai default untuk jumlah maksimal
      maxAmount: 50,
    };
  },
  // Properti yang diterima dari komponen induk
  props: ["sliderStatus", "maximum"],
  // Watcher untuk memantau perubahan pada properti maximum
  watch: {
    // Ketika properti maximum berubah, perbarui maxAmount
    maximum(newVal) {
      this.maxAmount = newVal;
    },
  },
};
</script>

<style>
/* CSS untuk efek fade-in dan fade-out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* CSS untuk tombol dengan ukuran kotak */
.btn-square {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
