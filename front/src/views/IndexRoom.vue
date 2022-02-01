<template>
<v-main class="pa-10">

      <v-row>
        <v-col cols="3">

    <template>
      <v-card class="mb-3">
          <v-row>
            <template>
              <v-col cols="12">
                <v-text-field label="RoomTitle" v-model="query.roomTitle" @input="fetchRooms"></v-text-field>
              </v-col>
            </template>
          </v-row>
        <v-card-text>
          <header>絞り込み条件</header>
          <v-row dense justify="start">
            <template>
              <v-checkbox v-for="tag in tags"
                          :key="tag.id"
                          v-model="query.selectedTags"
                          :label="tag.name"
                          :value="tag.id"
                          class="mr-3"
                          @click="fetchRooms"
                          hide-details="auto"
              >
              </v-checkbox>
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
        </v-col>
        <v-col cols="9">
    <v-row
     justify="center"
     align-content="center">
      <v-col v-for="room in rooms" :key="room.id" cols="6" md="4">
        <room-item v-if="isExistRooms" :room="room"></room-item>
        <div class="text-center" v-else>一件もありません</div>
      </v-col>
    </v-row>
    <v-row
     justify="center"
     align-content="center"
    >
      <template v-if="pagingMeta">
        <v-pagination
                color="indigo"
                @input="paging"
                v-model="pagingMeta.current_page"
                :length="pagingMeta.total_pages"
        ></v-pagination>
      </template>
    </v-row>

        </v-col>

      </v-row>
</v-main>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import RoomItem from '../components/RoomItem.vue';

export default {
  data() {
    return {
      rooms: [],
      room: {},
      tags: [],
      query: {
          selectedTags: [],
          roomTitle: ''
      },
      pagingMeta: null,
      currentPage: 1
    };
  },
  components: {
    RoomItem
  },
  created() {
    this.fetchRooms()
    this.fetchTags()
    },
  computed: {
    isExistRooms() {
      return this.rooms.length > 0;
    }
  },
  methods: {
     async fetchRooms() {
      //  this.$emit('loadingTrue');
              const searchParams = {
                  q: {
                      title: this.query.roomTitle,
                      tag_ids: this.query.selectedTags
                  }
              }
              const pagingParams = { page: this.currentPage }
              const params = { ...searchParams, ...pagingParams }
              const paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'brackets' });
              const res = await axios.get(`http://localhost:3000/api/rooms`, { params, paramsSerializer })
              this.rooms = res.data.rooms
              this.pagingMeta = res.data.meta
              // this.$emit('loadingFalse');
          },
     async fetchTags() {
              const res = await axios.get(`http://localhost:3000/api/tags`)
              this.tags = res.data.tags
          },
    paging(page) {
      this.currentPage = page
      this.fetchRooms()
      this.$vuetify.goTo(0)
    }
  },
};
</script>
