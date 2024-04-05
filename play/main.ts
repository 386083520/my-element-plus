import { createApp } from 'vue'
import App from './app.vue'
import MyButton from '@my-element-plus/components/button'
import EllCard from '@my-element-plus/components/card'

const app = createApp(App)
app.use(MyButton)
app.use(EllCard)
app.mount("#app")
