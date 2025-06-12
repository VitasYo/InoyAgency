<template>
  <div 
    class="tariff-card" 
    :class="`tariff-card--${tariff.color}`"
    @click="$emit('click')"
  >
    <h3 class="tariff-title">{{ tariff.title }}</h3>
    <div class="tariff-price">{{ tariff.price }}</div>
    <ul class="tariff-features">
      <li v-for="(feature, index) in tariff.features" :key="`feature-${index}`">
        {{ feature }}
      </li>
    </ul>
    <div class="tariff-button">Подробнее</div>
  </div>
</template>

<script setup lang="ts">
import type { Tariff } from '@/pages/services/types/marketing'

defineProps<{
  tariff: Tariff
}>()

defineEmits(['click'])
</script>

<style scoped>
.tariff-card {
  border-radius: 8px;
  padding: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.tariff-card:hover {
  transform: translateY(-5px);
}
.tariff-card--primary {
  background: white;
  border: 1px solid #e0e0e0;
}
.tariff-card--accent {
  background: #62007b;
  color: white;
}
.tariff-card--accent {
  background: #62007b;
  color: white;
}
.tariff-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 600;
}
.tariff-card--accent .tariff-title {
  color: white;
}
.tariff-price {
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 500;
}
.tariff-card--accent .tariff-price {
  color: #ff4500;
}
.tariff-features {
  margin-bottom: 25px;
  padding-left: 20px;
  color: var(--el-text-color-regular);
}
.tariff-features li {
  margin-bottom: 10px;
  line-height: 1.5;
}
.tariff-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff4500;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}
.tariff-button:hover {
  background-color: #e03d00;
  border-color: #e03d00;
  transform: translateY(2px);
}
.tariff-card--accent .tariff-button {
  background-color: white;
  color: #62007b;
}
.tariff-button:hover {
  background-color: #e03d00;
}
.tariff-card--accent .tariff-button:hover {
  background-color: #f0e6f3;
}
</style>