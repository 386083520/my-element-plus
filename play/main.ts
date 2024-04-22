import { createApp } from 'vue'
import App from './app.vue'
import MyButton from '@my-element-plus/components/button'
import EllIcon from '@my-element-plus/components/icon'
//import '@my-element-plus/theme-chalk/src/card.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(MyButton)
app.use(EllIcon)
app.use(ElementPlus)
app.mount("#app")
