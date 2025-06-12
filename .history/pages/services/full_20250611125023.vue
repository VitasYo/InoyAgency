<template>
  <div>
    <el-row :gutter="20" class="hero" justify="center">
      <el-col :span="16">
        <h1 class="hero-title">Полный маркетинг под ключ</h1>
        <p class="hero-subtitle">
          Выберите тариф, который подходит вашему бизнесу, и делегируйте маркетинг профессионалам
        </p>
        <el-button type="primary" size="large" @click="scrollToTariffs">
          Подробнее о услугах
        </el-button>
      </el-col>
    </el-row>

    <section id="tariffs" class="container">
      <h2 class="section-title">Наши тарифы</h2>
      <p class="section-subtitle">От базового ведения до комплексного продвижения</p>
      
      <el-row :gutter="30">
        <el-col 
          v-for="(tariff, index) in tariffs" 
          :key="index"
          :xs="24" :sm="12" :md="8"
        >
          <TariffCard
            :tariff="tariff"
            @click="openModal(tariff)"
          />
        </el-col>
      </el-row>
    </section>

    <TariffModal
      :is-open="modalOpen"
      :current-tariff="currentTariff"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import type { Tariff } from '~/types/marketing'
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
  background-color: #e03d00;
}

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
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
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