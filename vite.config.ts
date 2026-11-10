import path from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const {
    VITE_APP_BASE_API: proxyPath,
    VITE_APP_REQUEST_API: proxyTarget,
    VITE_APP_TRUE_API: proxyPrefix,
  } = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      VueRouter({ dts: 'src/route-map.d.ts' }),
      vue(),
      vueDevTools(),
      AutoImport({
        imports: ['vue'],
        dtsMode: 'overwrite',
        resolvers: [
          ElementPlusResolver(),
        ],
      }),
      Components({
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [
          ElementPlusResolver(),
        ],
      }),
    ],
    // alias别名设置
    resolve: {
      alias: {
        '~': path.resolve(import.meta.dirname, './src'),
      },
    },
    // 服务设置
    server: {
      host: '0.0.0.0',
      port: 5173,
      open: false,
      proxy: proxyPath && proxyTarget && proxyPrefix !== undefined
        ? {
            [proxyPath]: {
              target: proxyTarget,
              changeOrigin: true,
              rewrite: pathStr => pathStr.replace(proxyPath, proxyPrefix),
            },
          }
        : undefined,
    },
    // build配置
    build: {
      target: [
        'es2020',
        'edge88',
        'firefox78',
        'chrome87',
        'safari14',
      ],
      rolldownOptions: {
        output: {
          minify: {
            compress: {
              dropConsole: true,
              dropDebugger: true,
            },
          },
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
