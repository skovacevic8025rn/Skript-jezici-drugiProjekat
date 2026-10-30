import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/global.css'

const app = createApp(App)

app.config.errorHandler = (err) => {
  alert(String(err))
  console.error(err)
}

app.use(createPinia())
app.use(router)

app.mount('#app')