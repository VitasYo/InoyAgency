<template>
  <div class="login-wrapper">
    <div class="login-box">
      <h2>{{ isRegistering ? 'Регистрация администратора' : 'Вход в админку' }}</h2>

      <el-form :model="form" label-position="left" label-width="70px">
        <el-form-item label="Логин">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input type="password" v-model="form.password" />
        </el-form-item>

        <el-button type="primary" @click="handleSubmit">
          {{ isRegistering ? 'Зарегистрироваться' : 'Войти' }}
        </el-button>

        <el-button type="text" @click="toggleMode" style="margin-top: 10px">
          {{ isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться' }}
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const isRegistering = ref(false)

const form = reactive({
  username: '',
  password: ''
})

// переключение между режимами
const toggleMode = () => {
  isRegistering.value = !isRegistering.value
}

// отправка формы
const handleSubmit = async () => {
  if (!form.username || !form.password) {
    ElMessage.warning('Введите логин и пароль')
    return
  }

  if (isRegistering.value) {
    // регистрация — отправляем на /register
    const res = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    const result = await res.json()
    if (result.status === 'success') {
      ElMessage.success('Регистрация успешна')
      isRegistering.value = false
    } else {
      ElMessage.error(result.message || 'Ошибка регистрации')
    }
  } else {
    // вход — проверка на сервере
    const res = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    const result = await res.json()
    if (result.status === 'success') {
      localStorage.setItem('auth_token', result.token)
      router.push('/admin')
    } else {
      ElMessage.error(result.message || 'Ошибка входа')
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f2f5;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  width: 340px;
}
</style>

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
  width: 360px;
}
h2 {
    margin-top: 0;
}
</style>
