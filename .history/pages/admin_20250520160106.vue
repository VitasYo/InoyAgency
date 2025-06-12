<template>
  <div class="admin-panel">
    <h1 class="admin-title">Фильтрация по пользователю</h1>
    <div class="filter-box">
      <el-select
        v-model="selectedUserId"
        placeholder="Выберите пользователя"
        clearable
        style="width: 300px"
      >
        <el-option
          v-for="id in allUserIds"
          :key="id"
          :label="id"
          :value="id"
        />
      </el-select>
      <el-button @click="selectedUserId = null" style="margin-left: 10px">
        Показать все
      </el-button>
    </div>

    <h1 class="admin-title">Заявки из формы брифа</h1>
    <el-table :data="filteredBriefs" style="width: 100%" v-loading="loading">
      <el-table-column prop="created_at" label="Дата" width="180" sortable />
      <el-table-column label="Пользователь">
        <template #default="scope">
          {{ displayUser(scope.row.user_id) }}
        </template>
      </el-table-column>
      <el-table-column prop="answers" label="Ответы" />
      <el-table-column prop="estimated_price" label="Стоимость (₽)" width="150" />
    </el-table>

    <h1 class="admin-title">Заявки с формы обратной связи</h1>
    <el-table :data="filteredForms" style="width: 100%" v-loading="loading">
      <el-table-column prop="created_at" label="Дата" width="180" sortable />
      <el-table-column prop="name" label="Имя" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="phone" label="Телефон" />
      <el-table-column prop="area" label="Сообщение" />
      <el-table-column prop="user_id" label="Пользователь" />

      <el-table-column label="Статус" width="160">
        <template #default="scope">
          <el-tag
            :type="statusTagType(scope.row.status)"
            effect="light"
            style="margin-bottom: 5px"
          >
            {{ statusLabel(scope.row.status) }}
          </el-tag>
          <el-select
            v-model="scope.row.status"
            placeholder="Выбрать"
            size="small"
            @change="(val) => updateStatus(scope.row.id, val)"
          >
            <el-option label="Новая" value="new" />
            <el-option label="Обработана" value="processed" />
            <el-option label="Отклонена" value="rejected" />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column label="Действия" width="120">
        <template #default="scope">
          <el-button type="danger" size="small" @click="deleteEntry(scope.row.id)">
            Удалить
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

import { ref, onMounted, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useFetch } from '#app'

const forms = ref([])
const briefs = ref([])
const loading = ref(true)
const selectedUserId = ref<string | null>(null)

const loadForms = async () => {
  loading.value = true

  try {
    const [formRes, briefRes] = await Promise.all([
      fetch('http://localhost:3001/api/form-admin'),
      fetch('http://localhost:3001/api/brief-admin')
    ])

    const formData = await formRes.json()
    const briefData = await briefRes.json()

    forms.value = formData.data || []
    briefs.value = briefData.data || []

  } catch (error) {
    ElMessage.error('Ошибка при загрузке данных')
    console.error(error)
  }

  loading.value = false
}

const updateStatus = async (id: number, status: string) => {
  const { data } = await useFetch(`http://localhost:3001/api/form-admin/${id}`, {
    method: 'PUT',
    body: { status }
  })

  if (data.value?.status === 'success') {
    ElMessage.success('Статус обновлён')
  } else {
    ElMessage.error('Ошибка при обновлении статуса')
  }
}

const deleteEntry = async (id: number) => {
  try {
    await ElMessageBox.confirm('Вы уверены, что хотите удалить эту заявку?', 'Внимание', {
      confirmButtonText: 'Да',
      cancelButtonText: 'Отмена',
      type: 'warning'
    })

    const { data } = await useFetch(`http://localhost:3001/api/form-admin/${id}`, {
      method: 'DELETE'
    })

    if (data.value?.status === 'success') {
      ElMessage.success('Заявка удалена')
      loadForms()
    } else {
      ElMessage.error('Ошибка при удалении')
    }
  } catch {
    // отмена удаления
  }
}

// 📌 Отображение user_id → name
const userNameMap = computed(() => {
  const map = new Map<string, string>()
  forms.value.forEach((entry: any) => {
    if (entry.user_id && entry.name) {
      map.set(entry.user_id, entry.name)
    }
  })
  return map
})

// 📌 Отображение пользователя с ✉
const displayUser = (userId: string) => {
  const name = userNameMap.value.get(userId)
  return name ? `${name} ✉` : userId
}

// 📌 Уникальные ID пользователей
const allUserIds = computed(() => {
  const ids = new Set<string>()
  forms.value.forEach((f: any) => ids.add(f.user_id))
  briefs.value.forEach((b: any) => ids.add(b.user_id))
  return Array.from(ids)
})

// 📌 Фильтрация
const filteredForms = computed(() => {
  return selectedUserId.value
    ? forms.value.filter((f: any) => f.user_id === selectedUserId.value)
    : forms.value
})

const filteredBriefs = computed(() => {
  return selectedUserId.value
    ? briefs.value.filter((b: any) => b.user_id === selectedUserId.value)
    : briefs.value
})

onMounted(() => {
  loadForms()
})

</script>

<style scoped>
.admin-panel {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  max-width: 1100px;
  margin: 80px auto;
  padding: 0 20px;
}
.admin-title {
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0 20px;
  text-align: center;
}
.filter-box {
  text-align: center;
  margin-bottom: 30px;
}
</style>
