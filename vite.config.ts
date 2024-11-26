import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueRouter from 'unplugin-vue-router/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const generatedPath = './src/__generated__'
const iconsResolver = IconsResolver({
  prefix: 'icon'
})

export default defineConfig({
  plugins: [
    VueRouter({
      dts: `${generatedPath}/typed-router.d.ts`
    }),
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver(), iconsResolver],
      dts: `${generatedPath}/auto-imports.d.ts`
    }),
    Components({
      resolvers: [ElementPlusResolver(), iconsResolver],
      dts: `${generatedPath}/components.d.ts`
    }),
    Icons()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
