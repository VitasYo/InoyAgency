<template>
  <div class="main_header" :class="{ 'header--fixed': isFixed }">
    <div class="container">
      <div class="nav-left">
        <div class="logo">
          <NuxtLink to="/" class="logo-link">
            <img src="@/assets/INOY_logo.png" alt="inoy" />
            <div>marketing agency</div>
          </NuxtLink>
        </div>
      </div>

      <el-button
        class="burger"
        icon="Menu"
        @click="mobileOpen = true"
        type="primary"
        circle
      />

      <el-menu
        v-if="!isMobile"
        mode="horizontal"
        class="main-menu"
        :router="true"
        :ellipsis="false"
        :default-active="route.path"
      >
        <el-menu-item index="/about">О нас</el-menu-item>
        <el-sub-menu index="/services">
          <template #title>Услуги</template>
          <el-menu-item index="/services/web">Создание сайтов</el-menu-item>
          <el-menu-item index="/services/smm">SMM-продвижение</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/cases">Кейсы</el-menu-item>
        <el-menu-item index="/contact">Контакты</el-menu-item>
      </el-menu>

      <div class="right-button" v-if="!isMobile">
        <NuxtLink to="/contact" class="main_button">Обсудить проект</NuxtLink>
      </div>
    </div>

    <!-- Мобильное полноэкранное меню -->
    <div v-if="mobileOpen" class="mobile-overlay">
      <div class="mobile-menu-content">
        <div class="mobile-menu-header">
          <NuxtLink to="/" class="logo-link">
            <img src="@/assets/INOY_logo.png" alt="inoy" />
          </NuxtLink>
          <span class="close-icon" @click="mobileOpen = false">×</span>
        </div>
        <nav class="mobile-nav">
          <NuxtLink to="/about" @click="mobileOpen = false">О нас</NuxtLink>
          <NuxtLink to="/services/web" @click="mobileOpen = false">Создание сайтов</NuxtLink>
          <NuxtLink to="/services/smm" @click="mobileOpen = false">SMM-продвижение</NuxtLink>
          <NuxtLink to="/cases" @click="mobileOpen = false">Кейсы</NuxtLink>
          <NuxtLink to="/contact" @click="mobileOpen = false">Контакты</NuxtLink>
        </nav>
        <NuxtLink to="/contact" class="main_button" @click="mobileOpen = false">Обсудить проект</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const isFixed = ref(false);
const isMobile = ref(false);
const mobileOpen = ref(false);
const route = useRoute();

const updateScroll = () => {
  isFixed.value = window.scrollY > 50;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
  window.addEventListener("resize", checkMobile);
  checkMobile();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
  window.removeEventListener("resize", checkMobile);
});
</script>

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.95);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-menu-content {
  width: 90%;
  max-width: 500px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.mobile-menu-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu-header img {
  height: 40px;
}

.close-icon {
  font-size: 32px;
  cursor: pointer;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  text-align: center;
}

.mobile-nav a {
  color: white;
  text-decoration: none;
}

.mobile-nav a:hover {
  text-decoration: underline;
}

@media (min-width: 769px) {
  .mobile-overlay {
    display: none;
  }
}
