<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <UserItem :user="room.user" />
      </v-col>
      <v-col cols="8">
        <DetailRoomItem
          :room="room"
          @openEditRoom="openEditRoom"
          @deleteRoom="deleteRoom"
        />
      </v-col>
    </v-row>
    <room-edit-modal
      ref="dialog"
      :room="room"
      @update="updateRoom"
    ></room-edit-modal>
  </v-container>
</template>

<script>
import axios from 'axios';
import UserItem from '../components/UserItem';
import DetailRoomItem from '../components/DetailRoomItem';
import RoomEditModal from '../components/RoomEditModal';

export default {
  data() {
    return {
      room: null,
    };
  },
  components: {
    UserItem,
    DetailRoomItem,
    RoomEditModal,
  },
  created() {
    this.fetchRoom();
  },
  computed: {
    roomId() {
      return this.$route.params.id;
    },
  },
  methods: {
    fetchRoom() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      axios
        .get(`/api/rooms/${this.roomId}`)
        .then((response) => {
          this.room = response.data;
        });
    },
    async updateRoom(roomTitle, roomContent, selectedTags) {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      await axios.patch(`/api/rooms/${this.roomId}`, {
        room: {
          title: roomTitle,
          content: roomContent,
          tag_names: selectedTags
        }
      });
      this.room.title = roomTitle;
      this.room.content = roomContent;
      this.room.tag_names = selectedTags;
      this.$refs.dialog.close();
    },
    async deleteRoom() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      if (confirm('削除しますか？')) {
        await axios.delete(`/api/rooms/${this.roomId}`);
        this.$router.push('/rooms');
      }
    },
    openEditRoom() {
      this.$refs.dialog.open();
    },
  },
};
</script>
