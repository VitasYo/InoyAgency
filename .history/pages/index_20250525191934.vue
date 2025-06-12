<template>
  <section class="main_block">
    <div class="main_block_content">
      <div class="main_block_text">
        <h1 class="main_block_title">InoyAgency</h1>
        <p class="main_block_subtitle">
          От идеи до результата: комплексное продвижение вашего бизнеса онлайн
        </p>
        <div class="main_block_buttons">
          <el-button class="btn btn--orange" id="button" @click="popupVisible = true">ЗАПИСАТЬСЯ</el-button>
          <Popup v-model="popupVisible" />
          <el-button type="primary" @click="scrollToBrief" class="btn btn--white" id="button" >ПОЛУЧИТЬ РАСЧЁТ</el-button>
        </div>
      </div>
      <div class="main_block_image">
        <div class="main_image">
          <img src="@/assets/main_people.png" alt="" />
          <img
            class="image-overlay"
            src="@/assets/main_for_people.png"
            alt="Эффект для команды"
          />
        </div>
      </div>
      <div class="main_block_stats">
        <div class="stat">
          <img src="@/assets/icons/icon1.svg" alt="" class="stat_icon" />
          <p><strong>20</strong><br />Довольных клиентов</p>
        </div>
        <div class="stat">
          <img src="@/assets/icons/icon2.svg" alt="" class="stat_icon" />
          <p><strong>5 лет</strong><br />Опыт работы</p>
        </div>
        <div class="stat">
          <img src="@/assets/icons/icon3.svg" alt="" class="stat_icon" />
          <p><strong>5 млн. руб</strong><br />Прнесли клиентам</p>
        </div>
        <div class="stat">
          <img src="@/assets/icons/icon4.svg" alt="" class="stat_icon" />
          <p><strong>100 часов</strong><br />Отснятого материала</p>
        </div>
      </div>
    </div>
  </section>
  <div class="marquee_container">
    <div class="marquee">
      <span>
        Создание сайтов • Продвижение в соцсетях • SEO • Контент • Фото и видео
        • Полный цикл для вашего бизнеса &nbsp;&nbsp;
      </span>
      <span>
        Создание сайтов • Продвижение в соцсетях • SEO • Контент • Фото и видео
        • Полный цикл для вашего бизнеса &nbsp;&nbsp;
      </span>
    </div>
  </div>
  <div class="about_block">
    <div class="about_text_card">
      <div class="about_title">О нас</div>
      <div class="about_line"></div>
      <div class="about_text">
        За каждым проектом Inoy Agency — команда профессионалов, объединённых
        общей целью: развивать бизнес клиентов в цифровой среде. <br />
        Мы работаем с идеями, превращая их в эффективные инструменты: от сайта
        до стратегии в социальных сетях. В основе — анализ, экспертиза и
        ответственность за результат.
      </div>
      <NuxtLink to="/about" style="align-self: flex-end;">
        <button class="about_button">Узнать о команде</button>
      </NuxtLink>
    </div>
    <div class="about_photo_card">
      <img src="@/assets/about_people.png" alt=" " />
    </div>
  </div>
  <div class="services" id="services">
    <div class="services_container">
      <h1 class="services-title">Наши ключевые услуги</h1>
      <h2 class="services-description">Что вам нужно в первую очередь?</h2>
      <div class="services-grid">
        <div class="service-wrapper">
          <img
            src="@/assets/services/one_time_setup.png"
            class="service-img"
            alt="..."
          />
          <ServiceCard
            title="Разовая тех настройка"
            description="Разовые услуги по запуску рекламы, настройке чат-ботов, созданию посадочных страниц, интеграции CRM и других digital-решений."
            price="12 000"
          />
        </div>
        <div class="service-wrapper">
          <img
            src="@/assets/services/express_site.png"
            class="service-img"
            alt="..."
          />
          <ServiceCard
            title="Экспресс-сайт"
            description="Создание адаптивного и функционального сайта, соответствующего современным требованиям дизайна, SEO и UX. Срок: от 7 рабочих дней."
            price="15 000"
          />
        </div>
        <div class="service-wrapper">
          <img
            src="@/assets/services/audit.png"
            class="service-img"
            alt="..."
          />
          <ServiceCard
            title="Точно-в-цель Аудит"
            description="Комплексный аудит: анализ сайта, соцсетей, контента и рекламы. В результате — подробный отчёт и чёткие рекомендации."
            price="20 000"
          />
        </div>
        <div class="service-wrapper">
          <img
            src="@/assets/services/marketing_full.png"
            class="service-img"
            alt="..."
          />
          <ServiceCard
            title="Маркетинг под ключ"
            description="Комплексное продвижение в соцсетях: от контента до рекламы. Три тарифа — от простого ведения до полного маркетингового аутсорса."
            price="30 000"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="advantages">
    <div class="advantages_container">
      <h1 class="advantages_title">Мы делаем иначе</h1>
      <div class="advantages_cards">
        <div class="advantages_card">
          <div>
            <img
              src="@/assets/icons/checkmark.png"
              alt=""
              class="advantages_checkmark"
            />
          </div>
          <div class="advantages_card_text">
            <h2 class="advantages_card_title">Индивидуальный подход</h2>
            <div class="advantages_card_description">
              Мы не используем шаблоны и типовые решения, а разрабатываем
              стратегию и визуал под специфику вашего бизнеса.
            </div>
          </div>
        </div>
        <div class="advantages_card">
          <div>
            <img
              src="@/assets/icons/checkmark.png"
              alt=""
              class="advantages_checkmark"
            />
          </div>
          <div class="advantages_card_text">
            <h2 class="advantages_card_title">Работаем прозрачно</h2>
            <div class="advantages_card_description">
              Вы всегда понимаете, на каком этапе находится проект, и какие
              результаты уже достигнуты.
            </div>
          </div>
        </div>
        <div class="advantages_card">
          <div>
            <img
              src="@/assets/icons/checkmark.png"
              alt=""
              class="advantages_checkmark"
            />
          </div>
          <div class="advantages_card_text">
            <h2 class="advantages_card_title">Команда специалистов</h2>
            <div class="advantages_card_description">
              Мы, как проффесионалы по дизайну, продвижению и контенту,
              закрываем полный цикл работ: от разработки до запуска и поддержки.
            </div>
          </div>
        </div>
        <div class="advantages_card">
          <div>
            <img
              src="@/assets/icons/checkmark.png"
              alt=""
              class="advantages_checkmark"
            />
          </div>
          <div class="advantages_card_text">
            <h2 class="advantages_card_title">Сфокусированы на результате</h2>
            <div class="advantages_card_description">
              Гибко реагируем на изменения и делаем всё возможное, чтобы
              реализовать цели проекта.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="portfolio">
    <div class="portfolio_container">
      <div class="portfolio_title">Проекты, которые говорят за нас</div>
      <div class="portfolio-items">
        <div class="portfolio-item">
          <a href="https://youokschool.ru/" target="_blank">
            <img
              src="@/assets/cases/site1.png"
              alt="Сайт YouOK"
              class="portfolio_image"
            />
          </a>
          <div class="portfolio_details">
            <p class="portfolio_site">Сайт для школы английского</p>
            <p class="portfolio_main_text">
              <strong>+7500 подписчиков</strong><br />
              за первый месяц запуска
            </p>
            <p class="portfolio_main_text">
              <strong>70% заявок</strong><br />
              приходят с сайта
            </p>
            <p class="portfolio_under_text">
              Автоматизировали запись на пробный урок, усилили доверие за счёт
              личного подхода
            </p>
          </div>
        </div>
        <div class="portfolio-item">
          <a href="https://supertelovrn.ru/" target="_blank">
            <img
              src="@/assets/cases/site2.png"
              alt="Сайт SuperTelo"
              class="portfolio_image"
            />
          </a>
          <div class="portfolio_details">
            <p class="portfolio_site">Сайт для студии похудения</p>
            <p class="portfolio_main_text">
              <strong>+30% к конверсии</strong><br />
              с таргета
            </p>
            <p class="portfolio_main_text">
              <strong>Рост доверия</strong><br />
              благодаря понятной подаче услуг
            </p>
            <p class="portfolio_under_text">
              Больше заявок с первого захода. Новый сайт = меньше отказов
            </p>
          </div>
        </div>
        <div class="portfolio-item">
          <a href="https://rodnye-tropy.ru/" target="_blank">
            <img
              src="@/assets/cases/site3.png"
              alt="Сайт РодныеТропы"
              class="portfolio_image"
            />
          </a>
          <div class="portfolio_details">
            <p class="portfolio_site">Сайт для женских туров</p>
            <p class="portfolio_main_text">
              <strong>+40% броней</strong><br />
              после запуска
            </p>
            <p class="portfolio_main_text">
              <strong>2 недели</strong><br />
              и все туры на сезон распроданы
            </p>
            <p class="portfolio_under_text" id="brief">
              Показали эмоции и атмосферу — не просто продаём туры, а мечту
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="brief">
    <div class="brief_container">
      <div class="brief_title">Ответь на вопросы и рассчитай стоимость своего проекта</div>
      <div class="brief_card" v-if="!isSubmitted">
        <div class="question_title">{{ currentQuestion.title }}</div>
        <div class="options_group">
          <div
            class="option_card"
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :class="{ selected: answers[activeSlide] === option }"
            @click="selectOption(option)"
          >
            {{ option }}
          </div>
        </div>
        <div class="progress_bar">
          <div class="progress_fill" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="navigation">
          <el-button @click="prevSlide" :disabled="activeSlide === 0">Назад</el-button>
          <el-button @click="nextSlide" type="primary" :disabled="!answers[activeSlide]">
            {{ activeSlide === questions.length - 1 ? 'Готово' : 'Далее' }}
          </el-button>
        </div>
      </div>
      <div class="brif_card" v-else>
        <div class="question_title">Спасибо за ответы!</div>
        <p class="thank_you_text">
          Мы скоро свяжемся с вами для обсуждения проекта. <br />
          А пока, пожалуйста, не забудьте заполнить <strong>форму обратной связи</strong>.
        </p>
        <div class="price_result">
          <span class="label">Оценочная стоимость:</span>
          <span class="value">{{ finalPrice }} ₽ / мес.</span>
        </div>
      </div>
    </div>
  </div>
  <div class="stages">
    <div class="stages_container">
      <div class="stages_title">Этапы работы</div>
      <el-steps
        :active="stages_active"
        finish-status="success"
        :direction="isMobile ? 'vertical' : 'horizontal'"
        class="stages-steps"
      >
        <el-step title="Бриф" icon="Document" />
        <el-step title="Анализ" icon="Search" />
        <el-step title="Разработка" icon="Edit" />
        <el-step title="Запуск" icon="Promotion" />
      </el-steps>
      <transition name="fade">
        <div class="step-description" :key="stages_active">
          <h3 v-if="stages_active === 0">
            Мы собираем информацию о вашем бизнесе, целях и предпочтениях.
          </h3>
          <h3 v-else-if="stages_active === 1">
            Проводим аудит, анализ конкурентов и определяем стратегию.
          </h3>
          <h3 v-else-if="stages_active === 2">
            Создаём структуру, дизайн и реализуем функциональность.
          </h3>
          <h3 v-else>
            Тестируем и запускаем готовый проект. Поддержка при необходимости.
          </h3>
        </div>
      </transition>
      <el-button class="next-btn" id="button" @click="next"
        >Следующий шаг</el-button
      >
    </div>
  </div>
  <div class="team">
    <div class="team_container">
      <div class="team_title">Наша команда</div>
      <div class="team_description">
        Вместе мы — команда, объединённая общей целью: создавать, продвигать и
        вдохновлять. Каждый участник вносит свой опыт и энергию, превращая идеи
        в ощутимые результаты.
      </div>
      <div class="team_diamond">
        <img
          src="@/assets/icons/diamond.svg"
          class="diamond_center"
          alt="Diamond"
        />
        <div class="team_card diamond_top_left">
          <a
            href="https://t.me/vitasyo"
            target="_blank"
            class="team_card_photo"
          >
            <img src="@/assets/team/Vitalik.jpg" alt="Виталий Долгов" />
          </a>
          <h3 class="team_card_name">Виталий Долгов</h3>
          <div class="team_card_job">Веб-разработчик</div>
          <div class="team_card_text">
            Разрабатывает архитектуру сайта и превращает макеты в живые
            интерфейсы. Отвечает за скорость, адаптивность и технологическое
            совершенство проектов.
          </div>
        </div>
        <div class="team_card diamond_top_right">
          <a
            href="https://t.me/cylimova"
            target="_blank"
            class="team_card_photo"
          >
            <img src="@/assets/team/Vika.jpg" alt="Виктория Сулимова" />
          </a>
          <h3 class="team_card_name">Виктория Сулимова</h3>
          <div class="team_card_job">Маркетолог</div>
          <div class="team_card_text">
            Формирует стратегию продвижения, анализирует рынок и помогает
            брендам находить своего клиента. Её кампаниями хочется делиться.
          </div>
        </div>
        <div class="team_card diamond_bottom_left">
          <a
            href="https://t.me/belyusov"
            target="_blank"
            class="team_card_photo"
          >
            <img src="@/assets/team/Maxim.jpg" alt="Максим Белоусов" />
          </a>
          <h3 class="team_card_name">Максим Белоусов</h3>
          <div class="team_card_job">Технический специалист</div>
          <div class="team_card_text">
            Настраивает хостинг, домены, сервисы и следит за технической
            стабильностью проекта. На страже всех интеграций и бэкапов.
          </div>
        </div>
        <div class="team_card diamond_bottom_right">
          <a
            href="https://t.me/ushakova_dora"
            target="_blank"
            class="team_card_photo"
          >
            <img src="@/assets/team/Nastya.jpg" alt="Анастасия Ушакова" />
          </a>
          <h3 class="team_card_name">Анастасия Ушакова</h3>
          <div class="team_card_job">Графический дизайнер</div>
          <div class="team_card_text">
            Создаёт визуальный стиль брендов, разрабатывает логотипы,
            презентации и гайды. Делает красиво и по делу.
          </div>
        </div>
        <div class="team_card diamond_bottom_center">
          <a
            href="https://t.me/mamasitaa05"
            target="_blank"
            class="team_card_photo"
          >
            <img src="@/assets/team/Aida.jpg" alt="Аида" />
          </a>
          <h3 class="team_card_name">Аида</h3>
          <div class="team_card_job">СММ специалист</div>
          <div class="team_card_text">
            Занимается контентом и продвижением в соцсетях. Следит за трендами и
            делает так, чтобы о вас говорили.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="FAQ">
    <div class="FAQ_container">
      <div class="FAQ_title">Часто задаваемые вопросы</div>
      <el-collapse v-model="FAQ_activeName" accordion class="FAQ_collapse">
        <el-collapse-item title="Сколько стоит сайт?" name="1">
          <div>
            Стоимость сайта зависит от его типа, объёма, дизайна и
            функциональности. Минимальный бюджет начинается от 30 000 ₽.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Сколько длится создание проекта?" name="2">
          <div>
            Средний срок — от 2 до 6 недель. Всё зависит от объема задач,
            вовлечённости и сроков согласований.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Вы можете продвигать наш проект?" name="3">
          <div>
            Да, мы предлагаем комплексное продвижение: SEO, таргетированную
            рекламу, контент, SMM. Подбираем стратегию под цели.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Как проходит работа?" name="4">
          <div>
            Работа делится на этапы: брифинг, стратегия, дизайн, разработка,
            тестирование и запуск. Всё прозрачно — вы участвуете на каждом шаге.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Насколько индивидуальны проекты?" name="5">
          <div>
            Мы не работаем по шаблонам. Каждый проект — уникальный, под задачи
            конкретного бизнеса и его аудиторию.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { useRoute } from "vue-router";
