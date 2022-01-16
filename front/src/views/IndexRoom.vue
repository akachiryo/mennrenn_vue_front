<template>
  <v-container>
        <v-row>
            <v-col>
                <div>
                    <room-lists v-if="isExistRooms" :rooms="rooms"></room-lists>
                     
                    <div class="text-center" v-else>
                        一件もありません
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios"
import RoomLists from "../components/RoomLists.vue"

export default {
  data() {
    return {
      rooms: []
    }
  },
  components: {
    RoomLists
  },
  computed: {
    isExistRooms() {
      return this.rooms.length > 0
    }
  },
   mounted() {
     this.setRooms()
     },
   methods: {
     setRooms() {
       this.$emit('loadingTrue')
       axios.get("http://localhost:3000/api/rooms")
       .then(response => {
         this.rooms = response.data;
         this.$emit('loadingFalse')
       })
       .catch(error => console.log(error))
     }
   }
}
</script>