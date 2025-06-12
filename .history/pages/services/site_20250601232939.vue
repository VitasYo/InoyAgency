<section class="site-structure">
  <div class="container">
    <h2 class="section-title">Типовая структура экспресс-сайта</h2>
    <div class="structure-grid">
      <div class="structure-item" v-for="(page, index) in pages" :key="index">
        <h3 class="structure-title">{{ page.title }}</h3>
        <p class="structure-desc">{{ page.desc }}</p>
      </div>
    </div>
  </div>
</section>

<script setup lang="ts">
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
</script>

<style scoped>
.site-structure {
  padding: 60px 20px;
  background: #f9f9f9;
}
.structure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
.structure-item {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}
.structure-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.structure-desc {
  font-size: 16px;
  color: #555;
}

@media (max-width: 575px) {
  .structure-title {
    font-size: 18px;
  }
  .structure-desc {
    font-size: 14px;
  }
}
</style>
