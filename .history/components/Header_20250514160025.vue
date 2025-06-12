<template>
  <div class="main_header" :class="{ 'header--fixed': isFixed }">
    <div class="container">
      <div class="nav-left">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <img src="@/assets/INOY_logo.png" alt="inoy" />
            <div>marketing agency</div>
          </router-link>
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
        <el-menu-item index="/about" class="menu">О нас</el-menu-item>
        <el-sub-menu index="/services" class="menu">
          <template #title>Услуги</template>
          <el-menu-item index="/services/web">Создание сайтов</el-menu-item>
          <el-menu-item index="/services/smm">SMM-продвижение</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/cases" class="menu">Кейсы</el-menu-item>
        <el-menu-item index="/contact" class="menu">Контакты</el-menu-item>
      </el-menu>

      <div style="text-align: right">
        <button class="main_button">Обсудить проект</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup() {
    const isFixed = ref(false);

    const handleScroll = () => {
      isFixed.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isFixed,
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.2); /* белый с прозрачностью */
  backdrop-filter: blur(8px); /* эффект "стекла" */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
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
/* Группа логотипа и бургера */
.nav-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  display: flex;
  align-items: center;
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
  .main-menu {
    font-weight: bold;
  }
  el-menu-item {
    font-weight: bold;
  }
}
::v-deep(.el-menu-item),
::v-deep(.el-sub-menu__title) {
  font-weight: bold;
  min-width: unset !important;
  flex-shrink: 0;
  font-size: 16px;
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
</style>
