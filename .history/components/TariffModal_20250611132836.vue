<template>
  <el-dialog
    v-if="currentTariff"
    :model-value="isOpen"
    :title="currentTariff.title"
    width="50%"
    @close="close"
  >
    <div class="modal-price">{{ currentTariff.price }}</div>
    <p class="modal-description">{{ currentTariff.description }}</p>
    
    <el-divider />
    <h3>Что входит:</h3>
    <ul class="modal-list">
      <li v-for="(feature, index) in currentTariff.features" :key="`feature-${index}`">
        {{ feature }}
      </li>
    </ul>

    <el-divider />
    <h3>Алгоритм работы:</h3>
    <ol class="modal-list">
      <li v-for="(step, index) in currentTariff.algorithm" :key="`step-${index}`">
        {{ step }}
      </li>
    </ol>

    <el-divider v-if="currentTariff.team" />
    <h3 v-if="currentTariff.team">Команда:</h3>
    <ul v-if="currentTariff.team" class="modal-list">
      <li v-for="(member, index) in currentTariff.team" :key="`member-${index}`">
        {{ member }}
      </li>
    </ul>
  </el-dialog>
</template>

<script setup lang="ts">
import type { Tariff } from '@/pages/services/types/marketing'

defineProps<{
  isOpen: boolean
  currentTariff: Tariff
}>()

const emit = defineEmits(['close'])

const close = () => emit('close')
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #62007b;
}

.modal-title {
  color: #62007b;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.modal-price {
  color: var(--el-color-primary);
  font-size: 1.2rem;
  margin: 10px 0;
}
.modal-list {
  padding-left: 20px;
  line-height: 1.8;
}

.modal-description {
  margin-bottom: 25px;
  line-height: 1.6;
}

.modal-section {
  margin-bottom: 20px;
}

.modal-section h3 {
  color: #62007b;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.modal-section ul,
.modal-section ol {
  padding-left: 20px;
}

.modal-section li {
  margin-bottom: 8px;
  line-height: 1.5;
}
</style>