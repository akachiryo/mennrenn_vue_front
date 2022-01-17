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
    };
  },
  created() {
    this.roomTitle = this.room.title;
    this.roomContent = this.room.content;
  },
  computed: {
    isValid() {
      return (
        this.roomTitle.length > 0 &&
        this.roomContent.length > 0 &&
        this.roomContent.length <= 140
      );
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
      this.$emit('update', this.roomTitle, this.roomContent);
    },
  },
};
</script>
