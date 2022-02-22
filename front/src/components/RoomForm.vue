<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="roomTitle"
          :rules="titleRules"
          label="Title"
        ></v-text-field>

        <v-textarea
          v-model="roomContent"
          :rules="contentRules"
          label="Content"
        ></v-textarea>
        <v-col cols="12">
          <template>
            <v-container fluid>
              <v-combobox
                v-model="selectedTags"
                :items="tags"
                :search-input.sync="search"
                hide-selected
                hint="最大5つまで登録できます"
                label="Add some tags"
                multiple
                persistent-hint
                small-chips
                :clearable="true"
                :deletable-chips="true"
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        タグ"<strong>{{ search }}</strong
                        >"はまだ登録されていません。<kbd>enter</kbd>で登録できます。
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-combobox>
            </v-container>
          </template>
        </v-col>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :dark="isValid"
        color="indigo"
        :disabled="!isValid"
        @click="createRoom"
      >
        ルーム作成
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    valid: true,
    room: {},
    roomTitle: '',
    roomContent: '',
    selectedTags: [],
    search: null,
    tags: [],
  }),
  created() {
    this.fetchTags();
  },
  computed: {
    isValid() {
      return (
        this.roomTitle.length > 0 &&
        this.roomContent.length > 0 &&
        this.roomContent.length <= 140
      );
    },
    titleRules() {
      return [(v) => !!v || 'タイトルが必要です'];
    },
    contentRules() {
      return [
        (v) => !!v || '詳細が必要です',
        (v) => v.length <= 140 || '140文字以内',
      ];
    },
  },
  methods: {
    createRoom() {
      this.$emit(
        `created`,
        this.roomTitle,
        this.roomContent,
        this.selectedTags
      );
      this.roomTitle = '';
      this.roomContent = '';
      this.selectedTags = [];
    },
    async fetchTags() {
      axios.defaults.baseURL =  process.env.VUE_APP_API_ENDPOINT
      const res = await axios.get(`/api/v1/tags`);
      this.tags = res.data.tags.map((tag) => {
        return tag.name;
      });
    },
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    },
  },
};
</script>
