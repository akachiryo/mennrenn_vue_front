<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <UserItem :user="room.user" />
      </v-col>
      <v-col cols="8">
        <DetailRoomItem :room="room" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import UserItem from '../components/UserItem'
import DetailRoomItem from '../components/DetailRoomItem'

export default {
  data() {
    return {
      room: null,
    }
  },
  components: {
    UserItem,
    DetailRoomItem
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
    }
  }
}
</script>

