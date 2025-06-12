<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Полный маркетинг под ключ</h1>
      <p class="hero-subtitle">Выберите тариф, который подходит вашему бизнесу, и делегируйте маркетинг профессионалам</p>
      <a href="#tariffs" class="hero-button">Подробнее о услугах</a>
    </div>
  </section>
  <section id="tariffs" class="tariffs-section">
    <div class="container">
      <h2 class="section-title">Наши тарифы</h2>
      <p class="section-subtitle">От базового ведения до комплексного продвижения</p>
      <div class="tariffs-grid">
        <TariffCard
          v-for="(tariff, index) in tariffs"
          :key="index"
          :tariff="tariff"
          @click="openModal(tariff)"
        />
      </div>
    </div>
    <TariffModal
      :is-open="modalOpen"
      :current-tariff="currentTariff"
      @close="closeModal"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Tariff {
  id: string
  title: string
  price: string
  color: 'primary' | 'accent'
  features: string[]
  description: string
  algorithm: string[]
  team?: string[]
}

export default defineComponent({
  setup() {
    const tariffs: Tariff[] = [
      {
        id: 'basic',
        title: 'Держите мой Инстаграм (Basic)',
        price: '15 000 – 25 000 ₽/мес.',
        color: 'primary',
        features: [
          'Ведение 1 соцсети (Instagram)',
          '3–4 поста в неделю + сторис',
          'Базовая аналитика',
          'Ответы на комментарии'
        ],
        description: 'Базовое ведение Instagram для поддержания активности без сложных интеграций и рекламы.',
        algorithm: [
          'Старт проекта и бриф',
          'Подготовка контент-плана',
          'Создание контента',
          'Публикация по расписанию',
          'Взаимодействие с аудиторией',
          'Мини-аналитика раз в месяц'
        ],
        team: [
          'Менеджер проекта',
          'Копирайтер',
          'Контент-менеджер',
          'Дизайнер (при необходимости)'
        ]
      },
      {
        id: 'standard',
        title: 'Отправьте меня в ТОП (Standard)',
        price: '50 000 – 80 000 ₽/мес.',
        color: 'primary',
        features: [
          'Ведение 2–3 соцсетей',
          'Таргетированная реклама',
          'Чат-боты и CRM',
          'Подробная аналитика'
        ],
        description: 'Комплексное продвижение в нескольких социальных сетях с рекламными кампаниями.',
        algorithm: [
          'Глубокий бриф и аудит',
          'Формирование стратегии на 3 месяца',
          'Запуск и оформление площадок',
          'Регулярное ведение контента',
          'Оптимизация рекламы',
          'Настройка дополнительных инструментов'
        ],
        team: [
          'Менеджер проекта',
          'Контент-менеджер',
          'Копирайтер',
          'Дизайнер',
          'Таргетолог',
          'Технический специалист'
        ]
      },
      {
        id: 'premium',
        title: 'Я буду хлопать в ладоши (Premium)',
        price: '80 000 – 120 000+ ₽/мес.',
        color: 'accent',
        features: [
          'Полный аутсорс маркетинга',
          'Ведение 3–4 площадок',
          'Команда специалистов',
          'Реклама + рассылки + вебинары'
        ],
        description: 'Полное сопровождение маркетинга "под ключ" для масштабирования бизнеса.',
        algorithm: [
          'Стратегическая сессия',
          'План на 6+ месяцев',
          'Подготовка и запуск',
          'Регулярное ведение и масштабирование',
          'Глубокая аналитика',
          'Корректировки стратегии'
        ],
        team: [
          'Менеджер проекта',
          'Маркетинг-стратег',
          'Контент-директор',
          'Копирайтеры',
          'Дизайнеры',
          'Таргетологи',
          'Технические специалисты',
          'Аналитик'
        ]
      }
    ]

    const modalOpen = ref(false)
    const currentTariff = ref<Tariff | null>(null)

    const openModal = (tariff: Tariff) => {
      currentTariff.value = tariff
      modalOpen.value = true
    }

    const closeModal = () => {
      modalOpen.value = false
    }

    return {
      tariffs,
      modalOpen,
      currentTariff,
      openModal,
      closeModal
    }
  }
})
</script>

<style scoped>
.hero {
  background-color: #62007b;
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-button {
  display: inline-block;
  background-color: #ff4500;
  color: white;
  padding: 12px 30px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.hero-button:hover {
  background-color: #e03d00; /* Темнее оранжевый при наведении */
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 15px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
}
</style>