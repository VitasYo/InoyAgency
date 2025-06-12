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
</script>

<style scoped>
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
}
</style>
