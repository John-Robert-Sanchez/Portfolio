import { createApp } from 'vue'; // Import createApp function from Vue
import App from './App.vue';
import router from './router'; // Import router from './router'

createApp(App).use(router).mount('#app');

