import { createApp } from 'vue';
import App from './App.vue';
import FriendDetails from './components/FriendDetails.vue';

const app = createApp(App)

app.component('friend-details', FriendDetails)

app.mount('#app');
