<template>
  <el-dialog
    v-model="visible"
    :show-close="true"
    class="popup"
    :close-on-click-modal="false"
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
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const visible = defineModel<boolean>('modelValue') // v-model в родителе

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
</script>

<style scoped>
.popup-dialog {
  max-width: 500px;
  margin: 0 auto !important;
}

.popup-dialog .el-dialog__body {
  padding: 0 !important;
}

@media (max-width: 768px) {
  .popup-dialog {
    width: 90% !important;
    max-width: 100% !important;
  }
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
