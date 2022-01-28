<template>
  <v-card max-width="400" @click="$router.push(`/rooms/${room.id}`)">
    <v-card-title>
      <span class="text-h5">{{ room.title }}</span>
    </v-card-title>
    <v-card-text class="font-weight-bold">
      {{ room.content }}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
          class="elevation-6"
          :src="room.user.avatar_url"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ room.user.name }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action
          v-text="$dayjs(room.created_at).format('YYYY-MM-DD HH:mm:ss')"
        ></v-list-item-action>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
};
</script>
