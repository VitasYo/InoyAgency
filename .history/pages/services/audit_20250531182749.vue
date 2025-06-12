<template>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Точно в цель аудит</title>
</head>
<body>
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
        <img src="" alt="Скриншот аудита" />
      </div>
    </div>
  </section>

  <section class="audience">
    <div class="container">
      <h2>Кому подойдёт этот аудит?</h2>
      <div class="cards">
        <div class="card">
          <img src="" alt="Бизнес" />
          <p>Малый и средний бизнес: «Падает выручка? Поймём, почему».</p>
        </div>
        <div class="card">
          <img src="" alt="Эксперты" />
          <p>Эксперты и практики: «Ведёте соцсети, но нет отдачи?»</p>
        </div>
        <div class="card">
          <img src="" alt="Курсы" />
          <p>Онлайн-школы: «Есть сайт/лендинг, но нет конверсии?»</p>
        </div>
      </div>
    </div>
  </section>

  <section class="what-we-check">
    <div class="container">
      <h2>Что мы проверим</h2>
      <div class="columns">
        <div class="column">
          <img src="" alt="Соцсети" />
          <h3>Соцсети</h3>
          <ul>
            <li>Шапка и оформление</li>
            <li>Контент и вовлечённость</li>
            <li>Призыв к действию</li>
          </ul>
        </div>
        <div class="column">
          <img src="" alt="Сайт" />
          <h3>Сайт</h3>
          <ul>
            <li>Удобство и структура</li>
            <li>SEO-основа</li>
            <li>Оффер и понятность</li>
          </ul>
        </div>
        <div class="column">
          <img src="" alt="Статистика" />
          <h3>Статистика</h3>
          <ul>
            <li>Метрики GA/Яндекс</li>
            <li>Статистика соцсетей</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="result" id="result">
    <div class="container">
      <h2>Как выглядит результат?</h2>
      <ul>
        <li>PDF-отчёт с ошибками и сильными сторонами</li>
        <li>План действий: срочно / в течение месяца / потом</li>
        <li>Возможность созвона с пояснениями</li>
      </ul>
      <img src="" alt="Пример отчета" />
    </div>
  </section>

  <section class="checklist">
    <div class="container">
      <h2>Когда вам нужен аудит?</h2>
      <ul>
        <li>Чувствуете, что «что-то не так», но не понимаете, что</li>
        <li>Планируете запуск рекламы — а вдруг сайт не готов?</li>
        <li>Ведёте соцсети, но реакции нет</li>
      </ul>
    </div>
  </section>

  <section class="why-us">
    <div class="container">
      <h2>Почему выбирают нас</h2>
      <div class="reasons">
        <div class="reason">
          <img src="" alt="Системный подход" />
          <h3>Системный подход</h3>
          <p>Анализируем сайт, контент и маркетинг — не по верхам, а в комплексе.</p>
        </div>
        <div class="reason">
          <img src="" alt="Простой язык" />
          <h3>Понятный язык</h3>
          <p>Отчёт легко читается, без маркетингового тумана и сложных терминов.</p>
        </div>
        <div class="reason">
          <img src="" alt="Опыт и кейсы" />
          <h3>Опыт и кейсы</h3>
          <p>Работаем на основе практики — покажем, как улучшали аналогичные проекты.</p>
        </div>
        <div class="reason">
          <img src="" alt="Быстро" />
          <h3>Быстро</h3>
          <p>3–5 дней и вы уже знаете, что мешает росту и что делать дальше.</p>
        </div>
      </div>
    </div>
  </section>
</body>
</template>

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
    h2 {
      font-size: 28px;
      margin-bottom: 40px;
      text-align: center;
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
    .audience, .what-we-check, .result, .checklist, .why-us {
      background-color: #ffffff;
      text-align: center;
    }
    .cards, .columns, .reasons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
    .card, .column, .reason {
      background-color: #f2f2f2;
      padding: 30px;
      border-radius: 12px;
      width: 300px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }
    .card img, .column img, .reason img {
      width: 50px;
      margin-bottom: 15px;
    }
    .card p, .reason p {
      font-size: 16px;
    }
    .column h3, .reason h3 {
      margin-bottom: 10px;
      font-size: 20px;
      color: #0b2545;
    }
    .column ul {
      padding-left: 20px;
      text-align: left;
    }
    .column li {
      margin-bottom: 8px;
      font-size: 16px;
    }
    .result ul {
      max-width: 700px;
      margin: 0 auto 30px;
      text-align: left;
    }
    .result img {
      max-width: 100%;
      margin-top: 20px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }
    .checklist {
      background: linear-gradient(120deg, #eef1f6, #f9f9f9);
    }
    .checklist ul {
      max-width: 700px;
      margin: 0 auto;
      list-style: none;
      padding-left: 0;
    }
    .checklist li::before {
      content: "✔";
      color: #ff7a00;
      margin-right: 10px;
    }
    .checklist li {
      font-size: 17px;
      margin-bottom: 12px;
    }
    @media (max-width: 768px) {
      .hero .container, .columns, .cards, .reasons {
        flex-direction: column;
        align-items: center;
      }
      .hero-content, .hero-image, .column, .card, .reason {
        width: 100%;
      }
    }
  </style>