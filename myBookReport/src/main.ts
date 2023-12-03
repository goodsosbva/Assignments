
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css' // Bootstrap의 CSS 파일을 가져옴
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Bootstrap의 JavaScript 파일을 가져옴
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
