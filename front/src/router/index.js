import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AboutZoom from '../views/AboutZoom.vue';
import AboutVideo from '../views/AboutVideo.vue';
import Signup from '../views/Signup.vue';
import Signin from '../views/Signin.vue';
import CreateRoom from '../views/CreateRoom.vue';
import IndexRoom from '../views/IndexRoom.vue';
import DetailRoom from '../views/DetailRoom.vue';
import Profile from '../views/Profile.vue';
import ChatRoom from '../views/ChatRoom.vue';
import ChatRooms from '../views/ChatRooms.vue';
import IndexUsers from '../views/IndexUsers.vue';
import IndexTags from '../views/IndexTags.vue';
import Privacy from '../views/Privacy.vue';
import VideoChat from '../views/VideoChat.vue';
import AlonePractice from '../views/AlonePractice.vue';
import CreateQuestionType from '../views/CreateQuestionType.vue';
import QuestionList from '../views/QuestionList.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/aboutzoom', component: AboutZoom, name: 'AboutZoom' },
    { path: '/aboutvideo', component: AboutVideo, name: 'AboutVideo' },
    { path: '/signup', component: Signup, name: 'Signup' },
    { path: '/signin', component: Signin, name: 'Signin' },
    { path: '/room/new', component: CreateRoom, name: 'CreateRoom' },
    { path: '/rooms', component: IndexRoom, name: 'IndexRoom' },
    { path: '/rooms/:id', component: DetailRoom, name: 'DetailRoom' },
    { path: '/users/:id', component: Profile, name: 'Profile' },
    { path: '/chatrooms', component: ChatRooms, name: 'ChatRooms' },
    { path: '/chatroom/:id', component: ChatRoom, name: 'ChatRoom' },
    { path: '/admin/users', component: IndexUsers, name: 'IndexUsers' },
    { path: '/admin/tags', component: IndexTags, name: 'IndexTags' },
    { path: '/privacy', component: Privacy, name: 'Privacy' },
    { path: '/videochat', component: VideoChat, name: 'Videochat' },
    { path: '/alonepractice', component: AlonePractice, name: 'AlocePractice' },
    { path: '/admin/questiontype', component: CreateQuestionType, name: 'CreateQuestiontype' },
    { path: '/admin/questions', component: QuestionList, name: 'QuestionList' },
  ],
});

export default router;
