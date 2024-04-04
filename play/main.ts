import { createApp } from 'vue'
import App from './app.vue'
import MyButton from '@my-element-plus/components/button'

const app = createApp(App)
app.use(MyButton)
app.mount("#app")
