<template>
  <div class="app-wrapper">
    <HeaderView />
    <NuxtPage />
    <FooterView />
  </div>
</template>

<style>
.app-wrapper {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 3.5%;
}
.cookie_banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f4f0fb;
  color: #333;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}
</style>

<script setup lang="ts">
import HeaderView from "@/components/header.vue";
import FooterView from "@/components/footer.vue";
</script>
