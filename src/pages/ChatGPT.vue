<template>
  <q-page class="column justify-between q-mt-xs">
    <q-breadcrumbs
      separator="---"
      class="text-orange col-1"
      active-color="secondary"
    >
      <q-breadcrumbs-el icon="home" />
      <q-breadcrumbs-el label="ChatGPT" icon="send" />
    </q-breadcrumbs>
    <div
      class="col q-pa-md row justify-center scroll"
      ref="chatMsg"
      style="max-height: 80vh"
    >
      <div style="width: 90%">
        <!-- <q-chat-message label="Sunday, 19th" /> -->
        <q-chat-message
          v-for="item in data"
          :key="item._id"
          :name="item.username"
          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
          :text="[item.str]"
          :sent="item.sent"
          :stamp="timestampToTime(item.time)"
        />

        <q-chat-message v-for="item in data" :key="item._id" :sent="item.sent">
          <template v-slot:name>{{ item.username }}</template>
          <template v-slot:avatar>
            <img
              v-if="item.sent"
              class="q-message-avatar q-message-avatar--received"
              src="https://cdn.quasar.dev/img/avatar4.jpg"
            />
            <img
              v-if="!item.sent"
              class="q-message-avatar q-message-avatar--received"
              src="https://cdn.quasar.dev/img/avatar2.jpg"
            />
          </template>

          <div>{{ item.str }}</div>
          <template v-slot:stamp> {{ timestampToTime(item.time) }} </template>
        </q-chat-message>
        <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
          :text="['hey, how are you?']"
          sent
          stamp="7 minutes ago"
        />
        <q-chat-message
          name="Jane"
          avatar="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          :text="['doing fine, how r you?']"
          stamp="4 minutes ago"
        />
      </div>
    </div>
    <q-input
      class="q-ml-md q-mb-md"
      filled
      bottom-slots
      v-model="text"
      maxlength="12"
      dense="dense"
    >
      <template v-slot:before>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
        </q-avatar>
      </template>

      <template v-slot:append>
        <q-icon
          v-if="text !== ''"
          name="close"
          @click="text = ''"
          class="cursor-pointer"
        />
      </template>

      <template v-slot:after>
        <q-btn round dense flat icon="send" />
      </template>
    </q-input>
  </q-page>
</template>

<script setup>
import { getCurrentInstance } from '@vue/runtime-core';
import { ref, onMounted } from 'vue';

const count = ref(0);
const min = -10;
const max = 10;
const data = [
  {
    sent: false,
    str: '\n\n1. 35+25=\nA. 60\n\n2. 16-8=\nA. 8\n\n3. 32÷2=\nA. 16 \n\n4. 70÷5=\nA. 14\n\n5. 8×3=\nA. 24\n\n6. 25-14=\nA. 11\n\n7. 48÷6=\nA. 8\n\n8. 19+10=\nA. 29\n\n9. 7+8=\nA. 15\n\n10. 40-14=\nA. 26\n\n11. 9×2=\nA. 18\n\n12. 30+13=\nA. 43\n\n13. 18÷3=\nA. 6\n\n14. 15×4=\nA. 60\n\n15. 20-10=\nA. 10\n\n16. 39-20=\nA. 19\n\n17. 7×8=\nA. 56\n\n18. 36÷2=\nA. 18\n\n19. 25+18=\nA. 43\n\n20. 16÷4=\nA. 4',
    time: 1672834610086,
    _id: 'WwHVZ21fGQQ4iL78',
  },
  {
    sent: false,
    str: '\n\n你好！很高兴认识你！',
    time: 1672834216911,
    _id: '1ZgCfx9H56qNWHAp',
  },
  {
    sent: false,
    str: '\n\n你好，GPT！我很高兴认识你！',
    time: 1672834145478,
    _id: '0veTLPf3QR6M0HCA',
  },
  {
    sent: false,
    str: ':\n\n你好！很高兴见到你！有什么可以帮助你的吗？',
    time: 1672832191619,
    _id: 'Yx0JPx1egPpa86Xs',
  },
  {
    username: 'string',
    str: '你好,GPT',
    avatar: 'string',
    sent: true,
    time: 123,
    _id: '9zqaBZNLAw4bVrZn',
  },
  {
    username: 'string',
    str: '你好,GPT',
    avatar: 'string',
    sent: true,
    time: 123,
    _id: 'JYgBfWhwo2QGQ8OM',
  },
  {
    username: 'string',
    str: '你好,GPT',
    avatar: 'string',
    sent: true,
    time: 123,
    _id: 'tp2c2VtrPEZXeLsj',
  },
  {
    username: 'string',
    str: '请写出20道小学2年级数学计算题',
    avatar: 'string',
    sent: true,
    time: 0,
    _id: '5ZD5KKfxi9kyNR3Q',
  },
];
const currentInstance = getCurrentInstance();
function timestampToTime(timestamp) {
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  return Y + M + D + h + m + s;
}
function init() {
  currentInstance.ctx.$refs.chatMsg.scrollTop =
    currentInstance.ctx.$refs.chatMsg.scrollHeight;
}
onMounted(() => {
  init();
});
</script>
