import { createApp } from 'vue'
import App from './app.vue'
import MyButton from '@my-element-plus/components/button'
import EllCard from '@my-element-plus/components/card'
import '@my-element-plus/theme-chalk/src/card.scss'

import EllBadge from '@my-element-plus/components/badge'
import '@my-element-plus/theme-chalk/src/badge.scss'

import EllRow from '@my-element-plus/components/row'
import '@my-element-plus/theme-chalk/src/row.scss'

import EllCol from '@my-element-plus/components/col'
import '@my-element-plus/theme-chalk/src/col.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(MyButton)
app.use(EllCard)
app.use(EllBadge)
app.use(EllRow)
app.use(EllCol)
app.use(ElementPlus)
app.mount("#app")
