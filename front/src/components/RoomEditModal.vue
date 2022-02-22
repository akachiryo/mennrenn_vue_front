<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">部屋 編集画面</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="タイトル"
                  v-model="roomTitle"
                ></v-text-field>
                <v-textarea
                  outlined
                  color="indigo"
                  name="input-7-4"
                  label="投稿"
                  v-model="roomContent"
                ></v-textarea>
              </v-col>
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
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="indigo" text @click="close">キャンセル</v-btn>
          <v-btn
            :dark="isValid"
            color="indigo"
            :disabled="!isValid"
            @click="update"
            >更新</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    room: {
      type: Object,
    },
  },
  data() {
    return {
      dialog: false,
      roomTitle: null,
      roomContent: null,
      selectedTags: [],
      search: null,
      tags: [],
    };
  },
  created() {
    this.roomTitle = this.room.title;
    this.roomContent = this.room.content;
    this.selectedTags = this.room.tags.map((tag) => {
      return tag.name;
    });
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
    roomId() {
      return this.$route.params.id;
    },
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    update() {
      this.$emit('update', this.roomTitle, this.roomContent, this.selectedTags);
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
