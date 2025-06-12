<template>
  <el-dialog
    :model-value="isOpen"
    :title="currentTariff.title"
    width="63%"
    :before-close="handleClose"
    custom-class="custom-modal"
  >
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
    <h3 class="modal-section-title">Алгоритм работы:</h3>
    <ol class="modal-list">
      <li v-for="(step, index) in currentTariff.algorithm" :key="`step-${index}`">
        {{ step }}
      </li>
    </ol>

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

<style>
</style>