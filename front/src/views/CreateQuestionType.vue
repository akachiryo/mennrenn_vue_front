<template>
   <v-container class="fill-height pa-12" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-card-text>
            <v-form>
              <v-col cols="12">
              <v-text-field
                v-model="questionTypeTitle"
                :rules="titleRules"
                label="Title"
              ></v-text-field>
              </v-col>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="success"
              @click="createQuestionType"
              :disabled="!isValid"
              :dark="isValid"
            >
              質問種類作成
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      valid: true,
      questionTypeTitle: ''
    }
  },
  created() {
  },
  computed: {
    isValid() {
      return (
        this.questionTypeTitle.length > 0 
      );
    },
  },
  methods: {
    async createQuestionType() {
      axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
      await axios.post('/api/v1/question_types', {
        question_type: {
          content: this.questionTypeTitle
        },
      });
      this.$router.push({ path: `/admin/questions` });
    },
  },
};
</script>