<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="modal-close" @click="close">&times;</button>
      
      <h2 class="modal-title">{{ currentTariff.title }}</h2>
      <div class="modal-price">{{ currentTariff.price }}</div>
      
      <div class="modal-description">{{ currentTariff.description }}</div>
      
      <div class="modal-section">
        <h3>Что входит:</h3>
        <ul>
          <li v-for="(feature, index) in currentTariff.features" :key="index">
            {{ feature }}
          </li>
        </ul>
      </div>
      
      <div class="modal-section">
        <h3>Алгоритм работы:</h3>
        <ol>
          <li v-for="(step, index) in currentTariff.algorithm" :key="index">
            {{ step }}
          </li>
        </ol>
      </div>
      
      <div v-if="currentTariff.team" class="modal-section">
        <h3>Команда:</h3>
        <ul>
          <li v-for="(member, index) in currentTariff.team" :key="index">
            {{ member }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Tariff } from '@/pages/services/full.vue'

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    currentTariff: {
      type: Object as PropType<Tariff>,
      required: true
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }

    return {
      close
    }
  }
})
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
  color: #ff4500;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 20px;
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