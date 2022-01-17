<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <UserItem :user="room.user" />
      </v-col>
      <v-col cols="8">
        <DetailRoomItem :room="room" @openEditRoom="openEditRoom" />
      </v-col>
    </v-row>
    <room-edit-modal ref="dialog" :room="room" @update="updateRoom"></room-edit-modal>
  </v-container>
</template>

<script>
import axios from 'axios'
import UserItem from '../components/UserItem'
import DetailRoomItem from '../components/DetailRoomItem'
import RoomEditModal from '../components/RoomEditModal'

export default {
  data() {
    return {
      room: null,
    }
  },
  components: {
    UserItem,
    DetailRoomItem,
    RoomEditModal
  },
  created() {
    this.fetchRoom()
  },
  computed: {
    roomId() {
      return this.$route.params.id
    }
  },
  methods: {
    fetchRoom() {
      axios.get(`http://localhost:3000/api/rooms/${this.roomId}`)
      .then((response) => {
        this.room = response.data;
      })
    },
    async updateRoom(roomTitle, roomContent) {
        await axios.patch(`http://localhost:3000//api/rooms/${this.roomId}`, {
           room: { 
             title: roomTitle,
             content: roomContent }})
        this.$refs.dialog.close()
        this.room.title = roomTitle
        this.room.content = roomContent
    },
    openEditRoom() {
      this.$refs.dialog.open()
    }
  }
}
</script>

