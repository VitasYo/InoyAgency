<template>
  <div class="form">
    <div class="form_container">
      <div class="form_title">
        Оставьте заявку и мы проведём<br />консультацию бесплатно
      </div>
      <div class="form_elements">
        <div class="form_items">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-position="top"
            class="rule_form"
          >
            <div class="form_row">
              <el-form-item prop="name">
                <template #label>
                  Ваше имя <span style="color: red">*</span>
                </template>
                <el-input
                  v-model="ruleForm.name"
                  placeholder="Иван Иванов"
                ></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <template #label>
                  Ваша почта <span style="color: red">*</span>
                </template>
                <el-input
                  v-model="ruleForm.email"
                  placeholder="example@mail.ru"
                ></el-input>
              </el-form-item>
            </div>
            <div class="form_row">
              <el-form-item prop="phone">
                <template #label>
                  Ваш телефон <span style="color: red">*</span>
                </template>
                <el-input
                  v-model="ruleForm.phone"
                  type="tel"
                  maxlength="16"
                  placeholder="+7XXXXXXXXXX"
                ></el-input>
              </el-form-item>
              <el-form-item label="Что хотите сказать">
                <el-input
                  type="textarea"
                  v-model="ruleForm.area"
                  placeholder="Ваше сообщение"
                ></el-input>
              </el-form-item>
            </div>
            <div class="form_actions">
              <el-form-item prop="agree">
                <el-checkbox v-model="ruleForm.agree">
                  Я согласен на обработку персональных данных
                </el-checkbox>
              </el-form-item>
              <el-form-item class="form_button">
                <el-button type="primary" @click="submitForm" id="button"
                  >ОТПРАВИТЬ</el-button
                >
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="form_photo">
          <img src="@/assets/form_people.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="footer_container">
      <!-- Левая колонка: Логотип + Контакты -->
      <div class="footer_column logo_and_contacts">
        <div class="footer_logo">
          <router-link to="/" class="logo-link">
            <img src="@/assets/INOY_logo.png" alt="inoy" />
            <div>marketing agency</div>
          </router-link>
        </div>
        <div class="footer_contacts">
          <p>
            <strong>Телефон: </strong
            ><a href="tel:+79155459585">+7 (915) 545-95-85</a>
          </p>
          <p>
            <strong>Почта: </strong
            ><a href="mailto:inoyagency@gmail.com">inoyagency@gmail.com</a>
          </p>
          <p><strong>Адрес: </strong>г. Воронеж</p>
        </div>
      </div>

      <!-- Центральная колонка: Меню -->
      <div class="footer_column menu">
        <div class="footer_nav_group">
          <div class="footer_nav_title">Навигация</div>
          <p><a href="/">Главная</a></p>
          <p><a href="/about">О нас</a></p>
          <p><a href="/cases">Кейсы</a></p>
          <p><a href="/contacts">Контакты</a></p>
        </div>
        <div class="footer_nav_group">
          <div class="footer_nav_title">Услуги</div>
          <p><a href="/services/setup">Разовая тех настройка</a></p>
          <p><a href="/services/site">Экспресс-сайт</a></p>
          <p><a href="/services/audit">Точно-в-цель Аудит</a></p>
          <p><a href="/services/marketing">Маркетинг под ключ</a></p>
        </div>
      </div>

      <!-- Правая колонка: Соцсети -->
      <div class="footer_column footer_socials">
        <div class="social_links horizontal">
          <!-- или horizontal -->
          <a href="https://t.me/cylimova" target="_blank" aria-label="Telegram">
            <img src="@/assets/icons/telegram.png" alt="Telegram" />
          </a>
          <a href="https://vk.com/cylimova" target="_blank" aria-label="VK">
            <img src="@/assets/icons/vk.png" alt="VK" />
          </a>
          <a
            href="https://instagram.com/cylimova"
            target="_blank"
            aria-label="Instagram"
          >
            <img src="@/assets/icons/instagram.png" alt="Instagram" />
          </a>
        </div>
        <div class="social_for_inst">
          *Instagram, продукт компании Meta, которая признана экстремистской
          организацией в России
        </div>
      </div>
    </div>

    <!-- Копирайт -->
    <div class="footer_bottom">
      © InoyAgency, {{ new Date().getFullYear() }}. Все права защищены.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useFetch } from '#app'

