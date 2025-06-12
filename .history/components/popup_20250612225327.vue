<template>
  <el-dialog
    v-model="visible"
    :show-close="true"
    custom-class="popup-dialog"
    :close-on-click-modal="false"
    width="500px"
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

<script setup>
// Логика компонента
</script>

<style lang="scss" scoped>
/* Основные стили попапа */
.popup-dialog {
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  
  .el-dialog__header {
    padding: 20px 20px 0;
  }
  
  .el-dialog__body {
    padding: 0;
  }
}

.popup-header img {
  height: 40px;
}

.popup-body {
  padding: 0 20px 20px;
}

.popup-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.popup-subtitle {
  color: #666;
  margin-bottom: 20px;
}

.popup-submit {
  width: 100%;
  margin-top: 15px;
}

.popup-note {
  font-size: 0.8rem;
  color: #999;
  margin-top: 15px;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .popup-dialog {
    width: 90% !important;
    max-width: 100% !important;
    
    .popup-title {
      font-size: 1.2rem;
    }
  }
}
</style>