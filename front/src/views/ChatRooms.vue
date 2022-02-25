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
    if (this.$store.getters['auth/currentUser'].admin) {
      this.fetchRoom();
    } else {
      this.fetchJoinRoom();
    }
  },
  methods: {
    fetchRoom() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      axios.get(`/api/v1/user_rooms`).then((response) => {
        this.user_rooms = response.data;
      });
    },
    fetchJoinRoom(userRoomId) {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      axios.get(`/api/v1/user_rooms/${userRoomId}`).then((response) => {
        this.user_rooms = response.data;
      });
    },
  },
};
</script>
