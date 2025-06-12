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
  margin-top: 3%;
}
</style>

<script setup lang="ts">
import HeaderView from "@/components/header.vue";
import FooterView from "@/components/footer.vue";
</script>
