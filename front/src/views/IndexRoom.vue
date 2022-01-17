<template>
  <v-container>
    <RoomLists :rooms="rooms" />
  </v-container>
</template>

<script>
import axios from 'axios';
import RoomLists from '../components/RoomLists.vue';

export default {
  data() {
    return {
      rooms: [],
      room: {},
    };
  },
  components: {
    RoomLists,
  },
  mounted() {
    this.setRooms();
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
  },
};
</script>
