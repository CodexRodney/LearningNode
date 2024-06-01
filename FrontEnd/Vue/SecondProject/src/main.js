import { createApp } from 'vue'
import App from './App.vue'
import Nav from './components/NavBar.vue'
import Commencer from './components/Commensa.vue'

const app = createApp(App)

app.component('nav-bar', Nav)
app.component('commencer', Commencer)
app.mount('#app')