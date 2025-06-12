<template>
  <header class="main_header" :class="{ 'header--fixed': isFixed }">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="logo-link">
          <img src="@/assets/INOY_logo.png" alt="Logo" />
          <div>marketing agency</div>
        </router-link>
      </div>

      <el-menu
        v-if="!isMobile"
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

      <div class="right-button">
        <button class="main_button">Обсудить проект</button>
      </div>

      <el-button
        class="burger"
        icon="el-icon-menu"
        @click="mobileOpen = true"
        circle
      />
    </div>

    <!-- Мобильное меню -->
    <div v-if="isMobile && mobileOpen" class="mobile-menu">
      <div class="mobile-header">
        <router-link to="/" class="logo-link">
          <img src="@/assets/INOY_logo.png" alt="Logo" />
          <div>marketing agency</div>
        </router-link>
        <span class="close-button" @click="mobileOpen = false">×</span>
      </div>
      <nav class="mobile-nav">
        <router-link to="/about" @click="mobileOpen = false">О нас</router-link>
        <router-link to="/services/web" @click="mobileOpen = false">Создание сайтов</router-link>
        <router-link to="/services/smm" @click="mobileOpen = false">SMM-продвижение</router-link>
        <router-link to="/cases" @click="mobileOpen = false">Кейсы</router-link>
        <router-link to="/contact" @click="mobileOpen = false">Контакты</router-link>
        <button class="main_button" @click="mobileOpen = false">Обсудить проект</button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const activeIndex = ref('/');
const mobileOpen = ref(false);
const isMobile = ref(false);
const isFixed = ref(false);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

const handleScroll = () => {
  isFixed.value = window.scrollY > 50;
};

const handleSelect = (index: string) => {
  activeIndex.value = index;
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
@media (max-width: 768px) {
  .burger {
    display: block;
  }
  .main-menu {
    display: none;
  }
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 30px;
    color: white;
  }
  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
  }
  .mobile-nav a,
  .mobile-nav button {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  .close-button {
    font-size: 28px;
    color: white;
    cursor: pointer;
  }
}
</style>