const ruleFormRef = ref()
const ruleForm = ref({
  name: '',
  email: '',
  phone: '',
  area: '',
  agree: false
})

const validateName = (rule: any, value: string, callback: any) => {
  if (!value) return callback(new Error("Введите ваше имя"));
  const words = value.trim().split(" ");
  if (words.length < 2) return callback(new Error("Укажите имя и фамилию"));
  const isCapitalized = words.every((word) => /^[А-ЯЁ][а-яё]+$/.test(word));
  if (!isCapitalized)
    return callback(new Error("Каждое слово должно начинаться с заглавной буквы"));
  callback();
};

const validateEmail = (rule: any, value: string, callback: any) => {
  if (!value) return callback(new Error("Введите email"));
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) return callback(new Error("Неверный формат email"));
  callback();
};

const validatePhone = (rule: any, value: string, callback: any) => {
  if (!value.startsWith("+7")) {
    return callback(new Error("Введите номер с +7"));
  }
  const digitsOnly = value.replace(/\D/g, "");
  if (digitsOnly.length !== 11 || !digitsOnly.startsWith("7")) {
    return callback(new Error("Введите весь номер после +7"));
  }
  callback();
};

const rules = {
  name: [{ validator: validateName, trigger: "blur" }],
  email: [{ validator: validateEmail, trigger: "blur" }],
  phone: [{ validator: validatePhone, trigger: "blur" }],
  agree: [
    {
      validator: (rule: any, value: boolean, callback: any) => {
        if (!value) {
          callback(new Error("Подтвердите согласие на обработку данных"));
        } else {
          callback();
        }
      },
      trigger: "change",
    },
  ],
}

const getOrSetUserId = (): string => {
  let id = localStorage.getItem("user_id")
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem("user_id", id)
  }
  return id
}

const submitForm = async () => {
  if (!ruleFormRef.value) return

  await ruleFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      const response = await useFetch('http://localhost:3001/api/form', {
        method: 'POST',
        body: {
          ...ruleForm.value,
          user_id: getOrSetUserId() // 👈 добавлено
        }
      })

      if (response.data.value?.status === 'success') {
        ElMessage.success('Заявка успешно отправлена!')
        ruleForm.value = {
          name: '',
          email: '',
          phone: '',
          area: '',
          agree: false
        }
      } else {
        ElMessage.error('Ошибка при отправке. Попробуйте позже.')
      }
    }
  })
}

</script>

<style scoped>
.form {
  background: #62007b;
  padding: 80px 20px;
  color: white;
}
.form_container {
  max-width: 1200px;
  margin: 0 auto;
}
.form_title {
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 60px;
}
.form_elements {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
}
.form_items {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
}
.rule_form {
  width: auto;
  text-align: left;
}
.form_row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.form_row .el-form-item {
  flex: 1;
}

.form_actions {
  display: flex;
  justify-content: flex-end; /* справа на desktop */
  flex-direction: column;
}

/* Изменение всего элемента формы */
::v-deep(.el-form-item) {
  margin-bottom: 24px;
}

/* Стили для label */
::v-deep(.el-form-item__label) {
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
}

/* Стили для поля ввода */
::v-deep(.el-input__wrapper) {
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;
}
::v-deep(.el-input__wrapper input) {
  color: black;
}
::v-deep(.el-textarea__inner) {
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;
  color: black;
  border-radius: 8px;
  resize: vertical; /* можно отключить resize, если не нужно */
}

/* Стили чекбокса */
::v-deep(.el-checkbox) {
  color: #ffffff;
  font-size: 14px;
}

