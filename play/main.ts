import { createApp } from 'vue'
import App from './app.vue'
import MyButton from '../packages/components/button'
import { Plugin } from 'vue'
const app = createApp(App)
app.use(MyButton as any as Plugin)
app.mount("#app")
