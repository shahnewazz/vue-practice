import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// global component registration
import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App)
app.component('GlobalComponent', GlobalComponent) // Multiple global components can be registered here
// app.component('AnotherGlobalComponent', AnotherGlobalComponent) // Multiple global components can be registered here
app.mount('#app')