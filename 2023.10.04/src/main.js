import { createApp } from 'vue'
import App from './App.vue' /* 이 친구가 component */
import router from './router'

createApp(App).use(router).mount('#app')
