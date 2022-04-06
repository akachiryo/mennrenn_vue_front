<template>
  <div class="hello">
    <v-row justify="center">
      <v-card
      height="100px"
      width="90%"
      class="mt-10"
      >
        <v-card-title class="mt-5">面接質問： {{ question }}</v-card-title>
      </v-card>
    </v-row>
    <v-row>
      <v-col cols="4" v-if="$vuetify.breakpoint.mdAndUp">
        <v-card
        width="73%"
    class="mx-auto"

  >
    <v-toolbar
      color="cyan"
      dark
    >
      <v-toolbar-title>質問リスト</v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-list-item
      v-for="(selecte, i) in selected"
      :key="i"
      >
        <v-list-item-content>
          <v-list-item-title>{{ selecte }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
      </v-col>
      <v-col md="8" xs="12" sm="12">
         <v-row justify="center" class="mt-0 mb-2 mx-10">
      <v-btn
        :disabled="disabled"
        @click="startRec"
        color="success"
        class="py-7"
      >
        録画開始
      </v-btn>
      <v-btn
        :disabled="!disabled"
        @click="stopRec"
        color="error"
        class="py-7 mx-1"
      >
      録画終了
      </v-btn>
      <v-btn
        @click="nextSelected"
        color="primary"
        class="py-7"
      >
      次のお題
      </v-btn> 
    </v-row>
        <div class="vid_contents">
          <video id="my-video" class="vid_main" controls autoplay playsinline ref="video"></video>
        </div>
      </v-col>
    </v-row>
    <v-row
    align="center"
    justify="center"
    class="my-10"
    >

    <v-card width="80%">

    <question-lists @addSelected="addSelected"></question-lists>
    </v-card>
    </v-row>
  </div>
</template>

<script>
import RecordRTC from "recordrtc";
import QuestionLists from "../components/QuestionLists.vue"

export default {
  name: "VideoRecord",
  data() {
    return {
      recorder: null,
      disabled: false,
      question: null,
      selected: []
    };
  },
  components: {
     QuestionLists
  },
  mounted() {
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
    startRec() {
      this.disabled = true;
      this.captureCamera(camera => {
        const video = this.$refs["video"];
        video.muted = true;
        video.volume = 0;
        video.srcObject = camera;
        this.recorder = RecordRTC(camera, {
          type: "video"
        });
        this.recorder.startRecording();
        // release camera on stopRecording
        this.recorder.camera = camera;

        this.disabled = true;
      });
    },
    stopRec() {
      this.disabled = false;
      this.recorder.stopRecording(this.stopRecordingCallback);
    },
    captureCamera(callback) {
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then(function(camera) {
          callback(camera);
        })
        .catch(function(error) {
          alert("Unable to capture your camera. Please check console logs.");
          console.error(error);
        });
    },
    stopRecordingCallback() {
      const video = this.$refs["video"];
      video.src = video.srcObject = null;
      video.muted = false;
      video.volume = 1;
      video.src = URL.createObjectURL(this.recorder.getBlob());

      this.recorder.camera.stop();
      this.recorder.destroy();
      this.recorder = null;
    },
    addSelected(addQuestion) {
       this.selected = addQuestion
       this.question = this.selected[0];
    },
    nextSelected() {
      this.selected.shift();
      this.question = this.selected[0];
    },

  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div.vid_contents {
text-align: center;
}
video.vid_main {
width: 100%;
max-width: 920px;
max-height: 500px;
}
</style>
