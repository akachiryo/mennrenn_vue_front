<template>
    <v-card>
        <v-list three-line>
            <room-item v-for="room in rooms" :key="room.id" :room="room"></room-item>
        </v-list>
    </v-card>
</template>

<script>
    import RoomItem from './RoomItem.vue'

    export default {
        props: {
            rooms: {
                type: Array,
                default: () => []
            }
        },
        components: {
            RoomItem
        }
    }
</script>