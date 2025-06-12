<el-button @click="dialogVisible = true">Обсудить проект</el-button>

<el-dialog
  v-model="dialogVisible"
  title="Обсудим проект?"
  width="500px"
  :close-on-click-modal="false"
>
  <p>Здесь может быть форма или контактная информация</p>

  <template #footer>
    <el-button @click="dialogVisible = false">Отмена</el-button>
    <el-button type="primary" @click="dialogVisible = false">Отправить</el-button>
  </template>
</el-dialog>