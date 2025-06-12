<template>
  <section class="one-time-setup">

    <!-- Блок 1: Заголовок -->
    <div class="setup-header">
      <h1>Разовые технические настройки</h1>
      <p class="subtitle">
        Быстрое решение точечных digital-задач — от настройки чат-бота до запуска таргетированной рекламы.
      </p>
      <el-button type="primary" class="cta-button">Получить расчёт</el-button>
    </div>

    <!-- Блок 2: Кому подойдёт -->
    <div class="setup-audience">
      <h2>Кому подойдёт услуга?</h2>
      <div class="audience-grid">
        <div class="audience-card">
          <span>🧠</span>
          <p>Экспертам и малым бизнесам<br> с уже работающими соцсетями</p>
        </div>
        <div class="audience-card">
          <span>🌿</span>
          <p>Помогающим практикам —<br> психологам, коучам, нутрициологам</p>
        </div>
        <div class="audience-card">
          <span>📚</span>
          <p>Онлайн-школам и авторам курсов<br> для настройки GetCourse</p>
        </div>
        <div class="audience-card">
          <span>📣</span>
          <p>Тем, кто хочет запустить<br> короткую рекламную акцию</p>
        </div>
      </div>
    </div>
  </section>
    <!-- Блок 3: Что входит в услугу -->
  <div class="setup-details">
    <h2>Что входит в разовую настройку?</h2>
    <el-tabs class="custom-tabs" type="border-card">
      <el-tab-pane label="🤖 Чат-бот">
        <ul>
          <li><strong>Минимум:</strong> Подключение, базовые сценарии, тестирование</li>
          <li><strong>Расширено:</strong> Ветвления, интеграция с CRM, авторассылки</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="📣 Таргет ВК">
        <ul>
          <li><strong>Минимум:</strong> Рекламный кабинет, аудитория, креативы, контроль</li>
          <li><strong>Расширено:</strong> A/B-тесты, ретаргетинг, сегментирование</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="📄 Лендинг">
        <ul>
          <li>Разметка + структура</li>
          <li>Интеграция с оплатой</li>
          <li>Адаптивность и базовый UI</li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>

  <!-- Блок 4: Примеры задач -->
  <div class="setup-cases">
    <h2>Примеры задач, которые мы решаем</h2>
    <div class="cases-grid">
      <div class="case-card">
        <span>📍</span>
        <p>Чат-бот для записи на консультацию<br> через Telegram и ВК</p>
      </div>
      <div class="case-card">
        <span>🎯</span>
        <p>Одноразовая реклама<br> курса с акцией</p>
      </div>
      <div class="case-card">
        <span>💳</span>
        <p>Лендинг на GetCourse<br> с подключением оплаты</p>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.one-time-setup {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;

  .setup-header {
    text-align: center;
    margin-bottom: 60px;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .subtitle {
      font-size: 1.2rem;
      margin: 15px 0 25px;
      color: #555;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-button {
      font-size: 16px;
      padding: 12px 24px;
      border-radius: 8px;
    }
  }

  .setup-audience {
    h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 40px;
    }

    .audience-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;

      .audience-card {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 16px;
        text-align: center;
        transition: box-shadow 0.3s;

        &:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }

        span {
          font-size: 2rem;
          display: block;
          margin-bottom: 12px;
        }

        p {
          font-size: 1rem;
          color: #333;
        }
      }
    }
  }
}
.setup-details {
  margin: 80px 0;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .custom-tabs {
    max-width: 900px;
    margin: 0 auto;

    ul {
      padding-left: 20px;

      li {
        margin-bottom: 10px;
        font-size: 1rem;

        strong {
          color: #333;
        }
      }
    }
  }
}

.setup-cases {
  margin: 80px 0;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;

    .case-card {
      background: #f0f3f7;
      padding: 20px;
      border-radius: 16px;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
      }

      span {
        font-size: 2rem;
        display: block;
        margin-bottom: 12px;
      }

      p {
        font-size: 1rem;
        color: #333;
        line-height: 1.4;
      }
    }
  }
}

</style>
