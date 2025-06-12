<template>
  <section class="hero-block">
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">Экспресс-сайт</h1>
        <p class="hero-subtitle">
          Готовый сайт за 1–2 недели для быстрого запуска вашего бизнеса онлайн
        </p>
        <el-button type="primary" class="cta-button" size="large">Заполнить бриф</el-button>
      </div>
      <div class="hero-image">
        <img src="@/assets/services/express_site.png" alt="Экспресс-сайт" />
      </div>
    </div>
  </section>

  <section class="target-audience">
    <div class="container audience-grid">
      <div class="audience-card" v-for="(item, index) in audiences" :key="index">
        <div class="audience-icon">
          <el-icon><component :is="item.icon" /></el-icon>
        </div>
        <h3 class="audience-title">{{ item.title }}</h3>
        <p class="audience-desc">{{ item.desc }}</p>
      </div>
    </div>
  </section>

  <section class="service-steps">
    <div class="container">
      <h2 class="section-title">Что входит в услугу</h2>
      <div class="steps-grid">
        <div class="step-item" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="benefits">
    <div class="container">
      <h2 class="section-title">Преимущества экспресс-сайта</h2>
      <div class="benefits-grid">
        <div class="benefit-card" v-for="(benefit, index) in benefits" :key="index">
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="site-structure">
    <div class="container">
      <h2 class="section-title">Типовая структура экспресс-сайта</h2>
      <el-steps direction="vertical" :active="active" align-center finish-status="success" class="structure-steps">
        <el-step
          v-for="(page, index) in pages"
          :key="index"
          :title="page.title"
          :description="page.desc"
        />
      </el-steps>
      <div class="step-toggle">
        <el-button @click="nextStep" type="primary" size="default">Следующий шаг</el-button>
      </div>
    </div>
  </section>

  <section class="design-examples">
    <div class="container">
      <h2 class="section-title">Примеры шаблонов и дизайн-решений</h2>
      <div class="design-gallery">
        <div class="design-item" v-for="(item, index) in designs" :key="index">
          <img :src="item.image" :alt="item.title" class="design-img" />
          <h3 class="design-title">{{ item.title }}</h3>
          <p class="design-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing-block">
    <div class="container">
      <h2 class="section-title">Сроки и стоимость</h2>
      <div class="pricing-cards">
        <div class="pricing-card" v-for="(item, index) in pricing" :key="index">
          <h3 class="pricing-title">{{ item.title }}</h3>
          <p class="pricing-range">{{ item.range }}</p>
          <ul class="pricing-features">
            <li v-for="(feat, i) in item.features" :key="i">{{ feat }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="process-block">
    <div class="container">
      <h2 class="section-title">Процесс работы</h2>
      <ol class="process-list">
        <li v-for="(step, index) in process" :key="index" class="process-step">
          <span class="step-day">День {{ step.day }}:</span>
          <div class="step-content">
            <strong class="step-title">{{ step.title }}</strong>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>


</template>

<script setup lang="ts">
import { User, Briefcase, Coffee, School } from '@element-plus/icons-vue'

const audiences = [
  {
    icon: Briefcase,
    title: 'Малый бизнес',
    desc: 'Кафе, салоны красоты, турагентства, клининговые услуги и др.',
  },
  {
    icon: User,
    title: 'Онлайн-эксперты',
    desc: 'Фрилансеры, коучи, авторы курсов и интенсивов.',
  },
  {
    icon: School,
    title: 'Помогающие практики',
    desc: 'Психологи, нутрициологи, эзотерики — быстрое решение для онлайн-присутствия.',
  },
  {
    icon: Coffee,
    title: 'Стартапы',
    desc: 'Запуск MVP или базовой версии проекта без долгой подготовки.',
  },
]

const steps = [
  {
    title: 'Бриф и консультация',
    desc: 'Определяем задачи сайта, цели и особенности бизнеса, собираем референсы и фирменный стиль.',
  },
  {
    title: 'Выбор дизайна и адаптация',
    desc: 'Подбираем шаблон, адаптируем его под фирменные цвета и согласовываем структуру главной страницы.',
  },
  {
    title: 'Настройка домена и хостинга',
    desc: 'Покупаем домен (если его нет), настраиваем хостинг и подключаем SSL-сертификат.',
  },
  {
    title: 'Создание страниц',
    desc: 'Создаём 4–5 страниц, добавляем тексты, изображения и формы обратной связи.',
  },
  {
    title: 'Базовая SEO-настройка',
    desc: 'Настраиваем мета-теги, карту сайта, ЧПУ, подключаем аналитику и тестируем сайт.',
  },
  {
    title: 'Запуск проекта',
    desc: 'Передаём все доступы, обучаем при необходимости и выводим сайт в сеть.',
  },
]

const benefits = [
  {
    title: 'Быстрый запуск',
    desc: 'Готовый сайт за 5–10 дней без бюрократии и затягиваний.',
  },
  {
    title: 'Всё включено',
    desc: 'От консультации до размещения — берём на себя все технические детали.',
  },
  {
    title: 'Адаптация под бизнес',
    desc: 'Шаблон не значит скучно — оформим сайт в вашем стиле.',
  },
  {
    title: 'Удобно и просто',
    desc: 'Работаем с популярными платформами: WordPress, Tilda, Wix.',
  },
]

const pages = [
  {
    title: 'Главная',
    desc: 'Краткая презентация компании, основные предложения и призыв к действию.',
  },
  {
    title: 'О компании',
    desc: 'Информация о бренде, миссии, команде, преимуществах.',
  },
  {
    title: 'Услуги',
    desc: 'Описание предоставляемых услуг, цен и форматов.',
  },
  {
    title: 'Контакты',
    desc: 'Форма обратной связи, карта, ссылки на мессенджеры и соцсети.',
  },
  {
    title: 'Портфолио / Отзывы',
    desc: 'Работы, кейсы или отзывы клиентов для повышения доверия.',
  },
]
const active = ref(0)

function nextStep() {
  active.value = (active.value + 1) % pages.length
}

const designs = [
  {
    title: 'Минимал',
    desc: 'Лаконичный дизайн с акцентом на структуру и белое пространство.',
  },
  {
    title: 'Бизнес',
    desc: 'Универсальный стиль для корпоративных задач и услуг.',
  },
  {
    title: 'Креатив',
    desc: 'Оригинальные сетки, нестандартные элементы и яркие цвета.',
  },
]

const pricing = [
  {
    title: 'Базовый',
    range: '20 000 – 30 000 ₽',
    features: ['Шаблонный дизайн', '4–5 страниц', 'Без сложных интеграций'],
  },
  {
    title: 'Расширенный',
    range: '30 000 – 60 000 ₽',
    features: ['Уникальные макеты', '5–7 страниц', 'Копирайтинг + плагины'],
  },
  {
    title: 'Индивидуальный',
    range: 'По договорённости',
    features: ['Доп. функции', 'Сложная анимация', 'Мультиязычность'],
  },
]

const process = [
  { day: 1, title: 'Бриф и выбор шаблона', desc: 'Обсуждение задач, сбор референсов и утверждение дизайна.' },
  { day: '2–3', title: 'Настройка домена и хостинга', desc: 'Покупка/подключение домена, настройка хостинга, SSL.' },
  { day: '4–5', title: 'Верстка главной страницы', desc: 'Создание и согласование главной страницы, базовая SEO-настройка.' },
  { day: 6, title: 'Создание остальных страниц', desc: 'Разметка внутренних страниц, подключение форм и изображений.' },
  { day: '7–8', title: 'Тестирование и запуск', desc: 'Проверка сайта, финальные правки, передача доступов клиенту.' },
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-block {
  padding: 60px 20px;
  background: #f9f9f9;
}
.hero-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.hero-text {
  flex: 1 1 300px;
}
.hero-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
}
.hero-subtitle {
  font-size: 18px;
  margin-bottom: 20px;
  max-width: 480px;
}
.cta-button {
  font-weight: 600;
}
.hero-image {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
}
.hero-image img {
  max-width: 100%;
  height: auto;
}

.target-audience {
  padding: 60px 20px;
  background: white;
}
.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
.audience-card {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.audience-icon {
  font-size: 32px;
  margin-bottom: 10px;
  color: #9564aa;
}
.audience-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}
.audience-desc {
  font-size: 16px;
  color: #555;
}

.service-steps {
  padding: 60px 20px;
  background: #f9f9f9;
}
.section-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
}
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
.step-item {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}
.step-item:hover {
  transform: translateY(-4px);
}
.step-number {
  font-size: 24px;
  font-weight: bold;
  color: #9564aa;
  margin-bottom: 10px;
}
.step-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}
.step-desc {
  font-size: 16px;
  color: #444;
}

