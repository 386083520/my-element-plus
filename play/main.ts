import { createApp } from 'vue'
import App from './app.vue'
import EllButton from '@my-element-plus/components/button'
import '@my-element-plus/theme-chalk/src/button.scss'
import EllIcon from '@my-element-plus/components/icon'
import '@my-element-plus/theme-chalk/src/icon.scss'
import EllBadge from '@my-element-plus/components/badge'
import '@my-element-plus/theme-chalk/src/badge.scss'
import EllCard from '@my-element-plus/components/card'
import '@my-element-plus/theme-chalk/src/card.scss'
import EllCol from '@my-element-plus/components/col'
import '@my-element-plus/theme-chalk/src/col.scss'
import EllRow from '@my-element-plus/components/row'
import '@my-element-plus/theme-chalk/src/row.scss'

import '@my-element-plus/theme-chalk/src/reset.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(EllButton)
app.use(EllIcon)
app.use(EllBadge)
app.use(EllCard)
app.use(EllCol)
app.use(EllRow)
app.use(ElementPlus)
app.mount("#app")
