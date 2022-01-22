<template>
  <div>
    <chat-window
      :height="'calc(100vh - 5vh)'"
      :current-user-id="currentUserId"
      :rooms="rooms"
      :rooms-loaded="roomsLoaded"
      :loading-rooms="loadingRooms"
      :messages="messages"
      :messages-loaded="messagesLoaded"
      @fetch-messages="onFetchMessages"
    />
  </div>
</template>

<script>
import ChatWindow from "vue-advanced-chat"
import "vue-advanced-chat/dist/vue-advanced-chat.css"
import axios from 'axios'
export default {
  name: "Test",
  components: {
    ChatWindow,
  },
  data() {
    return {
      currentUserId: "1234",
      rooms: [
        {
          roomId: 1,
          roomName: "Room 1",
          avatar: "assets/imgs/people.png",
          index: 3,
          lastMessage: {
            seen: false,
            new: true,
          },
          users: [
            {
              _id: 1234,
              username: "John Doe",
              avatar: "assets/imgs/doe.png",
              status: {
                state: "online",
                lastChanged: "today, 14:30",
              },
            },
            {
              _id: 4321,
              username: "John Snow",
              avatar: "assets/imgs/snow.png",
              status: {
                state: "offline",
                lastChanged: "14 July, 20:00",
              },
            },
          ],
          typingUsers: [4321],
        },
      ],
      roomsLoaded: true,
      messagesLoaded: false,
      loadingRooms: false,
      messages: [],
      room: null
    }
  },
  created() {
    this.fetchRoom()
  },
  methods: {
    fetchRoom() {
      axios
        .get(`http://localhost:3000/api/rooms/${this.roomId}`)
        .then((response) => {
          this.room = response.data;
        });
    },
    fetchMessages() {
      axios
        .get(`http://localhost:3000/api/messages`)
        .then((response) => {
          this.message = response.data;
        });
    },
    onFetchMessages() {
      setTimeout(() => {
        this.messages = [
          {
            _id: 7890,
            indexId: 12092,
            content: "Message 1",
            senderId: 1234,
            username: "John Doe",
            avatar: "assets/imgs/doe.png",
            date: "13 November",
            timestamp: "10:20",
          }
        ]
        this.messagesLoaded = true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>