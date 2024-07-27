<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <p class="animated fadeInRight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam a optio
      nisi quasi dignissimos quidem, corporis quo non totam saepe facilis
      tempore veritatis culpa? Vel voluptas tempore eligendi tenetur.
    </p>
    <font-awesome-icon :icon="['fas', 'shopping-cart']" />
    <priceComponent :value="4.23"></priceComponent>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import priceComponent from "./components/price.vue";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
    priceComponent,
  },
};
</script>
