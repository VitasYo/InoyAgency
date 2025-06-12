<template>
  <el-dialog
    :model-value="isOpen"
    width="63%"
    :before-close="handleClose"
    custom-class="custom-modal"
  >
    <div class="modal-title">{{ currentTariff.title }}</div>
    <div class="modal-price">{{ currentTariff.price }}</div>
    <p class="modal-description">{{ currentTariff.description }}</p>
    
    <el-divider />
    <h3 class="modal-section-title">Что входит:</h3>
    <ul class="modal-list">
      <li v-for="(feature, index) in currentTariff.features" :key="`feature-${index}`">
        {{ feature }}
      </li>
    </ul>

    <el-divider />
    <div class="modal-content-container"></div>
    <h3 class="modal-section-title">Алгоритм работы:</h3>
    <ul class="modal-list">
      <li v-for="(step, index) in currentTariff.algorithm" :key="`step-${index}`">
        {{ step }}
      </li>
    </ul>

    <el-divider v-if="currentTariff.team" />
    <h3 v-if="currentTariff.team" class="modal-section-title">Команда:</h3>
    <ul v-if="currentTariff.team" class="modal-list">
      <li v-for="(member, index) in currentTariff.team" :key="`member-${index}`">
        {{ member }}
      </li>
    </ul>
    
    <template #footer>
      <el-button type="primary" @click="$emit('close')">Закрыть</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import type { Tariff } from '@/pages/services/types/marketing'

defineProps<{
  isOpen: boolean
  currentTariff: Tariff
}>()

const emit = defineEmits(['close'])

const handleClose = (done: () => void) => {
  emit('close')
  done()
}
</script>

<style scoped>
.modal-title {
  font-size: 24px;
  color: black;
}

.modal-price {
  color: var(--el-color-primary);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 0;
}

.modal-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.modal-section-title {
  color: #62007b;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.modal-list {
  padding-left: 20px;
  line-height: 1.8;
  color: var(--el-text-color-regular);
  text-align: center;
  width: 400px;
}

.modal-list li {
  margin-bottom: 8px;
  text-align: left;
}

.el-divider--horizontal {
  margin: 20px 0;
}
</style>