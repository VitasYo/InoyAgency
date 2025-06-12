<template>
  <div class="login">
    <h2>Вход в админ-панель</h2>
    <el-form :model="form">
      <el-form-item label="Логин">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input type="password" v-model="form.password" />
      </el-form-item>
      <el-button type="primary" @click="login">Войти</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const form = reactive({
  username: '',
  password: ''
})

const login = () => {
  if (form.username === 'admin' && form.password === '1234') {
    localStorage.setItem('auth_token', 'secure-admin-token')
    router.push('/admin')
  } else {
    ElMessage.error('Неверный логин или пароль')
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
