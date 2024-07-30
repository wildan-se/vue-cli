<template>
  <transition-group
    name="fade"
    tag="div"
    @beforeEnter="before"
    @enter="enter"
    @leave="leave">
    <div
      class="row d-flex pt-5 align-items-center"
      v-for="(item, index) in showItems"
      :key="item.id"
      :data-index="index">
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$emit('add-item', item)">+</button>
      </div>
      <div class="col-sm-4" loading="lazy">
        <img class="img-fluid" :src="item.image" :alt="item.name" />
      </div>
      <div class="col">
        <h2 class="text-info">{{ item.name }}</h2>
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right">
          <price :value="Number(item.price)"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import price from "./price.vue";

export default {
  name: "product-list",
  components: {
    price,
  },
  props: ["products", "maximum"],
  computed: {
    showItems() {
      return this.products.filter(item => item.price <= this.maximum);
    },
  },
  methods: {
    before(el) {
      el.className = "d-none";
    },
    enter(el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave(el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
  },
};
</script>
