import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TestPlugin from './plugins/TestPlugin'

const app = createApp(App)
app.use(TestPlugin, { fontSize: '20px' })
app.mount('#app')