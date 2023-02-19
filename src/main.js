import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//importar o pacote mitt
import mitt from 'mitt'


//criar a instância do pacote mitt
const emitter = mitt()

const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router).mount('#app')
