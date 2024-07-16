import { createApp } from 'vue'
import App from './app.vue'
// import EllButton from '@my-element-plus/components/button'
// import '@my-element-plus/theme-chalk/src/button.scss'
// import EllIcon from '@my-element-plus/components/icon'
// import '@my-element-plus/theme-chalk/src/icon.scss'
// import EllBadge from '@my-element-plus/components/badge'
// import '@my-element-plus/theme-chalk/src/badge.scss'
// import EllCard from '@my-element-plus/components/card'
// import '@my-element-plus/theme-chalk/src/card.scss'
// import EllCol from '@my-element-plus/components/col'
// import '@my-element-plus/theme-chalk/src/col.scss'
// import EllRow from '@my-element-plus/components/row'
// import '@my-element-plus/theme-chalk/src/row.scss'
// import EllButtonGroup from '@my-element-plus/components/button-group'
// import '@my-element-plus/theme-chalk/src/button-group.scss'
// import EllLink from '@my-element-plus/components/link'
// import '@my-element-plus/theme-chalk/src/link.scss'
// import EllText from '@my-element-plus/components/text'
// import '@my-element-plus/theme-chalk/src/text.scss'
// import EllScrollbar from '@my-element-plus/components/scrollbar'
// import '@my-element-plus/theme-chalk/src/scrollbar.scss'
// import EllContainer from '@my-element-plus/components/container'
// import '@my-element-plus/components/container/style/css.ts'

// import '@my-element-plus/theme-chalk/src/reset.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MyElementPlus from 'my-element-plus'
import '@my-element-plus/theme-chalk/src/index.scss'
// import '@my-element-plus/theme-chalk/src/base.scss'
// import EllButton from '@my-element-plus/components/button'
// import '@my-element-plus/theme-chalk/src/button.scss'

// import '@my-element-plus/theme-chalk/src/button-group.scss'

const app = createApp(App)
// app.use(EllButton)
// app.use(EllIcon)
// app.use(EllBadge)
// app.use(EllCard)
// app.use(EllCol)
// app.use(EllRow)
// app.use(EllButtonGroup)
// app.use(EllLink)
// app.use(EllText)
// app.use(EllScrollbar)
// app.use(EllContainer)
app.use(ElementPlus)
app.use(MyElementPlus)
app.mount("#app")
