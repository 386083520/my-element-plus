import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
    plugins: [
        Vue(),
        VueJsx()
    ],
    test: {
        environment: 'jsdom'
    }
})
