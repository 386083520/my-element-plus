import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { MyElementPlusResolver } from './path-to-resolver'
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver(), MyElementPlusResolver()],
          }),
          Components({
            resolvers: [ElementPlusResolver(), MyElementPlusResolver()],
          })
    ]
})
