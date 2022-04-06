<template>
  <v-dialog v-model="dialog" max-width="600px">
  <v-card>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="questionContent"
          :rules="titleRules"
          label="質問内容"
        ></v-text-field>
        <v-select
          v-model="selectedQuestionType"
          :items="question_types"
           item-text="content"
           item-value="id"
          label="質問の種類"
        >
        </v-select>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :dark="isValid"
        color="indigo"
        :disabled="!isValid"
        @click="createQuestion"
      >
        ルーム作成
      </v-btn>
    </v-card-actions>
  </v-card>  
  </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      question_types: [],
      dialog: false,
      questionContent: '',
      selectedQuestionType: null
    };
  },
  computed: {
     isValid() {
      return (
        this.questionContent.length > 0
      );
    },
     titleRules() {
      return [(v) => !!v || '空欄です'];
    },
  },
  created() {
    this.fetchQuestionTypes()
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    async createQuestion() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      const question = {
          question_type_id: this.selectedQuestionType,
          content: this.questionContent
        }
      await axios.post('/api/v1/questions', question);
      this.$emit('fetchQuestions')
      this.dialog = false;
    },
    async fetchQuestionTypes() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      const res = await axios.get(`/api/v1/question_types`);
      this.question_types = res.data;
    },
  }
}
</script>