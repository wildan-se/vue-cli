<template>
  <div id="app" class="container">
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
  name: "app",
  data() {
    return {
      maximum: 50,
      products: [],
      cart: [],
      style: {
        sliderStatus: false,
      },
    };
  },
  components: {},
  mounted() {
    fetch("https://hplussport.com/api/products/order/price")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  },
  computed: {
    cartTotal() {
      return this.cart.reduce(
        (sum, item) => sum + item.product.price * item.qty,
        0,
      );
    },
    cartQty() {
      return this.cart.reduce((qty, item) => qty + item.qty, 0);
    },
  },
  methods: {
    toggleSliderStatus() {
      this.style.sliderStatus = !this.style.sliderStatus;
    },
    addItem(product) {
      const existingItem = this.cart.find(
        item => item.product.id === product.id,
      );
      if (existingItem) {
        existingItem.qty++;
      } else {
        this.cart.push({ product, qty: 1 });
      }
    },
    deleteItem(index) {
      if (this.cart[index].qty > 1) {
        this.cart[index].qty--;
      } else {
        this.cart.splice(index, 1);
      }
    },
  },
};
</script>
