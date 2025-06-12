<template>
  <header class="main_header" :class="{ 'header--fixed': isFixed }">
    <div class="container">
      <div class="nav-left">
        <div class="logo">
          <NuxtLink to="/" class="logo-link">
            <img src="/INOY_logo.png" alt="inoy" />
            <div>marketing agency</div>
          </NuxtLink>
        </div>
        <el-button
          class="burger"
          icon="el-icon-menu"
          @click="mobileOpen = !mobileOpen"
          type="primary"
          circle
        />
      </div>

      <el-menu
        v-show="!isMobile || mobileOpen"
        :default-active="activeIndex"
        mode="horizontal"
        class="main-menu"
        router
        :ellipsis="false"
        @select="handleSelect"
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

      <div class="header_cta">
        <button class="main_button">Обсудить проект</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const isFixed = ref(false);
const isMobile = ref(false);
const mobileOpen = ref(false);
const route = useRoute();
const activeIndex = ref(route.path);

const handleScroll = () => {
  isFixed.value = window.scrollY > 50;
};
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleSelect = (key: string) => {
  activeIndex.value = key;
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.main_header {
  width: 100%;
  padding: 10px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  transition: all 0.3s ease;
}
.header--fixed {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo img {
  height: 40px;
  margin-right: 15px;
}

.main-menu {
  flex-grow: 1;
  justify-content: center;
  display: flex;
  background: transparent;
  gap: 40px;
}

.burger {
  display: none;
}

.header_cta {
  text-align: right;
}

.main_button {
  text-transform: uppercase;
  border: none;
  width: fit-content;
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #ff4500;
  position: relative;
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

@media (max-width: 768px) {
  .main-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    margin-top: 10px;
  }

  .burger {
    display: block;
  }
}

::v-deep(.el-menu-item),
::v-deep(.el-sub-menu__title) {
  cursor: pointer;
  font-weight: bold;
  min-width: unset !important;
  flex-shrink: 0;
  font-size: 16px;
}
</style>
