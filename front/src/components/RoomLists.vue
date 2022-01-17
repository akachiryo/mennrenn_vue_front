<template>
  <v-row>
    <v-col
      v-for="room in rooms"
      :key="room.id"
      cols="4"
    >
      <room-item v-if="isExistRooms" :room="room"></room-item>
      <div class="text-center" v-else>一件もありません</div>
    </v-col>
  </v-row>
</template>

<script>
import RoomItem from './RoomItem.vue'
export default {
  props: {
    rooms: {
      type: Array
    },
    room: {}
  },
  components: {
    RoomItem
  },
   computed: {
    isExistRooms() {
      return this.rooms.length > 0;
    },
   }

}
</script>