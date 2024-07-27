<template>
  <transition-group
    name="fade"
    tag="div"
    @beforeEnter="before"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="row d-flex pt-5 align-items-center"
      v-for="(item, index) in showItems"
      :key="item.id"
      :data-index="index"
    >
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$emit('add', item)">+</button>
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
    showItems: function () {
      let max = this.maximum;
      return this.products.filter(function (item) {
        return item.price <= max;
      });
    },
  },
  methods: {
    // Fungsi yang dipanggil sebelum elemen dimasukkan ke dalam DOM
    before: function (el) {
      el.className = "d-none";
    },
    // Fungsi yang dipanggil saat elemen dimasukkan ke dalam DOM
    enter: function (el) {
      const delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    // Fungsi yang dipanggil saat elemen dihapus dari DOM
    leave: function (el) {
      const delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
  },
};
</script>
