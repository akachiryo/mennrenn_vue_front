<template>
  <v-main class="pa-15">
    <v-row>
      <v-col xs="12" sm="12" md="3">
        <template>
          <v-card class="mb-3" min-height="346">
            <v-row>
              <template>
                <v-col cols="12" class="pa-5">
                  <v-text-field
                    label="RoomTitle"
                    v-model="query.roomTitle"
                    @input="fetchRooms"
                    prepend-icon="mdi-magnify"
                  ></v-text-field>
                </v-col>
              </template>
            </v-row>
            <v-card-text>
              <header>絞り込み条件</header>
              <v-row dense justify="start">
                <template>
                  <v-checkbox
                    v-for="tag in tags"
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
      <v-col xs="12" sm="12" md="9">
        <v-row v-if="isExistRooms" align-content="center">
          <v-col v-for="room in rooms" :key="room.id" xs="12" sm="6" md="4" class="pt-0">
            <room-item :room="room"></room-item>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            <div class="text-center">
              <p>一件もありません</p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" align-content="center">
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
        roomTitle: '',
      },
      pagingMeta: null,
      currentPage: 1,
    };
  },
  components: {
    RoomItem,
  },
  created() {
    this.fetchRooms();
    this.fetchTags();
  },
  computed: {
    isExistRooms() {
      return this.rooms.length > 0;
    },
  },
  methods: {
    async fetchRooms() {
      //  this.$emit('loadingTrue');
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      const searchParams = {
        q: {
          title: this.query.roomTitle,
          tag_ids: this.query.selectedTags,
        },
      };
      const pagingParams = { page: this.currentPage };
      const params = { ...searchParams, ...pagingParams };
      const paramsSerializer = (params) =>
        qs.stringify(params, { arrayFormat: 'brackets' });
      const res = await axios.get(`/api/v1/rooms`, {
        params,
        paramsSerializer,
      });
      this.rooms = res.data.rooms;
      this.pagingMeta = res.data.meta;
      // this.$emit('loadingFalse');
    },
    async fetchTags() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      const res = await axios.get(`/api/v1/tags`);
      this.tags = res.data.tags;
    },
    paging(page) {
      this.currentPage = page;
      this.fetchRooms();
      this.$vuetify.goTo(0);
    },
  },
};
</script>
