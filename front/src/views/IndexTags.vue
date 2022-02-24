<template>
  <v-container>
     <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-row align-content="center">
          <v-col
          v-for="tag in tags"
          :key="tag.id"
          cols="2"
          class="pt-0 ma-5"
          style="min-width: 200px"
          >
            <v-card>
              <v-row>
                <v-col cols="8">
              <v-card-title>{{ tag.name }}</v-card-title>
                </v-col>
                <v-col cols="2">
              <v-card-action>
              <v-btn
              x-small
              fab
              dark
              color="error lighten-1"
              @click="deleteTag(tag.id)"
              >
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
              </v-card-action>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
     </div>
     <div v-else>
      <v-list  style="width: 200px">
          <v-list-item
           v-for="(tag) in tags"
           :key="tag.id"
          >
            <v-list-item-content>
              <v-list-item-title>{{ tag.name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
              class="mx-2"
              fab
              dark
              color="error lighten-1"
              @click="deleteTag(tag.id)"
              >
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
      </v-list>
     </div>
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      tags: null
    }
  },
  created(){
    this.fetchTags()
  },
  methods: {
    fetchTags() {
       axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
       axios.get('/api/v1/tags').then((response) => {
        this.tags = response.data.tags;
      });
    },
     async deleteTag(tagId) {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      if (confirm('削除しますか？')) {
        await axios.delete(`/api/v1/tags/${tagId}`).then((response) => {
          this.tags = response.data
        })
      }
      }
  }
}
</script>