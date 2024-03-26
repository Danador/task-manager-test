import './app/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './app/router'

const app = createApp(App)

app
    .use(createPinia())
    .use(router)
    .mount('#app')
