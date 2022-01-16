<template>
  <v-card>
    <v-card-title class="text-h3">{{ room.title }}</v-card-title>
    <v-card-subtitle class="text-h5">{{ room.content }}</v-card-subtitle>
    <v-card-text
    class="text-right"
    v-text="$dayjs(room.created_at).format('YYYY-MM-DD HH:mm:ss')"
    ></v-card-text>
    <v-card-actions>
      <v-btn
      large
      dark
      color="indigo"
      >
        <v-icon>mdi-door-open</v-icon>
        部屋に入室する
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    room: {
      type: Object
    }
  }
}
</script>