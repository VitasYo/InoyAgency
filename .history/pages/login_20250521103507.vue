<template>
  <div class="login-wrapper">
    <div class="login-box">
      <h2 v-if="!isRegistering">Вход</h2>
      <h2 v-else>Регистрация администратора</h2>

      <el-form :model="form" label-width="60px">
        <el-form-item label="Логин">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-button type="primary" @click="handleSubmit">
          {{ isRegistering ? 'Зарегистрироваться' : 'Войти' }}
        </el-button>
        <el-button type="text" @click="toggleMode">
          {{ isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться' }}
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

const router = useRouter()
const isRegistering = ref(false)

const form = reactive({
  username: '',
  password: ''
})

const toggleMode = () => {
  isRegistering.value = !isRegistering.value
}

const handleSubmit = () => {
  const savedUser = localStorage.getItem('admin_user')
  const savedPassword = localStorage.getItem('admin_pass')

  if (isRegistering.value) {
    localStorage.setItem('admin_user', form.username)
    localStorage.setItem('admin_pass', form.password)
    ElMessage.success('Регистрация успешна')
    isRegistering.value = false
  } else {
    if (form.username === savedUser && form.password === savedPassword) {
      localStorage.setItem('auth_token', 'secure-admin-token')
      router.push('/admin')
    } else {
      ElMessage.error('Неверный логин или пароль')
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* центрирование по вертикали */
  background: #f4f4f4;
}
.login-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  
}
h2 {
    margin-top: 0;
}
</style>
