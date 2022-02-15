<template>
  <v-container>
    <ChatRoomLists :user_rooms="user_rooms" />
  </v-container>
</template>

<script>
import axios from 'axios';
import ChatRoomLists from '../components/ChatRoomLists.vue';

export default {
  data() {
    return {
      user_rooms: null,
    };
  },
  components: {
    ChatRoomLists,
  },
  created() {
    this.fetchJoinRoom();
  },
  methods: {
    fetchJoinRoom() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      axios.get('/api/user_rooms').then((response) => {
        this.user_rooms = response.data;
      });
    },
    //  enterChatRoom(roomId) {
    //    this.$router.push(`/chatroom/${roomId}`)
    // }
  },
};
</script>
