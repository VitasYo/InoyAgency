<template>
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

  <section class="target-audience">
    <div class="container">
      <h2 class="section-title">Кому подойдёт?</h2>
      <p class="section-subtitle">Выберите решение, соответствующее вашим задачам</p>
      <el-row :gutter="30" justify="center">
        <el-col 
          v-for="(item, index) in audience" 
          :key="index"
          :xs="24" 
          :sm="12" 
          :md="8"
        >
          <el-card class="audience-card" shadow="hover">
            <div class="card-icon">
              <el-icon :size="40">
                <component :is="item.icon" />
              </el-icon>
            </div>
            <h3 class="card-title">{{ item.title }} тариф</h3>
            <ul class="card-list">
              <li 
                v-for="(point, pointIndex) in item.items" 
                :key="pointIndex"
                class="card-point"
              >
                {{ point }}
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </section>

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
    v-if="currentTariff"
    :is-open="modalOpen"
    :current-tariff="currentTariff"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import type { Tariff } from './types/marketing'
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
const currentTariff = ref<Tariff>()
const openModal = (tariff: Tariff) => {
  currentTariff.value = structuredClone(tariff)
  modalOpen.value = true
}
const closeModal = () => {
  modalOpen.value = false
}
const scrollToTariffs = () => {
  const el = document.getElementById('tariffs')
  el?.scrollIntoView({ behavior: 'smooth' })
}

import { User, Promotion, Medal } from '@element-plus/icons-vue'
const audience = [
  {
    icon: User,
    title: 'Basic',
    items: [
      'Эксперты и небольшие компании',
      'Психологи, нутрициологи, репетиторы',
      'Новички в Instagram'
    ]
  },
  {
    icon: Promotion,
    title: 'Standard',
    items: [
      'Бизнесы, желающие расти в охватах',
      'Онлайн-школы и коучи',
      'Компании со сложным продуктом'
    ]
  },
  {
    icon: Medal,
    title: 'Premium',
    items: [
      'Владельцы бизнеса, уставшие от рутины',
      'Проекты, которым важен результат "под ключ"',
      'Те, кто готов масштабироваться'
    ]
  }
]
</script>

<style scoped>
.hero {
  background-color: #62007b;
  color: white;
  padding: 0 20px;
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

.target-audience {
  padding: 80px 0;
  background-color: #f9f9f9;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-title {
  color: #62007b;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 15px;
}
.section-subtitle {
  color: var(--el-text-color-regular);
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 50px;
}
.audience-card {
  height: 100%;
  border-radius: 12px;
  transition: transform 0.3s ease;
  border: none;
}
.audience-card:hover {
  transform: translateY(-5px);
}
.card-icon {
  color: #ff4500;
  text-align: center;
  margin-bottom: 20px;
}
.card-title {
  color: black;
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 20px;
}
.card-list {
  padding-left: 20px;
}
.card-point {
  color: var(--el-text-color-regular);
  line-height: 1.6;
  margin-bottom: 12px;
  position: relative;
  padding-left: 15px;
  list-style: none;
  text-align: left;
}
.card-point::before {
  content: "•";
  color: #ff4500;
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  top: -1px;
}
@media (max-width: 768px) {
  .target-audience {
    padding: 50px 0;
  }
  .section-title {
    font-size: 1.8rem;
  }
  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 30px;
  }
  .el-col {
    margin-bottom: 20px;
  }
  .card-title {
    font-size: 1.2rem;
  }
  .card-point {
    font-size: 0.9rem;
  }
}
</style>