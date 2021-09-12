import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$idiomaGlobal = ref('spanish')

app.use(router).mount('#app')
