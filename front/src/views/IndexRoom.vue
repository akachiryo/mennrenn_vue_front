<template>
  <v-container>
    <v-row
     justify="center"
     align-content="center">
      <v-col v-for="room in rooms" :key="room.id" cols="6" md="4">
        <room-item v-if="isExistRooms" :room="room"></room-item>
        <div class="text-center" v-else>一件もありません</div>
      </v-col>
      <template v-if="pagingMeta">
        <v-pagination
                color="indigo"
                @input="paging"
                v-model="pagingMeta.current_page"
                :length="pagingMeta.total_pages"
        ></v-pagination>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import RoomItem from '../components/RoomItem.vue';

export default {
  data() {
    return {
      rooms: [],
      room: {},
      pagingMeta: null,
      currentPage: 1
    };
  },
  components: {
    RoomItem
  },
  created() {
    },
  mounted() {
    this.fetchRooms()
    this.setRooms();
  },
  computed: {
    isExistRooms() {
      return this.rooms.length > 0;
    }
  },
  methods: {
    setRooms() {
      this.$emit('loadingTrue');
      axios
        .get('http://localhost:3000/api/rooms')
        .then((response) => {
          this.rooms = response.data;
          this.$emit('loadingFalse');
        })
        .catch((error) => console.log(error));
    },
    async fetchRooms() {
        const res = await axios.get(`http://localhost:3000/api/rooms`, { params: { page: this.currentPage } })
        this.rooms = res.data.rooms
        this.pagingMeta = res.data.meta
    },
    paging(page) {
      this.currentPage = page
      this.fetchRooms()
      this.$vuetify.goTo(0)
    }
  },
};
</script>