::v-deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #ff4500;
  border-color: #ff4500;
}

.form_button {
  margin-top: 30px;
}
.form_photo {
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form_photo img {
  width: 100%;
  max-width: 520px;
  border-radius: 20px;
  object-fit: cover;
  border: 2px black solid;
}
/* Адаптация для мобильных */
@media (max-width: 768px) {
  .form_elements {
    flex-direction: column;
    align-items: center;
  }
  .form_row {
    flex-direction: column; /* изменяем на колонку */
    gap: 10px;
    margin-bottom: 10px;
  }
  .form_title {
    line-height: 110%;
  }
  .form_actions {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .form_button {
    margin-top: 0px;
    width: 100%;
  }
  .form_button .el-button {
    min-width: 100%;
    height: 50px;
  }
}

.footer {
  background-color: #2a0030;
  color: white;
  padding: 60px 20px 40px;
  font-size: 16px;
}

.footer_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.footer_column {
  flex: 1;
  min-width: 240px;
  max-width: 420px; /* по желанию */
  text-align: left;
  box-sizing: border-box;
}
.footer_column.menu {
  flex: 420px; /* фиксируем ширину */
  display: flex;
  justify-content: space-between;
}
.footer_column.menu p {
  margin: 0;
}
.logo_and_contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 0 0 320px;
}

.footer_logo img {
  height: 40px;
  margin-right: 15px;
}
.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.footer_contacts {
  margin-top: 20px;
}
.footer_contacts p {
  margin-bottom: 12px;
  font-size: 16px;
  margin-top: 20px;
}
.footer_contacts a {
  color: white;
  text-decoration: underline;
}
.footer_nav_group {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.footer_nav_title {
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 16px;
  color: #949494;
}
.footer_nav_group a {
  color: white;
  text-decoration: none;
}
.footer_nav_group a:hover {
  color: #ff4500;
}

.footer_column.footer_socials {
  flex: 0 0 240px; /* фиксируем ширину */
  display: flex;
  text-align: right;
}
.footer_socials {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-end;
}
.social_links {
  display: flex;
  gap: 16px;
}

.social_links.vertical {
  flex-direction: column;
  align-items: flex-end;
}

.social_links.horizontal {
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.social_links a {
  display: inline-block;
  width: 32px;
  height: 32px;
  transition: transform 0.2s ease;
}

.social_links a img {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0.8);
}

.social_links a:hover {
  transform: scale(1.15);
}
.social_for_inst {
  font-size: 12px;
  color: #7c7c7c;
  margin-left: auto;
}

.footer_bottom {
  text-align: center;
  margin-top: 60px;
  font-size: 14px;
  color: #7c7c7c;
}

/* Адаптив */
@media (max-width: 1160px) and (min-width: 768px) {
  .footer_container {
    gap: 20px;
    justify-content: space-evenly;
  }
  .footer_socials {
    justify-content: center;
    margin: 0 auto;
    max-height: 200px;
  }
  .social_links.horizontal {
    justify-content: center;
  }
  .footer_column.footer_socials {
    width: 100%;
    max-width: 300px;
    max-height: 170px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    margin-top: 15px;
  }
}
@media (max-width: 768px) {
  .footer_container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Центрирует ВСЕ дочерние блоки */
    justify-content: center;
    text-align: center;
    gap: 20px;
    padding: 0 20px;
  }
  .logo_and_contacts {
    justify-content: center;
    align-items: center;
  }

  .footer_column,
  .logo_and_contacts {
    width: 100%;
    max-width: 300px;
    max-height: 180px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    margin-top: 15px;
  }
  .footer_column.footer_socials {
    width: 100%;
    max-width: 300px;
    max-height: 160px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }

  .footer_socials {
    justify-content: center;
    margin: 0 auto;
    max-height: 200px;
  }
  .social_links.horizontal {
    justify-content: center;
  }
  .footer_bottom {
    text-align: center;
    margin: 10px auto 0;
    width: 100%;
  }
}
</style>
