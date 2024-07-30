<template>
  <transition
    name="fade"
    enter-active-class="fade-enter-active"
    leave-active-class="fade-leave-active">
    <div v-if="sliderStatus">
      <div class="d-flex align-items-center w-100 mt-5 pt-5">
        <label for="" class="font-weight-bold mr-2">Max</label>
        <input
          type="number"
          min="0"
          max="200"
          style="width: 60px; text-align: center; margin: 10px"
          v-model="maxAmount"
          @change="$emit('update:maximum', maxAmount)" />
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
  name: "price-slider",
  data() {
    return {
      maxAmount: 50,
    };
  },
  props: ["sliderStatus", "maximum"],
  watch: {
    maximum(newVal) {
      this.maxAmount = newVal;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.btn-square {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
