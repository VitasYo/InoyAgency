<template>
  <div class="app-wrapper">
    <HeaderView />
    <NuxtPage />
    <FooterView />
  </div>
  <div>
    <slot />
    <div v-if="!consentGiven" class="cookie_banner">
      <p>
        Мы используем cookies и localStorage для улучшения работы сайта.
        Продолжая пользоваться сайтом, вы соглашаетесь с этим.
      </p>
      <el-button size="small" type="primary" @click="acceptCookies">Согласен</el-button>
    </div>
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

</style>
<style scoped>
</style>

<script setup lang="ts">
import HeaderView from "@/components/header.vue";
import FooterView from "@/components/footer.vue";

import { ref, onMounted } from 'vue'

const consentGiven = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookie_consent')
  if (consent === 'true') {
    consentGiven.value = true
  }
})

function acceptCookies() {
  localStorage.setItem('cookie_consent', 'true')
  consentGiven.value = true
}
</script>
