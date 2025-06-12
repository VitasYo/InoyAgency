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
        <el-button
          class="burger"
          icon="Menu"
          @click="mobileOpen = !mobileOpen"
          type="primary"
          circle
        />
      </div>

      <el-menu
        v-show="!isMobile || mobileOpen"
        mode="horizontal"
        class="main-menu"
        :router="true"
        :ellipsis="false"
        :default-active="route.path"
      >
        <el-menu-item index="/about">О нас</el-menu-item>

        <el-sub-menu index="/services">
          <template #title>Услуги</template>
          <el-menu-item index="/services/web">Разовая тех настройка</el-menu-item>
          <el-menu-item index="/services/smm">Экспресс-сайт</el-menu-item>
          <el-menu-item index="/services/smm">SMM-продвижение</el-menu-item>
          <el-menu-item index="/services/smm">SMM-продвижение</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/cases">Кейсы</el-menu-item>
        <el-menu-item index="/contact">Контакты</el-menu-item>
      </el-menu>

      <div class="right-button">
        <NuxtLink class="main_button" @click="popupVisible = true">Обсудить проект</NuxtLink>
        <Popup v-model="popupVisible" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

import Popup from './popup.vue'
const popupVisible = ref(false)

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

<style scoped>
.main_header {
  width: 100%;
  padding: 18px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  transition: all 0.3s ease;
}
.header--fixed {
  position: fixed;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.main-menu {
  display: flex;
  justify-content: center;
  background: transparent;
  flex-grow: 1;
  gap: 40px;
}

.right-button {
  text-align: right;
}

.burger {
  display: none;
}

.main_button {
  text-transform: uppercase;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #ff4500;
  position: relative;
  text-decoration: none;
}
.main_button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0;
  background-color: #ff4500;
  transition: width 0.3s ease;
}
.main_button:hover::after {
  width: 100%;
}

::v-deep(.el-menu-item),
::v-deep(.el-sub-menu__title) {
  font-weight: bold;
  font-size: 16px;
}

/* Адаптив */
@media (max-width: 768px) {
  .main-menu {
    flex-direction: column;
    background: white;
    width: 100%;
    padding: 20px 0;
  }

  .burger {
    display: block;
  }

  .right-button {
    display: none;
  }
}
</style>
