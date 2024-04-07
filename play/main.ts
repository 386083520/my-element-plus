import { createApp } from 'vue'
import App from './app.vue'
import MyButton from '@my-element-plus/components/button'
import EllCard from '@my-element-plus/components/card'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(MyButton)
app.use(EllCard)
app.use(ElementPlus)
app.mount("#app")