.benefits {
  padding: 60px 20px;
  background: white;
}
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
.benefit-card {
  background: #f4f4f4;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}
.benefit-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.benefit-desc {
  font-size: 16px;
  color: #555;
}

.site-structure {
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: center;
}
::v-deep(.structure-steps) {
  --el-step-icon-size: 40px;
  --el-step-title-font-size: 22px;
  --el-step-description-font-size: 18px;
  margin: 0 auto;
}
.el-step__main {
  padding: 24px 0 !important;
}
.el-step__title {
  font-weight: 600;
  text-align: center;
}
.el-step__description {
  color: #444;
  text-align: center;
}
.step-toggle {
  margin-top: 20px;
}

.design-examples {
  padding: 60px 20px;
  background: white;
  text-align: center;
}
.design-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
.design-item {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}
.design-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}
.design-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}
.design-desc {
  font-size: 16px;
  color: #555;
}

.pricing-block {
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: center;
}
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
.pricing-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
}
.pricing-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}
.pricing-range {
  font-size: 18px;
  font-weight: 500;
  color: #9564aa;
  margin-bottom: 12px;
}
.pricing-features {
  padding-left: 20px;
  font-size: 16px;
  color: #444;
}
.pricing-features li {
  margin-bottom: 6px;
}


@media (max-width: 575px) {
  .hero-title {
    font-size: 26px;
  }
  .hero-subtitle {
    font-size: 16px;
  }
  .audience-title {
    font-size: 18px;
  }
  .audience-desc {
    font-size: 14px;
  }
  .section-title {
    font-size: 24px;
  }
  .step-title, .benefit-title {
    font-size: 18px;
  }
  .step-desc, .benefit-desc {
    font-size: 14px;
  }

  .structure-steps {
    --el-step-title-font-size: 18px;
    --el-step-description-font-size: 16px;
  }

  .design-title {
    font-size: 18px;
  }
  .design-desc {
    font-size: 14px;
  }

  .pricing-title {
    font-size: 20px;
  }
  .pricing-range {
    font-size: 16px;
  }
  .pricing-features {
    font-size: 14px;
  }
}
</style>
