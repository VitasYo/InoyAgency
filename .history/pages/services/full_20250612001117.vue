<template>
  <el-row :gutter="20" class="hero" justify="center">
    <el-col :span="16">
      <h1 class="hero-title">Полный маркетинг под ключ</h1>
      <p class="hero-subtitle">
        Выберите тариф, который подходит вашему бизнесу, и делегируйте маркетинг профессионалам
      </p>
      <el-button type="primary" class="primary-btn" size="large" @click="scrollToTariffs">
        Подробнее об услугах
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

  <section class="work-steps">
    <div class="container">
      <h2 class="section-title">Как мы работаем</h2>
      <p class="section-subtitle">Четкий процесс для достижения результата</p>
      <el-steps 
        :active="activeStep" 
        align-center
        class="custom-steps"
      >
        <el-step 
          v-for="(step, index) in steps" 
          :key="index"
          :title="step.title"
          :description="step.description"
        >
          <template #icon>
            <div class="step-icon" :class="{ 'active': index <= activeStep }">
              <el-icon :size="24">
                <component :is="step.icon" />
              </el-icon>
            </div>
          </template>
        </el-step>
      </el-steps>
      <div class="step-content">
        <h3>{{ steps[activeStep].contentTitle }}</h3>
        <p>{{ steps[activeStep].content }}</p>
        
        <div class="step-controls">
          <el-button 
            :disabled="activeStep === 0"
            @click="prevStep"
            class="control-btn"
          >
            Назад
          </el-button>
          
          <el-button 
            type="primary" 
            :disabled="activeStep === steps.length - 1"
            @click="nextStep"
            class="control-btn"
          >
            Далее
          </el-button>
        </div>
      </div>
    </div>
  </section>
  <section class="comparison-section">
    <div class="container">
      <h2 class="section-title">Сравнение тарифов</h2>
      <p class="section-subtitle">Выберите оптимальное решение для вашего бизнеса</p>

      <div class="comparison-table">
        <el-table 
          :data="features" 
          border 
          style="width: 100%"
          class="custom-table"
          :show-header="false"
        >
          <el-table-column prop="name" label="Функция" width="300" class-name="feature-column">
            <template #default="{ row }">
              <div class="feature-name">{{ row.name }}</div>
              <div class="feature-description" v-if="row.description">{{ row.description }}</div>
            </template>
          </el-table-column>
          
          <el-table-column v-for="(tariff, index) in tariffs_comparison" :key="index" :label="tariff.title">
            <template #default="{ row }">
              <div class="tariff-value" :class="{ 'highlight': row.highlight }">
                <el-icon v-if="row[tariff.id] === true" color="#00b894" :size="24">
                  <CircleCheckFilled />
                </el-icon>
                <el-icon v-else-if="row[tariff.id] === false" color="#ff4757" :size="24">
                  <CloseBold />
                </el-icon>
                <span v-else>{{ row[tariff.id] }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
  <section class="triggers-section">
    <div class="container">
      <h2 class="section-title">Когда вам это нужно?</h2>
      <p class="section-subtitle">Ситуации, в которых наши тарифы будут идеальным решением</p>

      <el-row :gutter="30" justify="center">
        <el-col 
          v-for="(trigger, index) in triggers" 
          :key="index"
          :xs="24" 
          :sm="12" 
          :lg="8"
        >
          <div class="trigger-card" :style="{ borderTopColor: trigger.color }">
            <div class="trigger-header">
              <h3 class="trigger-title">{{ trigger.title }}</h3>
              <el-tag :color="trigger.color" effect="dark" class="trigger-tag">
                {{ trigger.tariff }}
              </el-tag>
            </div>
            <p class="trigger-text">«{{ trigger.text }}»</p>
            <ul class="trigger-solution">
              <li v-for="(item, i) in trigger.solution" :key="i">
                <el-icon><Check /></el-icon>
                {{ item }}
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
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

import { ref } from 'vue'
import {
  Search,
  Calendar,
  Document,
  TrendCharts,
  Check
} from '@element-plus/icons-vue'
const activeStep = ref(0)
const steps = [
  {
    title: 'Анализ',
    icon: Search,
    description: '1-2 дня',
    contentTitle: 'Глубокий аудит',
    content: 'Изучаем ваш бизнес, конкурентов и целевую аудиторию. Формируем первичную стратегию.'
  },
  {
    title: 'Планирование',
    icon: Document,
    description: '3-5 дней',
    contentTitle: 'Разработка стратегии',
    content: 'Создаем детальный контент-план и определяем ключевые метрики для отслеживания.'
  },
  {
    title: 'Реализация',
    icon: Calendar,
    description: 'Постоянно',
    contentTitle: 'Ведение кампании',
    content: 'Регулярно публикуем контент, настраиваем рекламу и взаимодействуем с аудиторией.'
  },
  {
    title: 'Анализ',
    icon: TrendCharts,
    description: 'Ежемесячно',
    contentTitle: 'Отчетность',
    content: 'Анализируем результаты, корректируем стратегию для улучшения показателей.'
  },
  {
    title: 'Результат',
    icon: Check,
    description: 'По достижению целей',
    contentTitle: 'Достижение целей',
    content: 'Ваш бизнес получает предсказуемый поток клиентов через соцсети.'
  }
]
const nextStep = () => {
  if (activeStep.value < steps.length - 1) {
    activeStep.value++
  }
}
const prevStep = () => {
  if (activeStep.value > 0) {
    activeStep.value--
  }
}

import { CircleCheckFilled, CloseBold } from '@element-plus/icons-vue'
const tariffs_comparison = [
  {
    id: 'basic',
    title: 'Basic',
    price: 'от 15 000₽/мес',
    color: '#ff4500'
  },
  {
    id: 'standard',
    title: 'Standard',
    price: 'от 50 000₽/мес',
    color: '#62007b'
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 'от 80 000₽/мес',
    color: '#00b894'
  }
]
const features = [
  {
    name: 'Ведение Instagram',
    description: 'Публикация постов и сторис',
    basic: true,
    standard: true,
    premium: true,
    highlight: false
  },
  {
    name: 'Количество соцсетей',
    description: '',
    basic: '1',
    standard: '2-3',
    premium: '3-4',
    highlight: true
  },
  {
    name: 'Таргетированная реклама',
    description: 'Настройка и ведение',
    basic: false,
    standard: true,
    premium: true,
    highlight: false
  },
  {
    name: 'Контент-план',
    description: '',
    basic: 'Базовый',
    standard: 'Расширенный',
    premium: 'Полный',
    highlight: true
  },
  {
    name: 'Аналитика',
    description: 'Отчеты о результатах',
    basic: 'Минимум',
    standard: 'Стандарт',
    premium: 'Полная',
    highlight: false
  },
  {
    name: 'Команда специалистов',
    description: '',
    basic: '1-2',
    standard: '3-5',
    premium: '6+',
    highlight: true
  },
  {
    name: 'Поддержка',
    description: 'Частота коммуникации',
    basic: '1 раз в неделю',
    standard: '2-3 раза в неделю',
    premium: 'Ежедневно',
    highlight: false
  }
]

const triggers = [
  {
    title: 'Нехватка времени',
    text: 'Я не успеваю вести соцсети, но хочу сохранять активность',
    solution: [
      'Полное ведение профиля',
      'Регулярный контент без вашего участия',
      'Ответы на комментарии'
    ],
    tariff: 'Basic',
    color: '#ff4500'
  },
  {
    title: 'Нет результата',
    text: 'Публикую посты, но нет роста и заявок',
    solution: [
      'Профессиональный контент',
      'Таргетированная реклама',
      'Анализ и оптимизация'
    ],
    tariff: 'Standard',
    color: '#62007b'
  },
  {
    title: 'Масштабирование',
    text: 'Хочу полностью делегировать маркетинг и сосредоточиться на бизнесе',
    solution: [
      'Команда специалистов',
      'Полный цикл продвижения',
      'Несколько каналов'
    ],
    tariff: 'Premium',
    color: '#00b894'
  }
]
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
.primary-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff4500;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}
.primary-btn:hover {
  background-color: #e03d00;
  border-color: #e03d00;
  transform: translateY(2px);
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
  background-color: #f9f9f9;
  margin-top: 80px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 120px;
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

.work-steps {
  background-color: #f9f9f9;
}
/* Кастомизация компонента Steps */
:deep(.custom-steps .el-step__head) {
  width: 60px;
  height: 60px;
}
:deep(.custom-steps .el-step__title) {
  font-size: 1.1rem;
  font-weight: 600;
}
:deep(.custom-steps .el-step__description) {
  font-size: 0.9rem;
  color: var(--el-text-color-secondary);
}
:deep(.custom-steps .el-step__line) {
  top: 30px;
  width: 230px;
  background-color: var(--el-border-color-light);
}
.step-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0e6f3;
  color: #62007b;
  transition: all 0.3s ease;
}
.step-icon.active {
  background-color: #ff4500;
  color: white;
}
.step-content {
  background: white;
  border-radius: 12px;
  padding: 40px;
  margin-top: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.step-content h3 {
  color: #62007b;
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.step-content p {
  color: var(--el-text-color-regular);
  line-height: 1.8;
  font-size: 1.1rem;
}
.step-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}
.control-btn {
  min-width: 120px;
  padding: 12px 24px;
}

/* Адаптация для мобильных */
@media (max-width: 768px) {
  .work-steps {
    padding: 50px 0;
  }
  :deep(.custom-steps .el-step__title) {
    font-size: 0.9rem;
  }
  :deep(.custom-steps .el-step__description) {
    font-size: 0.8rem;
  }
  .step-content {
    padding: 25px;
  }
  .step-content h3 {
    font-size: 1.2rem;
  }
  .step-content p {
    font-size: 1rem;
  }
  .step-controls {
    flex-direction: column;
    gap: 10px;
  }
  .control-btn {
    width: 100%;
  }
}


.section-title {
  color: #62007b;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 15px;
}
.section-subtitle {
  color: var(--el-text-color-secondary);
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 50px;
}
.comparison-table {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
}
:deep(.custom-table) {
  --el-table-border-color: #f0e6f3;
  --el-table-header-bg-color: #f9f9f9;
  margin-bottom: 30px;
}
:deep(.feature-column) {
  background-color: #f9f9f9;
}
.feature-name {
  font-weight: 600;
  color: #333;
  font-size: 1rem;
}
.feature-description {
  color: var(--el-text-color-secondary);
  font-size: 0.85rem;
  margin-top: 5px;
}
.tariff-value {
  text-align: center;
  padding: 15px;
  font-weight: 500;
}
.highlight {
  background-color: #f0e6f3;
  font-weight: 600;
}
/* Адаптация для мобильных */
@media (max-width: 768px) {
  .comparison-section {
    padding: 50px 0;
  }
  .section-title {
    font-size: 1.8rem;
  }
  .section-subtitle {
    font-size: 1rem;
  }
  :deep(.el-table__body-wrapper) {
    overflow-x: auto;
  }
}

.triggers-section {
  padding: 80px 0;
  background-color: white;
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
  color: var(--el-text-color-secondary);
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 50px;
}

.trigger-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  height: 100%;
  border-top: 4px solid;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.trigger-card:hover {
  transform: translateY(-5px);
}

.trigger-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.trigger-title {
  color: #333;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.trigger-tag {
  font-weight: 600;
  border: none;
}

.trigger-text {
  color: var(--el-text-color-primary);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 20px;
}

.trigger-solution {
  padding-left: 0;
  list-style: none;
}

.trigger-solution li {
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  color: var(--el-text-color-regular);
}

.trigger-solution .el-icon {
  color: #00b894;
  margin-right: 8px;
  margin-top: 3px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .triggers-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .trigger-card {
    padding: 20px;
  }
  
  .trigger-title {
    font-size: 1.1rem;
  }
}
</style>