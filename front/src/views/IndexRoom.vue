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
      rooms: [
       {
        "id": 2,
        "title": "あああ",
        "content": "あああ",
        "created_at": "2022-01-16T01:16:24.402Z",
        "updated_at": "2022-01-16T01:16:24.402Z",
        "user": {
            "id": 1,
            "name": "aaa",
            "email": "a@a.com"
        }
    },
    {
        "id": 1,
        "title": "あああああ",
        "content": "あああああ",
        "created_at": "2022-01-14T18:31:24.857Z",
        "updated_at": "2022-01-14T18:31:24.857Z",
        "user": {
            "id": 1,
            "name": "aaa",
            "email": "a@a.com"
        }
    }
      ]
    }
  },
  components: {
    RoomLists
  },
  computed: {
    isExistRooms() {
      return this.rooms.length > 1
    }
  },
   mounted() {
      axios.get("http://localhost:3000/api/rooms")
      .then(response => {this.rooms = response.data.rooms})
      .catch(error => console.log(error))
   }
}
</script>