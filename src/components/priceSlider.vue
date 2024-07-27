<template>
  <transition
    name="custom"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
  >
    <div v-if="sliderStatus">
      <div class="d-flex align-items-center" :class="sliderState">
        <label for="" class="font-weight-bold mr-2">Max</label>

        <input
          type="number"
          min="0"
          max="200"
          style="width: 60px; text-align: center; margin: 10px"
          v-model="maxAmount"
          @change="$emit('update:maximum', maxAmount)"
        />

        <input
          type="range"
          min="0"
          max="200"
          style="width: max-content"
          v-model="maxAmount"
          @input="$emit('update:maximum', maxAmount)"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "price-slider",
  data: function () {
    return {
      maxAmount: 50,
    };
  },
  props: ["sliderStatus", "maximum"],
  computed: {
    // Mengembalikan kelas CSS untuk slider berdasarkan status sliderStatus
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}

.btn-square {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
