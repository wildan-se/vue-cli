<template>
  <nav class="navbar navbar-light fixed-top">
    <h1>IDShop</h1>
    <div class="navbar-text ml-auto d-flex">
      <button
        class="btn btn-md btn-outline-success"
        @click="$emit('toggle-slide')"
      >
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="dropdown ml-3" v-if="cart.length > 0">
        <button
          class="btn btn-success btn-md dropdown-toggle"
          id="dropdownCart"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="badge badge-pill badge-light">{{ cartQty }}</span>
          <i class="fas fa-shopping-cart mx-2"></i>
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <price :value="Number(cartTotal)"></price>
        </button>
        <div
          class="dropdown-menu dropdown-menu-right mt-2"
          aria-labelledby="dropdownCart"
        >
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-left">
              <span class="badge badge-pill badge-warning align-text-top m-1">
                {{ item.qty }}
              </span>
              {{ item.product.name }}
              <b>{{ (item.qty * item.product.price) | currencyFormat }}</b>
              <a
                href="#"
                class="badge badge-danger text-white ml-2"
                @click.stop="$emit('delete-item', index)"
                >-</a
              >
            </div>
          </div>
          <router-link
            class="btn btn-sm btn-outline-info text-dark float-right mr-2"
            to="/checkout"
            >Checkout</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from "./price.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "navbarComponent",
  props: ["cart", "cartQty", "cartTotal"],
  components: {
    Price,
    FontAwesomeIcon,
  },
  filters: {
    currencyFormat: function (value) {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>
