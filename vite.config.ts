import path from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      vueDevTools(),
      VueRouter({}),
      AutoImport({
        imports: ['vue', VueRouterAutoImports],
        dirs: ['./src/utils/**'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [ElementPlusResolver(), IconsResolver()],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
    ],
    // alias别名设置
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    // 服务设置
    server: {
      host: '0.0.0.0',
      port: 5173,
      open: false,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_REQUEST_API,
          changeOrigin: true,
          rewrite: (pathStr: string) => pathStr.replace(env.VITE_APP_BASE_API, env.VITE_APP_TRUE_API),
        },
      },
    },
    // build配置
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      reportCompressedSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
    },
    // css配置
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/styles/variables.scss" as *;',
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                // 去除elementPlus内部charset警告
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
  })
},
)
