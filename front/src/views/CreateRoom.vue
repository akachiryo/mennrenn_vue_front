<template>
  <v-container class="fill-height pa-12" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <RoomForm @created="createRoom"></RoomForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import RoomForm from '../components/RoomForm.vue';

export default {
  components: {
    RoomForm,
  },
  methods: {
    async createRoom(roomTitle, roomContent, selectedTags) {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      await axios.post('http://localhost:3000/api/rooms', {
        room: {
          title: roomTitle,
          content: roomContent,
          tag_names: selectedTags,
        },
      });
      this.$router.push({ path: `/rooms` });
    },
  },
};
</script>
