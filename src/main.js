import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Se importa la dataStrore de vuex
import store from './store/index.js'

// Incrluimos bootstrap, installar los paquetes con npm install namePacage
import '@popperjs/core' //muestra un mensaje al poner el cursos encima de algo, ventana rápida emergente
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


const app = createApp(App)

app.use(router)
// Se habilita para que la aplicación use las variables globales
app.use(store)
app.mount('#app')
