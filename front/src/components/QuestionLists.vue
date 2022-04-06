<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-title>質問リスト</v-list-item-title>
        <v-list-item-action>
          <v-list-item-action-text v-if="$vuetify.breakpoint.mdAndUp">
            <v-btn
              class="ma-2"
              color="success"
              @click="$refs.dialog.open()"
            >
              <v-icon left>mdi-pencil</v-icon>質問作成
            </v-btn>
          </v-list-item-action-text>
          <v-list-item-action-text v-else>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="success"
              @click="$refs.dialog.open()"
            >
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
      <v-list-group
        v-for="question in questions"
        :key="question.id"
      >
        <template v-slot:activator >
          <v-list-item-title v-text="question.content"></v-list-item-title>
          <v-list-item-action>
            <v-btn
              x-small
              fab
              dark
              color="error lighten-1"
              @click="deleteRoom(question.id)"
              v-if="isAdmin"
            >
            <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
        
        <v-list-item>
          <v-list-content>
            <v-list-subtitle>
              <v-checkbox
              v-for="child in question.questions"
              :key="child.id"
              v-model="selected"
              :label="child.content"
              :value="child.content"
              @change="addSelected"
              >
              </v-checkbox>
            </v-list-subtitle>
          </v-list-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    <create-question-modal @fetchQuestions="fetchQuestions" ref="dialog"></create-question-modal>
  </div>

</template>

<script>
import axios from 'axios'
import CreateQuestionModal from './CreateQuestionModal.vue'

export default {
  data() {
    return {
      questions: null,
      selected: [],
    }
  },
  components: {
    CreateQuestionModal
  },
  created() {
    this.fetchQuestions()
  },
  computed: {
    isAdmin() {
      return this.$store.getters['auth/currentUser'].admin;
    },
  },
  methods: {
    async fetchQuestions() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      axios.get(`/api/v1/question_types`).then((response) => {
        this.questions = response.data;
      });
    },
     async deleteRoom(questionId) {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      if (confirm('削除しますか？')) {
        await axios.delete(`/api/v1/question_types/${questionId}`);
        this.$router.push('/admin/questions');
      }
      this.fetchQuestions()
    },
    addSelected() {
    // this.question = this.selected[0];
    this.$emit("addSelected", this.selected)
    },
    nextSelected() {
      this.selected.shift();
      this.$emit("nextTheme", this.selected[0])
      this.question = this.selected[0];
    }
  },
}
</script>