<template>
  <div class="pt-2 mt-1">
    <h1>Checkout</h1>
    <table class="table table-hover" v-if="cart.length">
      <caption class="text-right h3">
        <b>Total:</b>
        <price
          class="d-block text-success font-weight-light"
          :value="Number(cartTotal)"></price>
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group">
              <button @click="$emit('add', item.product)" class="btn btn-info">
                +
              </button>
              <button
                @click="$emit('delete', index)"
                class="btn btn-outline-info">
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-right">
            {{ Number(item.product.price).toFixed(2) }}
          </td>
          <td class="text-right">
            {{ Number(item.product.price * item.qty).toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>

    <router-link class="btn btn-sm btn-outline-info text-dark" to="/"
      >Back to Shop</router-link
    >
  </div>
</template>

<script>
import price from "./price.vue";
export default {
  name: "checkoutComponent",
  props: ["cart", "cartTotal"],
  components: {
    price,
  },
};
</script>
