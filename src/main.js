import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Incrluimos bootstrap
import '@popperjs/core' //muestra un mensaje al poner el cursos encima de algo, ventana rápida emergente
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
