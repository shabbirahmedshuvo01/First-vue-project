import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import "../src/assets/style.css"

createApp(App)
.use(router)
.mount('#app')
