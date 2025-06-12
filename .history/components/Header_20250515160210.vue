<template>
  <div>
    <div class="main_header" :class="{ 'header--fixed': isFixed }">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="logo-link">
            <img src="@/assets/INOY_logo.png" alt="inoy" />
            <div>marketing agency</div>
          </router-link>
        </div>
        <el-button
          class="burger"
          icon="el-icon-menu"
          @click="mobileOpen = true"
          type="primary"
          circle
        />
        <el-menu
          v-show="!isMobile"
          :default-active="activeIndex"
          mode="horizontal"
          class="main-menu"
          router
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="/about" class="menu">О нас</el-menu-item>
          <el-sub-menu index="/services" class="menu">
            <template #title>Услуги</template>
            <el-menu-item index="/services/web">Создание сайтов</el-menu-item>
            <el-menu-item index="/services/smm">SMM-продвижение</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/cases" class="menu">Кейсы</el-menu-item>
          <el-menu-item index="/contact" class="menu">Контакты</el-menu-item>
        </el-menu>
        <div class="desktop-button">
          <button class="main_button">Обсудить проект</button>
        </div>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div v-if="isMobile && mobileOpen" class="mobile-menu">
      <div class="mobile-menu-header">
        <router-link to="/" class="logo-link">
          <img src="@/assets/INOY_logo.png" alt="inoy" />
        </router-link>
        <button class="close-button" @click="mobileOpen = false">×</button>
      </div>
      <div class="mobile-menu-links">
        <router-link to="/about" @click="mobileOpen = false">О нас</router-link>
        <router-link to="/services/web" @click="mobileOpen = false">Создание сайтов</router-link>
        <router-link to="/services/smm" @click="mobileOpen = false">SMM-продвижение</router-link>
        <router-link to="/cases" @click="mobileOpen = false">Кейсы</router-link>
        <router-link to="/contact" @click="mobileOpen = false">Контакты</router-link>
        <button class="main_button mobile-button">Обсудить проект</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup() {
    const isFixed = ref(false);
    const mobileOpen = ref(false);
    const isMobile = ref(false);

    const handleScroll = () => {
      isFixed.value = window.scrollY > 50;
    };

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", checkMobile);
      checkMobile();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    });

    return {
      isFixed,
      mobileOpen,
      isMobile,
    };
  },
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
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.logo img {
  height: 40px;
  margin-right: 15px;
}

.main-menu {
  display: flex;
  gap: 40px;
  background: transparent;
  font-weight: bold;
}

.burger {
  display: none;
}
.desktop-button {
  display: block;
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

/* Мобильное меню */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
}
.mobile-menu-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.close-button {
  font-size: 28px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
.mobile-menu-links {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
}
.mobile-menu-links a {
  color: white;
  font-size: 22px;
  text-decoration: none;
}
.mobile-button {
  margin-top: 30px;
}

@media (max-width: 768px) {
  .main-menu,
  .desktop-button {
    display: none;
  }
  .burger {
    display: block;
  }
}
</style>
