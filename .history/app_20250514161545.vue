<template>
  <div id="app">
    <HeaderView />
    <router-view />
    <FooterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/header.vue"; // путь к компоненту шапки
import Footer from "./components/footer.vue"; // путь к компоненту подвала

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 4%;
}
</style>
