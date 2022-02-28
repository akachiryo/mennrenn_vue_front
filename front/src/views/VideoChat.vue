<template>
  <v-container>
    <v-card v-if="existingCall">
      <v-card-title> Connecting {{ existingCall.remoteId }} </v-card-title>
      <v-card-text>
        <video id="their-video" autoplay playsinline controls />
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title> Your video </v-card-title>
      <v-card-subtitle>
        {{ this.peerId }}
      </v-card-subtitle>
      <v-card-text>
        <video id="my-video" muted="true" autoplay playsinline controls />
      </v-card-text>
      <v-card>
        <v-card-text>
          <v-text-field v-model="callId" label="Call ID" required />
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="callByName"> Call </v-btn>
          <v-btn color="error" @click="close"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import Peer from 'skyway-js';

export default {
  data() {
    return {
      peer: {},
      peerId: null,
      callId: null,
      localStream: null,
      call: null,
      existingCall: null,
    };
  },
  mounted() {
    this.peer = new Peer({
      key: process.env.VUE_APP_SKYWAY_KEY,
      debug: 3,
    });

    this.peer.on('open', () => {
      this.peerId = this.peer.id;
    });

    this.peer.on('call', (call) => {
      this.call = call;
      call.answer(this.localStream);
      this.receive(call);
    });

    this.peer.on('close', () => {
      this.close();
    });
    this.peer.on('error', () => {
      this.close();
    });
    this.peer.on('disconnected', () => {
      this.close();
    });

    // カメラ映像取得
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // 成功時にvideo要素にカメラ映像をセットし、再生
        const videoElm = document.getElementById('my-video');
        videoElm.srcObject = stream;
        videoElm.play();
        // 着信時に相手にカメラ映像を返せるように、グローバル変数に保存しておく
        this.localStream = stream;
      })
      .catch((error) => {
        // 失敗時にはエラーログを出力
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
      });
  },
  methods: {
    callByName() {
      this.receive(this.peer.call(this.callId, this.localStream));
    },
    receive(call) {
      call.on('stream', (stream) => {
        const el = document.getElementById('their-video');
        el.srcObject = stream;
        el.play();
      });
      this.existingCall = call;
    },
  },
};
</script>
