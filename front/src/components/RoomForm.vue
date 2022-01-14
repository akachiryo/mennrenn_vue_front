<template>
  <v-card class="elevation-12">
        <v-card-text>
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
            >
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
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn dark color="indigo" @click="createRoom">ルーム作成</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    roomTitle: "",
    roomContent: ""
  }),
  computed: {
    titleRules() {
      return [
        v => !!v || "タイトルが必要です"
      ]
    },
    contentRules() {
      return [
        v => !!v || "詳細が必要です",
        v => ( v & v >= 140 ) || "140文字以内"
      ]}
  },
  methods: {
    createRoom() {
    this.$emit(`created`, this.roomTitle, this.roomContent)
    this.roomTitle = ""
    this.roomContent = ""
    }
  }
  }
</script>