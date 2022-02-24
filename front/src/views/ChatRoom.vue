<template>
<div v-if="$vuetify.breakpoint.mdAndUp">
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <v-card>
          <v-card class="v-card-title">
            <v-card-title class="text-h5"> 参加中の部屋 </v-card-title>
          </v-card>
          <v-card-content>
            <v-container
              ref="scrollTarget"
              style="height: 585px"
              class="overflow-y-auto"
            >
              <ChatRoomLists
                :user_rooms="user_rooms"
                @fetchMessages="fetchMessages"
                @fetchRoom="fetchRoom"
              />
            </v-container>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <v-card color="grey lighten-5">
          <v-card-title class="v-card-title text-truncate">
            <span class="text-h5">{{ room.title }}</span>
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon large>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="deleteRoom"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="chatroom-content">
            <v-row>
              <v-col cols="12">
                <v-container
                  ref="scrollTarget"
                  style="height: 450px"
                  class="overflow-y-auto"
                >
                  <v-row v-for="(message, i) in messages" :key="i" dense>
                    <v-col v-if="message.user.id === userId">
                      <div class="balloon_r">
                        <div class="face_icon">
                          <v-avatar size="45">
                            <v-img
                              :src="message.user.avatar_url"
                              aspect-ratio="1"
                              class="grey lighten-2"
                            >
                            </v-img>
                          </v-avatar>
                        </div>
                        <p
                          class="message-date-right"
                          v-text="
                            $dayjs(message.created_at).format('MM-DD HH:mm:ss')
                          "
                        ></p>
                        <p class="says says-right">
                          {{ message.content }}
                        </p>
                      </div>
                    </v-col>
                    <v-col v-else>
                      <div class="balloon_l">
                        <div class="face_icon">
                          <v-avatar size="45">
                            <v-img
                              :src="message.user.avatar_url"
                              aspect-ratio="1"
                              class="grey lighten-2"
                            >
                            </v-img>
                          </v-avatar>
                        </div>
                        <p class="says says-left">
                          {{ message.content }}
                        </p>
                        <span
                          class="message-date-left"
                          v-text="
                            $dayjs(message.created_at).format('MM-DD HH:mm:ss')
                          "
                        ></span>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text justify="center">
            <v-row justify="center">
              <v-col cols="10">
                <v-text-field
                  autofocus
                  v-model="message"
                  rounded
                  dense
                  filled
                  placeholder="Type message"
                  :rules="contentRule"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn class="info" small @click="sendMessage">
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</div>
<div v-else>
  <v-card color="grey lighten-5">
          <v-card-title class="v-card-title">
            <span class="text-h5">{{ room.title }}</span>
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon large>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="deleteRoom"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="chatroom-content">
            <v-row>
              <v-col cols="12">
                <v-container
                  ref="scrollTarget"
                  style="height: 450px"
                  class="overflow-y-auto"
                >
                  <v-row v-for="(message, i) in messages" :key="i" dense>
                    <v-col v-if="message.user.id === userId">
                      <div class="balloon_r">
                        <div class="face_icon">
                          <v-avatar size="45">
                            <v-img
                              :src="message.user.avatar_url"
                              aspect-ratio="1"
                              class="grey lighten-2"
                            >
                            </v-img>
                          </v-avatar>
                        </div>
                        <p
                          class="message-date-right"
                          v-text="
                            $dayjs(message.created_at).format('MM-DD HH:mm:ss')
                          "
                        ></p>
                        <p class="says says-right">
                          {{ message.content }}
                        </p>
                      </div>
                    </v-col>
                    <v-col v-else>
                      <div class="balloon_l">
                        <div class="face_icon">
                          <v-avatar size="45">
                            <v-img
                              :src="message.user.avatar_url"
                              aspect-ratio="1"
                              class="grey lighten-2"
                            >
                            </v-img>
                          </v-avatar>
                        </div>
                        <p class="says says-left">
                          {{ message.content }}
                        </p>
                        <span
                          class="message-date-left"
                          v-text="
                            $dayjs(message.created_at).format('MM-DD HH:mm:ss')
                          "
                        ></span>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text justify="center">
            <v-row justify="center">
              <v-col cols="10">
                <v-text-field
                  autofocus
                  v-model="message"
                  rounded
                  dense
                  filled
                  placeholder="Type message"
                  :rules="contentRule"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn class="info" small @click="sendMessage">
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
</div>
</template>

<script>
import axios from 'axios';
import ChatRoomLists from '../components/ChatRoomLists.vue';

export default {
  components: {
    ChatRoomLists,
  },
  data: () => ({
    message: null,
    room: null,
    messages: [],
    items: [{ title: 'Delete Room' }],
    user_rooms: null,
  }),
  created() {
    this.fetchRoom();
    this.fetchMessages();
    this.fetchJoinRoom();
  },
  mounted() {},
  computed: {
    userId() {
      return this.$store.getters['auth/currentUser'].id;
    },
    myMessage() {
      return this.userId == this.message.user.id;
    },
    user() {
      return this.$store.getters['auth/currentUser'];
    },
    roomId() {
      return this.$route.params.id;
    },
    contentRule() {
      return [(v) => !!v || '本文が必要'];
    },
  },
  updated: function () {
    this.scrollToEnd();
  },
  methods: {
    fetchRoom() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      axios
        .get(`/api/v1/rooms/${this.roomId}`)
        .then((response) => {
          this.room = response.data;
        });
    },
    fetchMessages() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      axios
        .get(`/api/v1/room_messages/${this.roomId}`)
        .then((response) => {
          this.messages = response.data;
        });
    },
    async sendMessage() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      await axios
        .post('/api/v1/room_messages', {
          room_message: {
            content: this.message,
            room_id: this.room.id,
          },
        })
        .then((response) => {
          this.messages.push(response.data);
        });
      this.message = '';
    },
    async deleteRoom() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      if (confirm('削除しますか？')) {
        await axios.delete(`/api/v1/rooms/${this.roomId}`);
        this.$router.push('/rooms');
      }
    },
    fetchJoinRoom() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      axios.get('/api/v1/user_rooms').then((response) => {
        this.user_rooms = response.data;
      });
    },
    // チャットログを一番下までスクロール
    scrollToEnd() {
      this.$nextTick(() => {
        const chatLog = this.$refs.scrollTarget;
        if (!chatLog) return;
        chatLog.scrollTop = chatLog.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
.balloon_l,
.balloon_r {
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.balloon_r {
  justify-content: flex-end;
}
.face_icon img {
  width: 80px;
  height: auto;
}
.balloon_r .face_icon {
  margin-left: 25px;
}
.balloon_l .face_icon {
  margin-right: 25px;
}
.balloon_r .face_icon {
  order: 2 !important;
}
.says {
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 10px;
  border-radius: 12px;
  box-sizing: border-box;
  margin: 0 !important;
  line-height: 1.5;
}
.says p {
  margin: 8px 0 0 !important;
}
.says p:first-child {
  margin-top: 0 !important;
}
.says:after {
  content: '';
  position: absolute;
  border: 10px solid transparent;
  margin-top: -3px;
}

.says-left {
  background: #ffff;
}
.says-right {
  background: #8ee7b6;
}
.balloon_l .says:after {
  left: -26px;
  border-right: 22px solid #ffff;
}
.balloon_r .says:after {
  right: -26px;
  border-left: 22px solid #8ee7b6;
}

.chatroom-content {
  background: #eeeeee;
}

.v-text-title {
  background: #ffff;
}

.message-date-right {
  margin: 20px 5px 0 0;
}
.message-date-left {
  margin: 20px 0 0 5px;
}
</style>
