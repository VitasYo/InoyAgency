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

      <!-- Desktop menu -->
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
          <template #title>
            <div @click="goToMainAndScroll">Услуги</div>
          </template>
          <el-menu-item index="/services/tech">Разовая тех настройка</el-menu-item>
          <el-menu-item index="/services/site">Экспресс-сайт</el-menu-item>
          <el-menu-item index="/services/audit">Точно-в-цель Аудит</el-menu-item>
          <el-menu-item index="/services/full">Маркетинг под ключ</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/cases">Кейсы</el-menu-item>
        <el-menu-item index="/contact">Контакты</el-menu-item>
      </el-menu>

      <!-- Mobile burger and menu -->
      <div class="mobile-right" v-if="isMobile">
        <el-button
          class="burger"
          icon="Menu"
          @click="toggleMobileMenu"
          type="primary"
          circle
        />
      </div>

      <div class="right-button" v-if="!isMobile">
        <button class="main_button" @click="openPopup">Обсудить проект</button>
        <Popup v-model="popupVisible" />
      </div>
    </div>

    <!-- Mobile dropdown menu -->
    <transition name="slide-down">
      <div v-if="isMobile && mobileOpen" class="mobile-menu">
        <el-menu
          class="mobile-menu-list"
          :router="true"
          :default-active="route.path"
        >
          <el-menu-item index="/about" @click="closeMobileMenu">О нас</el-menu-item>
          <el-sub-menu index="/services">
            <template #title>Услуги</template>
            <el-menu-item index="/services/tech" @click="closeMobileMenu">Разовая тех настройка</el-menu-item>
            <el-menu-item index="/services/site" @click="closeMobileMenu">Экспресс-сайт</el-menu-item>
            <el-menu-item index="/services/audit" @click="closeMobileMenu">Точно-в-цель Аудит</el-menu-item>
            <el-menu-item index="/services/full" @click="closeMobileMenu">Маркетинг под ключ</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/cases" @click="closeMobileMenu">Кейсы</el-menu-item>
          <el-menu-item index="/contact" @click="closeMobileMenu">Контакты</el-menu-item>
        </el-menu>
        
        <div class="mobile-button-container">
          <button 
            class="mobile-project-button" 
            @click="handleMobileProjectClick"
          >
            Обсудить проект
          </button>
        </div>
      </div>
    </transition>

    <Popup v-if="isMobile" v-model="popupVisible" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const popupVisible = ref(false);
const isFixed = ref(false);
const isMobile = ref(false);
const mobileOpen = ref(false);
const route = useRoute();
const router = useRouter();

const updateScroll = () => {
  isFixed.value = window.scrollY > 50;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const toggleMobileMenu = () => {
  mobileOpen.value = !mobileOpen.value;
};

const closeMobileMenu = () => {
  mobileOpen.value = false;
};

const openPopup = () => {
  popupVisible.value = true;
};

const handleMobileProjectClick = () => {
  closeMobileMenu();
  openPopup();
};

const goToMainAndScroll = () => {
  router.push({ path: '/', query: { scroll: 'services' } });
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
/* Остальные стили остаются такими же, как в предыдущем примере */

/* Изменяем кнопки с NuxtLink на button для лучшей семантики */
.main_button, .mobile-project-button {
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  text-decoration: none;
  background: none;
}

.main_button {
  color: #ff4500;
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

.mobile-project-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff4500;
  color: white;
  border-radius: 4px;
}
</style>