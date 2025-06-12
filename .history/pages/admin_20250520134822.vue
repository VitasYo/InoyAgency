<template>
  <div class="admin-panel">
    <h1 class="admin-title">Заявки из формы брифа</h1>

    <el-table :data="briefs" style="width: 100%" v-loading="loading">
      <el-table-column prop="created_at" label="Дата" width="180" sortable />
      <el-table-column prop="user_id" label="Пользователь" />
      <el-table-column prop="answers" label="Ответы" />
      <el-table-column prop="estimated_price" label="Стоимость (₽)" width="150" />
    </el-table>

    <h1 class="admin-title">Заявки с формы обратной связи</h1>

    <el-table :data="forms" style="width: 100%" v-loading="loading">
      <el-table-column prop="created_at" label="Дата" width="180" sortable />
      <el-table-column prop="name" label="Имя" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="phone" label="Телефон" />
      <el-table-column prop="area" label="Сообщение" />
      <el-table-column prop="user_id" label="Пользователь" />

      <el-table-column label="Статус" width="160">
        <template #default="scope">
          <el-select v-model="scope.row.status" placeholder="Выбрать" @change="(val) => updateStatus(scope.row.id, val)">
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
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useFetch } from '#app'

const forms = ref([])
const briefs = ref([])
const loading = ref(true)

const loadForms = async () => {
  loading.value = true
  const res = await fetch('http://localhost:3001/api/form-admin')
  const briefRes = await useFetch('http://localhost:3001/api/brief-admin')
  briefs.value = briefRes.data.value?.data || []
  const json = await res.json()
  console.log('Ответ от API:', json)
  forms.value = json.data

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

onMounted(() => {
  loadForms()
})
</script>

<style scoped>
.admin-panel {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 20px;
}

.admin-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}
</style>
