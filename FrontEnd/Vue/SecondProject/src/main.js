import { createApp } from 'vue'
import App from './App.vue'
import Nav from './components/NavBar.vue'
import Commencer from './components/Commensa.vue'
import Symptoms from './components/Symptoms.vue'
import Statistics from './components/Statistics.vue'
import Features from './components/Features.vue'
import Services from './components/Services.vue'

const app = createApp(App)

app.component('nav-bar', Nav)
app.component('commencer', Commencer)
app.component('symptom', Symptoms)
app.component('statistics', Statistics)
app.component('feature', Features)
app.component('services', Services)
app.mount('#app')