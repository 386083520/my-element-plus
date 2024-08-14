import { createApp } from 'vue'
import App from './app.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import MyElementPlus from 'my-element-plus'
//import '@my-element-plus/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(ElementPlus)
//app.use(MyElementPlus)
app.mount("#app")
