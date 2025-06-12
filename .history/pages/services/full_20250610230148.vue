<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Полный маркетинг под ключ</h1>
      <p class="hero-subtitle">Выберите тариф, который подходит вашему бизнесу, и делегируйте маркетинг профессионалам</p>
      <a href="#tariffs" class="hero-button">Подробнее о услугах</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: #62007b; /* Темно-фиолетовый акцентный фон */
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
  background-color: #ff4500; /* Яркий оранжевый */
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