import ServiceCard from "~/components/service_card.vue";
import VanillaTilt from "vanilla-tilt";

export default defineComponent({
  name: "index",
  components: {
    ServiceCard,
  },
  data() {
    return {
      stages_active: 0,
      FAQ_activeName: "1",
      isMobile: false,
    };
  },
  methods: {
    next() {
      this.stages_active = (this.stages_active + 1) % 4;
    },
    updateScreenSize() {
      this.isMobile = window.innerWidth <= 768;
    },
    scrollToBrief() {
      const el = document.getElementById("brief");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
    mounted() {
    const route = useRoute(); // 👈 получить параметры маршрута

    // Проверка query и скролл к services
    if (route.query.scroll === "services") {
      nextTick(() => {
        const el = document.getElementById("services");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Обновляем статус экрана
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);

    // Подключаем VanillaTilt
    nextTick(() => {
      const tiltElements = document.querySelectorAll(".team_card_photo");
      if (tiltElements.length) {
        VanillaTilt.init(Array.from(tiltElements) as HTMLElement[], {
          max: 15,
          speed: 300,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  },
});
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '#app'
import Popup from '@/components/popup.vue'
const popupVisible = ref(false)

const activeSlide = ref(0)
const answers = ref<string[]>([])
const isSubmitted = ref(false)
const finalPrice = ref<number | null>(null)

const questions = [
  {
    title: 'Что вам нужно в первую очередь?',
    options: ['Экспресс-сайт', 'Аудит/стратегия', 'Ведение соцсетей', 'Полный маркетинг (аутсорс)']
  },
  {
    title: 'Какие задачи хотите решить?',
    options: ['Привлечь подписчиков', 'Получить заявки/продажи', 'Упаковать личный бренд', 'Повысить узнаваемость']
  },
  {
    title: 'У вас уже есть:',
    options: ['Instagram', 'VK', 'Telegram', 'Сайт', 'Ничего пока нет']
  },
  {
    title: 'Сколько площадок вести и сколько постов нужно в неделю?',
    options: ['1 площадка / 1–2 поста', '2 площадки / 3–4 поста', '3+ площадки / 5+ постов', 'Stories/Reels тоже нужны']
  },
  {
    title: 'Планируется запуск таргетированной рекламы?',
    options: ['Нет', 'Да, до 30 тыс.', '30–100 тыс.', '100+ тыс.', 'Нужен ретаргетинг']
  },
  {
    title: 'Когда нужно запуститься?',
    options: ['Стандарт (2–3 недели)', 'Быстрее (7–10 дней)', 'Срочно (до 5 дней)']
  },
  {
    title: 'Ваш ориентир бюджета (в мес.):',
    options: ['< 30 тыс.', '30–60 тыс.', '60–100 тыс.', '100+ тыс.']
  }
]

const currentQuestion = computed(() => questions[activeSlide.value])
const progress = computed(() => ((activeSlide.value + 1) / questions.length) * 100)

function selectOption(option: string) {
  answers.value[activeSlide.value] = option
  setTimeout(() => nextSlide(), 300) // авто-переход через 0.3 сек
}

async function nextSlide() {
  if (activeSlide.value < questions.length - 1) {
    activeSlide.value++
  } else {
    const price = calculatePrice(answers.value)
    finalPrice.value = price

    const response = await useFetch('http://localhost:3001/api/brief', {
      method: 'POST',
      body: {
        answers: answers.value,
        estimated_price: price,
        user_id: getOrSetUserId()
      }
    })

    if (response.data.value?.status === 'success') {
      isSubmitted.value = true
    } else {
      alert('Ошибка при отправке данных')
    }
  }
}

function calculatePrice(answers: string[]): number {
  let price = 0
  if (answers.includes('Экспресс-сайт')) price += 20000
  if (answers.includes('Полный маркетинг (аутсорс)')) price += 70000
  if (answers.includes('3+ площадки / 5+ постов')) price += 30000
  if (answers.includes('100+ тыс.')) price += 10000
  if (answers.includes('Stories/Reels тоже нужны')) price += 8000
  return price
}

function getOrSetUserId(): string {
  let id = localStorage.getItem('user_id')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('user_id', id)
  }
  return id
}

function prevSlide() {
  if (activeSlide.value > 0) {
    activeSlide.value--
  }
}
</script>

<style>
#button {
  background-color: #ff4500;
  color: white;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  padding: 22px 45px;
  text-transform: uppercase;
  border: 1px transparent solid;
}
#button:hover {
  background-color: transparent;
  color: #ff4500;
  border: 1px #ff4500 solid;
}
</style>

<style scoped>
.main_block {
  padding: 54px 0;
  background: linear-gradient(135deg, #3308b4, #a732d4);
  color: white;
}
.main_block_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.main_block_text {
  flex: 500px;
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
}
.main_block_title {
  font-size: 64px;
  font-weight: bold;
  color: #ff4500;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.main_block_subtitle {
  margin-top: 8%;
  font-size: 32px;
  margin-bottom: 30px;
  line-height: 1.5;
  text-align: left;
}
.main_block_buttons {
  margin-top: 14%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
#button.btn {
  padding: 12px 28px;
  font-weight: 500;
  border-radius: 15px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;
  height: 60px;
  width: 250px;
  border: 2px solid #000;
}
#button.btn--orange {
  background-color: #ff4500;
  color: white;
  box-shadow: 0 4px 10px rgba(255, 69, 0.3, 0.3);
}
#button.btn--white {
  background-color: white;
  color: black;
}
#button.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
#button.btn--orange:hover {
  box-shadow: 0 6px 12px rgba(255, 69, 0, 0.2);
}
.main_block_stats {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4%;
  gap: 15%;
}
.stat {
  text-align: left;
  flex: 1 1 160px;
}
.stat_icon {
  width: 70px;
}
.stat p strong {
  font-size: 20px;
  margin-bottom: 20px;
}
.main_block_image {
  position: relative;
  width: 100%;
  max-width: 518px;
  height: 540px;
}
.main_image {
  position: absolute;
  bottom: 0;
}
.main_block_image img {
  width: 100%;
  display: block;
}
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* Адаптив */
@media (max-width: 768px) {
  .main_block {
    padding: 40px 16px;
  }
  .main_block_content {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;
  }
  .main_block_text {
    flex: 500px;
    width: 100%;
    text-align: center;
  }
  .main_block_title {
    font-size: 36px;
    margin-bottom: 16px;
  }
  .main_block_subtitle {
    font-size: 18px;
    margin: 0 auto 24px;
    line-height: 1.5;
    padding: 0 16px;
  }
  .main_block_buttons {
    margin-top: 24px;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    justify-content: center;
    width: 100%;
  }
  #button.btn {
    width: 100%;
    height: 58px;
    font-size: 16px;
  }
  .main_block_image {
    max-width: 600px;
    height: auto;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .main_block_image img {
    height: auto;
    width: 100%;
    border-radius: 12px;
  }
  .image-overlay {
    display: none;
  }
  .main_block_stats {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 32px;
    width: 100%;
  }
  .stat {
    flex: 0 1 45%;
    text-align: center;
  }
  .stat_icon {
    width: 50px;
    margin-bottom: 8px;
  }
  .stat p strong {
    font-size: 18px;
  }
}

.marquee_container {
  width: 100%;
  overflow: hidden;
  background-color: #f0e6f3;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
}
.marquee {
  display: flex;
  animation: marquee 20s linear infinite;
}
.marquee span {
  white-space: nowrap;
  font-size: 24px;
  font-weight: bold;
  padding-right: 50px; /* Расстояние между повторами */
}
/* Анимация бесконечного скролла */
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.about_block {
  height: 768px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
  gap: 40px;
}
.about_text_card {
  background-color: #f0e6f3;
  text-align: left;
  border-radius: 20px;
  padding: 38px 45px;
  flex: 1 1 500px;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
.about_photo_card {
  flex: 1 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.about_photo_card img {
  border-radius: 20px;
  width: 100%;
  max-width: 592px;
  height: auto;
  object-fit: cover;
}
.about_title {
  font-size: 40px;
  font-weight: 400;
}
.about_line {
  background-color: #ee4400;
  width: 52px;
  height: 3px;
  margin-top: 15px;
  margin-bottom: 25px;
}
.about_text {
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 0.5px;
}
.about_button {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ee4400;
  text-decoration: underline;
  margin-top: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.about_button:hover {
  transform: translateY(-2px);
}
/* Adaptation */
@media (max-width: 1200px) {
  .about_block {
    height: auto;
  }
  .about_text_card {
    order: 2;
  }
  .about_photo_card {
    order: 1;
  }
}
@media (max-width: 768px) {
  .about_block {
    flex-direction: column;
    padding: 40px 16px;
    gap: 32px;
    margin-bottom: 80px;
  }
  .about_text_card {
    padding: 30px;
    text-align: center;
    flex: 1 1 200px;
  }
  .about_photo_card {
    width: 100%;
    text-align: center;
  }
  .about_button {
    align-self: center;
  }
  .about_title {
    font-size: 42px;
  }
  .about_line {
    margin-bottom: 0px;
    opacity: 0;
  }
  .about_text {
    font-size: 18px;
  }
}

.services {
  background-color: #f0e6f3;
}
.services_container {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  display: inline-block;
  justify-content: center;
}
.service-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}
.service-img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
}
.services-title {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
}
.services-description {
  font-size: 24px;
  text-align: center;
  margin-bottom: 60px;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

.advantages_container {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  display: inline-block;
  justify-content: center;
}
.advantages_title {
  text-align: center;
  font-size: 42px;
  margin-bottom: 60px;
}
.advantages_cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 60px; /* вертикальный и горизонтальный отступ */
  margin-bottom: 60px;
}
.advantages_card {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
}
.advantages_checkmark {
  width: 50px;
  flex-shrink: 0;
  margin-top: 6px;
}
.advantages_card_text {
  width: 90%;
}
.advantages_card_title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
}
.advantages_card_description {
  font-size: 16px;
  line-height: 1.4;
  color: #333;
}
@media (max-width: 768px) {
  .advantages_cards {
    grid-template-columns: 1fr;
  }
}

.portfolio {
  background-color: #f0e6f3;
  padding: 80px 0;
}
.portfolio_container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.portfolio_title {
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 76px;
}
.portfolio-items {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.portfolio-item {
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}
.portfolio_image {
  width: 575px;
  height: auto;
  border-radius: 20px;
  border: 1px #bdbdbd solid;
  transition: transform 0.3s ease, filter 0.3s ease;
  z-index: 1;
}
.portfolio_image:hover {
  transform: scale(1.02);
}
.portfolio_details {
  max-width: 580px;
  text-align: left;
  z-index: 2;
}
.portfolio_site {
  font-size: 16px;
  color: #888;
  margin-bottom: 12px;
}
.portfolio_main_text {
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0;
}
.portfolio_main_text strong {
  font-size: 36px;
}
.portfolio_under_text {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  margin-top: 15px;
}
.portfolio-link {
  display: inline-block;
  margin-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ff4500;
  text-decoration: none;
  border: 2px solid #ff4500;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.portfolio-link:hover {
  background-color: #ff4500;
  color: white;
}
@media (max-width: 768px) {
  .portfolio-item {
    flex-direction: column;
    align-items: center;
  }
  .portfolio-item img {
    width: 100%;
  }
}

.brief {
  background: #f0e6f3;
  padding: 60px 20px;
}
.brief_container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.brief_title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 40px;
}
.brief_card {
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}
.question_title {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: left;
}
.options_group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.option_card {
  border: 2px solid #ccc;
  padding: 15px 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
  text-align: left;
  font-size: 18px;
}
.option_card.selected,
.option_card:hover {
  border-color: #7c3aed;
  background-color: #f3e8ff;
}
.progress_bar {
  margin: 30px 0;
  height: 8px;
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
}
.progress_fill {
  height: 100%;
  background: #7c3aed;
  transition: width 0.3s ease;
}
.navigation {
  display: flex;
  justify-content: space-between;
}
.thank_you_text {
  font-size: 20px;
  line-height: 1.6;
  margin-top: 20px;
  color: #333;
}
.price_result {
  margin-top: 30px;
  padding: 20px;
  background-color: #f4f0fb;
  border-radius: 12px;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
.price_result .label {
  margin-right: 10px;
  color: #666;
  font-weight: normal;
}
.price_result .value {
  color: #7c3aed;
  font-size: 24px;
}


.stages {
  background: #f0e6f3;
  padding: 60px 20px;
}
.stages_container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.stages_title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 60px;
}
.stages-steps {
  margin-bottom: 40px;
}
::v-deep(.el-step__icon) {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  text-align: center;
  transform: translate(0, -20%);
}
::v-deep(.el-step__icon svg) {
  width: 30px;
  height: 30px;
  text-align: center;
  transform: translate(-6%, -10%);
}
.step-description {
  font-size: 20px;
  line-height: 1.6;
  color: #333;
  min-height: 60px;
  transition: all 0.3s ease;
}
.next-btn {
  margin-top: 24px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 768px) {
  .stages {
    padding-bottom: 100px;
  }
  .stages-steps {
    overflow-x: auto;
    display: flex;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    align-items: center;
  }
  ::v-deep(.el-steps) {
    height: 300px;
  }
  ::v-deep(.el-step) {
    min-width: 250px;
    scroll-snap-align: center;
  }
  ::v-deep(.el-step__title) {
    font-size: 20px;
    font-weight: 500;
  }
  ::v-deep(.el-step__icon) {
    height: 35px;
  }
  ::v-deep(.el-step__icon svg) {
    width: 26px;
    height: 26px;
    transform: translate(0%, 0%);
  }
}

.team {
  padding: 100px 0;
  background-color: #fdfcfe;
  position: relative;
  overflow: hidden;
}
.team_container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}
.team_title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
}
.team_description {
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 60px auto;
  line-height: 1.6;
}
.team_diamond {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  flex-wrap: wrap;
  margin-bottom: 450px;
}
.diamond_center {
  margin-top: 34%;
  width: 34%;
  z-index: 1;
  position: relative;
}
.team_card {
  position: absolute;
  width: 240px;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s;
  text-decoration: none;
  color: inherit;
}
.team_card_photo {
  display: block;
  width: 100%;
  height: 220px;
  border-radius: 20px;
  overflow: hidden;
  will-change: transform;
}
.team_card_photo img {
  width: 100%;
  height: 220px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 10px;
}
.team_card_name {
  font-size: 18px;
  font-weight: 600;
  margin: 8px 0;
}
.team_card_job {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}
.team_card_text {
  font-size: 14px;
  color: #444;
  line-height: 1.5;
}
.diamond_top_left {
  top: 10%;
  left: 10%;
  transform: translate(10%, -25%);
}
.diamond_top_right {
  top: 10%;
  right: 10%;
  transform: translate(-10%, -25%);
}
.diamond_bottom_left {
  bottom: 10%;
  left: 10%;
  transform: translate(-30%, 30%);
}
.diamond_bottom_right {
  bottom: 10%;
  right: 10%;
  transform: translate(30%, 30%);
}
.diamond_bottom_center {
  bottom: -5%;
  left: 50%;
  transform: translate(-50%, 100%);
}
@media (max-width: 768px) {
  .team_diamond {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 20px;
  }
  .team_card {
    position: static;
    transform: none !important;
  }
  .diamond_center {
    margin: 20px 0;
  }
}

.FAQ {
  background-color: #f0e6f3;
  padding: 80px 20px;
}
.FAQ_container {
  max-width: 900px;
  margin: 0 auto;
}
.FAQ_title {
  font-size: 42px;
  text-align: center;
  margin-bottom: 60px;
  font-weight: bold;
}
.FAQ_collapse {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  padding: 10px;
}
::v-deep(.el-collapse-item__header) {
  font-size: 24px;
  font-weight: 600;
  color: black;
}
::v-deep(.el-collapse-item__content) {
  font-size: 18px;
  line-height: 1.5;
  padding: 10px 0;
  color: #333333;
  text-align: left;
}
@media (max-width: 768px) {
  ::v-deep(.el-collapse-item__header) {
    font-size: 20px;
  }
  ::v-deep(.el-collapse-item__content) {
    font-size: 16px;
  }
}
</style>
