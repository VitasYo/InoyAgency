<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Точно в цель аудит</title>
</head>
<body>
  <!-- Hero Блок -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Выявим слабые места в вашем продвижении за 3 дня</h1>
        <p>Аудит сайта и соцсетей с конкретными рекомендациями — что исправить и как</p>
        <div class="hero-buttons">
          <button class="btn btn-orange">Получить аудит</button>
          <a href="#result" class="btn btn-white">Пример отчёта</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="/images/audit-laptop.png" alt="Скриншот аудита" />
      </div>
    </div>
  </section>

  <!-- Для кого аудит -->
  <section class="audience">
    <div class="container">
      <h2>Кому подойдёт этот аудит?</h2>
      <div class="cards">
        <div class="card">
          <img src="/icons/business.svg" alt="Бизнес" />
          <p>Малый и средний бизнес: «Падает выручка? Поймём, почему».</p>
        </div>
        <div class="card">
          <img src="/icons/expert.svg" alt="Эксперты" />
          <p>Эксперты и практики: «Ведёте соцсети, но нет отдачи?»</p>
        </div>
        <div class="card">
          <img src="/icons/course.svg" alt="Курсы" />
          <p>Онлайн-школы: «Есть сайт/лендинг, но нет конверсии?»</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Что проверим -->
  <section class="what-we-check">
    <div class="container">
      <h2>Что мы проверим</h2>
      <div class="columns">
        <div class="column">
          <img src="/icons/social.svg" alt="Соцсети" />
          <h3>Соцсети</h3>
          <ul>
            <li>Шапка и оформление</li>
            <li>Контент и вовлечённость</li>
            <li>Призыв к действию</li>
          </ul>
        </div>
        <div class="column">
          <img src="/icons/website.svg" alt="Сайт" />
          <h3>Сайт</h3>
          <ul>
            <li>Удобство и структура</li>
            <li>SEO-основа</li>
            <li>Оффер и понятность</li>
          </ul>
        </div>
        <div class="column">
          <img src="/icons/stats.svg" alt="Статистика" />
          <h3>Статистика</h3>
          <ul>
            <li>Метрики GA/Яндекс</li>
            <li>Статистика соцсетей</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</body>
</html>

<style>
    body {
        margin: 0;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        background-color: #f9f9f9;
        color: #1a1a1a;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 20px;
    }

    .hero {
        background-color: #0b2545;
        color: #ffffff;
        padding: 80px 20px;
    }

    .hero .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .hero-content {
        flex: 1 1 50%;
    }

    .hero-content h1 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .hero-content p {
        font-size: 18px;
        margin-bottom: 30px;
    }

    .hero-buttons {
        display: flex;
        gap: 15px;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;
    }

    .btn-orange {
        background-color: #ff7a00;
        color: #fff;
    }

    .btn-white {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
    }

    .hero-image {
        flex: 1 1 45%;
        text-align: center;
    }

    .hero-image img {
        max-width: 100%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .audience {
        background-color: #ffffff;
        text-align: center;
    }

    .audience h2 {
        font-size: 28px;
        margin-bottom: 40px;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }

    .card {
        background-color: #f2f2f2;
        padding: 30px;
        border-radius: 12px;
        width: 300px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }

    .card img {
        width: 50px;
        margin-bottom: 20px;
    }

    .card p {
        font-size: 16px;
    }

    .what-we-check {
        background-color: #eef1f6;
    }

    .what-we-check h2 {
        text-align: center;
        font-size: 28px;
        margin-bottom: 50px;
    }

    .columns {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .column {
        background-color: #ffffff;
        flex: 1 1 30%;
        padding: 30px;
        border-radius: 12px;
        transition: background-color 0.3s;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .column:hover {
        background-color: #dfe7f1;
    }

    .column img {
        width: 40px;
        margin-bottom: 15px;
    }

    .column h3 {
        margin-bottom: 10px;
        font-size: 20px;
    }

    .column ul {
        padding-left: 20px;
        text-align: left;
    }

    .column li {
        margin-bottom: 8px;
        font-size: 16px;
    }

    @media (max-width: 768px) {
        .hero .container,
        .columns,
        .cards {
        flex-direction: column;
        align-items: center;
        }

        .hero-content,
        .hero-image {
        flex: 1 1 100%;
        text-align: center;
        }

        .column,
        .card {
        width: 100%;
        }
    }
</style>