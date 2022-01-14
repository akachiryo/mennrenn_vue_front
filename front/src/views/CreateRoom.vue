<template>
   <v-container
            class="fill-height pa-12"
            fluid
    >
        <v-row justify="center" align="center">
            <v-col
                    cols="12"
                    sm="8"
                    md="6">
              <RoomForm />>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
import RoomForm from "../"

export default {
  data: () => ({
    valid: true,
    title: "",
    content: ""
  }),
  computed: {
    titlrRules() {
      return [
        v => !!v || "タイトルが必要です",
      ]
    },
    contentRules() {
      return [
        v => !!v || "詳細が必要です",
        v => ( v & v >= 140 ) || "140文字以内"
      ]
    },

  }
}
</script>