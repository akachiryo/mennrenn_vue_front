<template>
  <v-row>
    <v-col v-for="room in rooms" :key="room.id" cols="6" md="4">
      <room-item v-if="isExistRooms" :room="room"></room-item>
      <div class="text-center" v-else>一件もありません</div>
      <v-row justify="center">
    </v-row>
    </v-col>
      <template v-if="pagingMeta">
            <div class="text-center">
                <v-pagination
                        color="indigo"
                        @input="paging"
                        v-model="pagingMeta.current_page"
                        :length="pagingMeta.total_pages"
                ></v-pagination>
            </div>
        </template>
  </v-row>
</template>

<script>
import axios from 'axios';
// import qs from 'qs';
import RoomItem from './RoomItem.vue';

export default {
   data() {
     return {
       rooms: [],
      //  tags: [],
      //  query: {
      //      selectedTags: [],
      //      userName: ''
      //  },
       pagingMeta: null,
       currentPage: 1
     }
  },
  // props: {
  //   rooms: {
  //     type: Array,
  //   },
  //   room: {},
  // },
  
  components: {
    RoomItem,
  },
  created() {
    // this.fetchTags()
    this.fetchRooms()
  },
  computed: {
    isExistRooms() {
      return this.rooms.length > 0;
    },
  },
  methods: {
    // async fetchRooms() {
    //           const searchParams = {
    //               q: {
    //                   title: this.query.roomTitle,
    //                   tag_ids: this.query.selectedTags
    //               }
    //           }
    //           const pagingParams = { page: this.currentPage }
    //           const params = { ...searchParams, ...pagingParams }
    //           const paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'brackets' });
    //           const res = await axios.get(`http://localhost:3000/api/rooms`, { params, paramsSerializer })
    //           this.rooms = res.data.rooms
    //           this.pagingMeta = res.data.meta
    //       },
     async fetchRooms() {
                const res = await axios.get(`http://localhost:3000/api/rooms`, { params: { page: this.currentPage } })
                this.rooms = res.data.rooms
                this.pagingMeta = res.data.meta
            },
          // async fetchTags() {
          //     const res = await axios.get(`http://localhost:3000/api/tags`)
          //     this.tags = res.data.tags
          // },
          paging(page) {
              this.currentPage = page
              this.fetchRooms()
              this.$vuetify.goTo(0)
          }
  }
};
</script>
