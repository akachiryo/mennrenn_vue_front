<template>
  <v-container>
      <v-list>
          <v-list-item
           v-for="(user) in users"
           :key="user.id"
           @click="$router.push(`/users/${user.id}`)"
          >
            <v-list-item-avatar>
              <v-img
                :src="user.avatar_url"
                aspect-ratio="1"
                class="grey lighten-2"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
              class="mx-2"
              fab
              dark
              color="error lighten-1"
              @click="deleteUser(user, user.id)"
              >
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
      </v-list>
  </v-container>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      users: null,
      delId: null
    }
  },
  created() {
    this.fetchUsers()
  },
  computed() {
  },
  methods: {
    fetchUsers() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      axios.get('/api/v1/admin/users').then((response) => {
        this.users = response.data;
      });
    },
    deleteUser(user, userId) {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      if (confirm('削除しますか？')) {
        this.delId = this.users.indexOf(user);
        this.users.splice(this.delId,1);
        axios.delete(`/api/v1/admin/users/${userId}`);
      }
    }
  }
}
</script>