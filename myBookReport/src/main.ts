
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(BootstrapVue as any)
app.use(createPinia())
app.use(router)

app.mount('#app')
