<template>
  <div>
    <navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @delete-item="deleteItem"></navbar>
    <price-slider
      :sliderStatus="sliderStatus"
      :maximum="maximum"></price-slider>
    <product-list
      :maximum="maximum"
      :products="products"
      @add-item="addItem"></product-list>
  </div>
</template>

<script>
import productList from "./productList.vue";
import priceSlider from "./priceSlider.vue";
import navbar from "./navbar.vue";

export default {
  name: "productsComponent",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
  ],
  components: {
    navbar,
    productList,
    priceSlider,
  },
  methods: {
    toggleSlider() {
      this.$emit("toggle");
    },
    addItem(item) {
      this.$emit("add", item);
    },
    deleteItem(index) {
      this.$emit("delete", index);
    },
  },
};
</script>
