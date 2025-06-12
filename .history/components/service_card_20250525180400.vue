<!-- + image prop -->
<template>
  <div class="service-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <h3 class="price">от {{ price }} ₽</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "service_card",
  props: {
    title: String,
    description: String,
    price: String,
  },
});
</script>

<style scoped>
.service-card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  background: #f9f9f9;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s;
  block
}
.service-card p {
  letter-spacing: 0.4px;
  line-height: 128%;
  font-size: 16px;
  color: #333;
}
.service-card:hover {
  transform: translateY(-4px);
}
.price {
  font-weight: bold;
  color: #ff4500;
}
</style>
