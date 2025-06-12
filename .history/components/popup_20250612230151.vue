<template>
  <el-dialog
    v-model="visible"
    :show-close="true"
    :width="dialogWidth"
    :close-on-click-modal="false"
    :class="{'popup-dialog': true, 'is-mobile': isMobile}"
  >
    <template #header>
      <div class="popup-header">
        <img src="@/assets/INOY_logo.png" alt="Логотип" />
      </div>
    </template>

    <div class="popup-body">
      <h2 class="popup-title">Запишитесь на бесплатную консультацию</h2>
      <p class="popup-subtitle">Оставьте свои контакты, и мы свяжемся с вами</p>

      <el-form :model="form" class="popup-form">
        <el-form-item>
          <el-input placeholder="Email" v-model="form.email" />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="Имя" v-model="form.name" />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="Телефон" v-model="form.phone" />
        </el-form-item>
      </el-form>

      <el-button class="popup-submit" type="primary" @click="submitForm">Отправить</el-button>
      <p class="popup-note">Нажимая на кнопку, я даю согласие на обработку своих персональных данных в соответствии с Политикой конфиденциальности</p>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const form = ref({
  name: '',
  email: '',
  phone: ''
})

const submitForm = () => {
  // Здесь можно отправить данные на сервер
  ElMessage.success('Заявка отправлена!')
  visible.value = false
}

import { ref, computed, onMounted, onUnmounted } from 'vue';

const visible = ref(false);
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const dialogWidth = computed(() => {
  return isMobile.value ? '90%' : '500px';
});

onMounted(() => {
  window.addEventListener('resize', checkMobile);
  checkMobile();
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
/* Общие стили для обеих версий */
.popup-dialog {
  border-radius: 12px;
}

/* Стили только для десктопной версии */
.popup-dialog:not(.is-mobile) {
  max-width: 500px;
}

/* Стили только для мобильной версии */
.popup-dialog.is-mobile {
  width: 90%;
  max-width: 100%;
}

/* Глубокие стили для Element UI */
.popup-dialog :deep(.el-dialog__body) {
  padding: 0;
}

.popup-header {
  background: #0d1b2a;
  text-align: center;
  padding: 20px 0;
}

.popup-header img {
  max-height: 60px;
}

.popup-body {
  padding: 30px;
  text-align: center;
}

.popup-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.popup-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.popup-form .el-input {
  border-radius: 6px;
}

.popup-submit {
  background-color: #f5793b;
  color: white;
  width: 100%;
  margin-top: 10px;
}

.popup-note {
  margin-top: 12px;
  font-size: 12px;
  color: #888;
}
</style>
