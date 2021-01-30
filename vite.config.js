import cdnAuto from 'vite-plugin-cdn-auto'
import components from 'vite-plugin-components'
import compress from 'vite-plugin-compress'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    '/src/': path.resolve(__dirname, 'src'),
  },
  plugins: [
    vue(),
    vueJsx(),
    components(),
    cdnAuto(),
    compress({ brotli: false }),
  ],
}
