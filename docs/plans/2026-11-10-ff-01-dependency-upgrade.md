# FF-01 依赖升级与验证计划

**状态** 已完成 · 2026-11-10

> 审批后按批执行，并在 [FF-01](../TODO.md#ff-01-升级项目依赖与配置)记录阶段结果。先通过每批验证，再进入下一批。

**目标** 将有实际用途的直接依赖升级到执行时的最新兼容稳定版，并同步适配构建、类型检查、lint、提交钩子和 CI。把无法升级的依赖、约束及解阻条件逐项留档。

**架构** 沿用 Vue 静态单页应用和 GitHub Actions 部署链路。按运行环境、开发检查、构建与路由、业务依赖四批更新，每批有独立验证和回退边界。

**范围** 以 [FF-01 待办](../TODO.md#ff-01-升级项目依赖与配置)为准。源码调整限于升级兼容需要，站点缺陷审查和资源核验分别由 FF-02 和 FF-03 追踪。

## 版本盘点

以 `dev` 的 `4643e35` 为基线，对比了 [package.json](../../package.json)、[pnpm-lock.yaml](../../pnpm-lock.yaml)、本机安装目录和 npm Registry。下表 29 个直接依赖的本机安装版本与锁定版本一致。「最新稳定版」是 2026-11-10 查询到的 npm `latest`，均为正式版。执行时重新核对版本、引擎和 peer 范围，优先使用当时可兼容的稳定版本。

| 包及版本来源                                                                                             | 声明        | 锁定 / 已安装 | 最新稳定版 | 批次与处理            |
| -------------------------------------------------------------------------------------------------------- | ----------- | ------------- | ---------- | --------------------- |
| [@element-plus/icons-vue](https://registry.npmjs.org/%40element-plus%2Ficons-vue/2.3.2)                  | `^2.3.1`    | 2.3.2         | 2.3.2      | 4 · 已最新            |
| [aplayer](https://registry.npmjs.org/aplayer/1.10.1)                                                     | `^1.10.1`   | 1.10.1        | 1.10.1     | 4 · 已最新            |
| [axios](https://registry.npmjs.org/axios/1.21.1)                                                         | `^1.9.0`    | 1.19.0        | 1.21.1     | 4                     |
| [element-plus](https://registry.npmjs.org/element-plus/2.14.8)                                           | `^2.9.1`    | 2.14.4        | 2.14.8     | 4                     |
| [nanoid](https://registry.npmjs.org/nanoid/6.0.2)                                                        | `^5.1.5`    | 5.1.16        | 6.0.2      | 4                     |
| [nprogress](https://registry.npmjs.org/nprogress/0.2.0)                                                  | `^0.2.0`    | 0.2.0         | 0.2.0      | 4 · 已最新            |
| [vue](https://registry.npmjs.org/vue/3.5.45)                                                             | `^3.5.16`   | 3.5.41        | 3.5.45     | 3                     |
| [vue-router](https://registry.npmjs.org/vue-router/5.4.0)                                                | `^4.5.1`    | 4.6.4         | 5.4.0      | 3                     |
| [@antfu/eslint-config](https://registry.npmjs.org/%40antfu%2Feslint-config/10.0.0)                       | `^4.13.2`   | 4.19.0        | 10.0.0     | 2                     |
| [@commitlint/cli](https://registry.npmjs.org/%40commitlint%2Fcli/21.2.4)                                 | `^19.8.1`   | 19.8.1        | 21.2.4     | 2                     |
| [@commitlint/config-conventional](https://registry.npmjs.org/%40commitlint%2Fconfig-conventional/21.2.4) | `^19.8.1`   | 19.8.1        | 21.2.4     | 2                     |
| [@types/node](https://registry.npmjs.org/%40types%2Fnode/26.6.6)                                         | `^22.15.29` | 22.20.1       | 26.6.6     | 2                     |
| [@types/nprogress](https://registry.npmjs.org/%40types%2Fnprogress/0.2.3)                                | `^0.2.3`    | 0.2.3         | 0.2.3      | 4 · 已最新            |
| [@vitejs/plugin-legacy](https://registry.npmjs.org/%40vitejs%2Fplugin-legacy/8.2.4)                      | `^6.1.1`    | 6.1.1         | 8.2.4      | 3 · 移除未启用插件    |
| [@vitejs/plugin-vue](https://registry.npmjs.org/%40vitejs%2Fplugin-vue/6.0.10)                           | `^5.2.4`    | 5.2.4         | 6.0.10     | 3                     |
| [eslint](https://registry.npmjs.org/eslint/10.14.0)                                                      | `^9.28.0`   | 9.39.5        | 10.14.0    | 2                     |
| [eslint-plugin-format](https://registry.npmjs.org/eslint-plugin-format/2.0.1)                            | `^1.0.1`    | 1.5.0         | 2.0.1      | 2                     |
| [husky](https://registry.npmjs.org/husky/9.1.7)                                                          | `^9.1.7`    | 9.1.7         | 9.1.7      | 2 · 已最新            |
| [lint-staged](https://registry.npmjs.org/lint-staged/17.6.0)                                             | `^16.1.0`   | 16.4.0        | 17.6.0     | 2                     |
| [sass-embedded](https://registry.npmjs.org/sass-embedded/1.108.1)                                        | `^1.83.0`   | 1.102.0       | 1.108.1    | 3                     |
| [typescript](https://registry.npmjs.org/typescript/7.0.2)                                                | `^5.8.3`    | 5.9.3         | 7.0.2      | 2 · 暂定 6.0.3        |
| [unplugin-auto-import](https://registry.npmjs.org/unplugin-auto-import/21.1.0)                           | `^19.3.0`   | 19.3.0        | 21.1.0     | 3                     |
| [unplugin-element-plus](https://registry.npmjs.org/unplugin-element-plus/0.11.2)                         | `^0.10.0`   | 0.10.0        | 0.11.2     | 3 · 移除未使用插件    |
| [unplugin-icons](https://registry.npmjs.org/unplugin-icons/24.0.0)                                       | `^22.1.0`   | 22.5.0        | 24.0.0     | 3 · 移除未使用插件    |
| [unplugin-vue-components](https://registry.npmjs.org/unplugin-vue-components/32.1.0)                     | `^28.7.0`   | 28.8.0        | 32.1.0     | 3                     |
| [unplugin-vue-router](https://registry.npmjs.org/unplugin-vue-router/0.19.2)                             | `^0.12.0`   | 0.12.0        | 0.19.2     | 3 · 迁入 Vue Router 5 |
| [vite](https://registry.npmjs.org/vite/8.3.7)                                                            | `^6.0.5`    | 6.4.3         | 8.3.7      | 3                     |
| [vite-plugin-vue-devtools](https://registry.npmjs.org/vite-plugin-vue-devtools/8.2.1)                    | `^7.6.8`    | 7.7.10        | 8.2.1      | 3                     |
| [vue-tsc](https://registry.npmjs.org/vue-tsc/3.3.14)                                                     | `^2.1.10`   | 2.2.12        | 3.3.14     | 2                     |

| 工具或 Action                                 | 当前                   | 稳定版 / 计划                                                                                                                                                          |
| --------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js                                       | CI 24，本机 26.13.0    | CI 与本机对齐 Node 26 LTS，盘点版本 26.13.0。 [Node.js 发布记录](https://nodejs.org/en/blog/release/v26.13.0)                                                          |
| pnpm                                          | 项目和 CI 钉在 11.22.0 | 12.18.0。 [npm Registry](https://registry.npmjs.org/pnpm/12.18.0) · [迁移指南](https://pnpm.io/migration-v11)                                                          |
| `actions/checkout`                            | `v4`                   | `v7.0.1`。 [发布记录](https://github.com/actions/checkout/releases/tag/v7.0.1)                                                                                         |
| `pnpm/setup`                                  | `v1`                   | `v3.1.2`。 [发布记录](https://github.com/pnpm/setup/releases/tag/v3.1.2)                                                                                               |
| `appleboy/scp-action` / `appleboy/ssh-action` | `v1.0.0` / `v1.2.5`    | 均为当前最新。 [SCP 发布记录](https://github.com/appleboy/scp-action/releases/tag/v1.0.0) · [SSH 发布记录](https://github.com/appleboy/ssh-action/releases/tag/v1.2.5) |

运行环境的主要约束来自 Vite 8、ESLint 10、commitlint 21、lint-staged 17 和 Nano ID 6。当前 CI 的 Node 24 与拟采用的 Node 26 均满足所列目标版本的 Node 要求，lint-staged 另要求 Git ≥2.32。建议用 26 LTS 与本机和最新 `@types/node` 同代。若需要继续支持 Node 24，CI 可保留 24，`@types/node` 选 24.19.2。 [Vite engines](https://registry.npmjs.org/vite/8.3.7) · [ESLint engines](https://registry.npmjs.org/eslint/10.14.0) · [Commitlint engines](https://registry.npmjs.org/%40commitlint%2Fcli/21.2.4) · [lint-staged 要求](https://github.com/lint-staged/lint-staged/blob/v17.6.0/MIGRATION.md) · [Node 24 类型](https://registry.npmjs.org/%40types%2Fnode/24.19.2)

## 执行和验证约定

- [x] 确认后从当前代码建立隔离工作区，记录原始文件状态、版本和命令退出码。先按当前 CI 的 Node 24 / pnpm 11 做一次干净安装、lint、类型检查和构建，记录产物及现有告警。此前 macOS 默认监听两次报 `EMFILE`，轮询构建成功，作为对照单独记录。 [接手基线](../README.md#接手基线)
- 每批在候选锁文件上复测 `pnpm install --frozen-lockfile`、`pnpm lint`、`pnpm exec vue-tsc --noEmit` 和 `pnpm build`。检查退出码、依赖图、生成声明和产物，标记既有告警和本批新增告警。失败先复现，再定位到本批版本或配置，必要时一起回退声明和锁文件。
- 浏览器验收先取得调用授权，以 DOM 状态和 console 为准。探针先跑已知结果，能变异的守卫验证失败路径。验证产生的临时夹具和产物记录路径，完成后清理。部署流程用独立 Linux 环境验证安装和构建，避开有 SCP / SSH 发布步骤的工作流触发器。

## 批次 1 · Node、pnpm 和 CI

- [x] 用 Node 26 LTS 复测原依赖图，再升级 pnpm。更新 [package.json](../../package.json) 的 `engines.node` 为 `^26.13.0`，同步更新 `packageManager`。在 [部署工作流](../../.github/workflows/deploy.yml)更新 checkout 和 pnpm/setup，`runtime` 切到 `node@26`，由 Action 从 `packageManager` 读取唯一 pnpm 版本，保留 `install: false` 和显式冻结安装。确认 Ubuntu runner 可运行 Node 26 的 Linux 二进制，包括 `libatomic`。 [Node.js 26 发布说明](https://nodejs.org/en/blog/release/v26.13.0) · [pnpm/setup 输入说明](https://github.com/pnpm/setup#inputs)
- [x] 核对 [pnpm-workspace.yaml](../../pnpm-workspace.yaml) 的 `allowBuilds`、`trustPolicy` 和既有豁免。pnpm 12 能读旧锁文件，但会拒绝未知设置。必要时用新 CLI 更新 [锁文件](../../pnpm-lock.yaml)，解释格式或解析变化，确认直接依赖版本在本批没有漂移。若版本受发布年龄或信任策略拦截，记录具体包和原因。 [pnpm 11 → 12](https://pnpm.io/migration-v11#behavior-changes) · [依赖安装策略](https://pnpm.io/settings)
- [x] 在 macOS arm64 和等价 Ubuntu 环境验证实际运行的是预期 Node/pnpm，冻结安装通过且工作区设置可识别。确认缓存恢复后的安装也能重复执行，版本变更后的构建结果可与基线比较。

## 批次 2 · TypeScript、ESLint 和提交钩子

- [x] 将 TypeScript 升到 **6.0.3**，同批升级 `vue-tsc`、`@types/node`、ESLint、Antfu 配置和格式化插件。TypeScript **7.0.2** 暂缓。Antfu 10 使用的 `@typescript-eslint/parser@8.72.2` 支持 TS `>=4.8.4 <6.1.0`，Vue 的 `vue-tsc@3.3.14` 仍通过 Volar 注入 JS 编译器，而 TS 7 已切换到原生编译器。等解析器和 Vue 类型检查链都提供正式支持后，再重跑两条验证链决定是否升 7。 [TypeScript 7](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) · [parser peer](https://registry.npmjs.org/%40typescript-eslint%2Fparser/8.72.2) · [Vue 类型检查入口](https://github.com/vuejs/language-tools/blob/v3.3.14/packages/tsc/index.ts)
- [x] 在 [tsconfig.json](../../tsconfig.json) 去掉弃用的 `baseUrl`，两个别名的目标改为 `./src/*`，保留 `Bundler`、严格检查和 `noEmit`。检查 TS 6 默认启用的 `noUncheckedSideEffectImports` 对 CSS/SCSS、APlayer CSS 和 Vite 资源声明的影响。若 Node 类型未进入编译上下文，再显式补入 `node`，以实际诊断为准。 [TypeScript 6.0 迁移说明](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html)
- [x] 在 [ESLint 配置](../../eslint.config.js)保留 flat config、格式化和 `no-console` 覆盖，清理未使用的 `globals.definePage`。对比 `eslint --print-config` 在 TS 和 Vue 文件上的有效规则，核对 Antfu 10 新增的换行规则和格式化输出。在 `.vscode/settings.json` 原样复制 Antfu 官方 **VS Code support** 的完整 JSONC，包含全量语言列表。修改 [.gitignore](../../.gitignore) 放行设置文件，在 [扩展推荐](../../.vscode/extensions.json)保留 Vue 插件并增加 `dbaeumer.vscode-eslint`。 [ESLint 10 迁移指南](https://eslint.org/docs/latest/use/migrate-to-10.0.0) · [Antfu 10 发布说明](https://github.com/antfu/eslint-config/releases/tag/v10.0.0) · [Antfu VS Code support](https://github.com/antfu/eslint-config#ide-support-auto-fix-on-save)
- [x] 将 commitlint 两个包同步升到 21.2.4，lint-staged 升到 17.6.0，核对 Git ≥2.32。保留 [项目提交类型规则](../../commitlint.config.js)及现有 `eslint --fix` 仅接收暂存文件的匹配方式。在临时 Git 目录验证有效提交信息通过、无效类型被拦截，以及部分暂存时未暂存和无关文件没有被带入。 [Commitlint 21 说明](https://github.com/conventional-changelog/commitlint/releases/tag/v21.0.0) · [lint-staged 迁移指南](https://github.com/lint-staged/lint-staged/blob/v17.6.0/MIGRATION.md)

## 批次 3 · Vite、Vue Router 和自动导入

- [x] 将 Vite 8、Vue 3.5.45、Vue 插件、Vue DevTools 8、Sass 和 Vue Router 5 放同一批。Router 5.4.0 的文件路由 peer 要求 Vite `^7.3.0 || ^8.0.0`，Vue 要求 `^3.5.34 || ^4.0.0`。在 [Vite 配置](../../vite.config.ts)切换到 `vue-router/vite` 并放在 `vue()` 前，移除独立 `unplugin-vue-router` 和旧客户端类型引用。保留 [入口](../../src/main.ts)现用的 `vue-router/auto-routes` 和 HMR 入口。 [Vite 6 → 7](https://v7.vite.dev/guide/migration) · [Vite 7 → 8](https://vite.dev/guide/migration.html) · [Vue Router 4 → 5](https://router.vuejs.org/guide/migration/v4-to-v5) · [Router peer](https://registry.npmjs.org/vue-router/5.4.0)
- [x] 删除 SCSS 的旧 `api` 选项，保留 `additionalData` 和 PostCSS 处理。建议显式保留 Vite 6 的原 `build.target` 数组 `['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']`，CSS 目标继承它。Vite 8 默认已抬到 Chrome 111、Edge 111、Firefox 114、Safari 16.4。旧目标仅用于保留转译意图，实际兼容范围还受 Element Plus 等依赖影响。 [Vite 6.4.3 默认目标](https://github.com/vitejs/vite/blob/v6.4.3/packages/vite/src/node/constants.ts) · [Vite 8 构建选项](https://vite.dev/config/build-options) · [Element Plus 浏览器要求](https://element-plus.org/en-US/guide/installation.html)
- [x] 用 Rolldown/Oxc 的 `build.rolldownOptions.output.minify.compress` 设置 `dropConsole: true`、`dropDebugger: true`，随同删除旧 Terser 配置与未注册的 `@vitejs/plugin-legacy`。当前 Terser 经 legacy 插件的 peer 间接装入。用临时入口验证生产移除探针语句，逐一关闭对应选项确认探针能检测回退。CSS 默认改由 Lightning CSS 压缩，复测按需样式及静态 CSS。若 Oxc 产物确有回归且需暂留 Terser，把它作为显式直接开发依赖并记录原因。 [Rolldown 配置](https://rolldown.rs/reference/OutputOptions.minify) · [Oxc 压缩选项](https://oxc.rs/docs/guide/usage/minifier/dead-code-elimination) · [Vite CSS 压缩](https://vite.dev/guide/migration.html#css-minification-by-lightning-css)
- [x] 更新自动导入和组件插件，保留 Vue 自动导入及 Element Plus 两处 resolver。删除无调用的 Router 自动导入预设、未注册的 `unplugin-element-plus`，以及无图标消费者的 `unplugin-icons` 和对应 resolver。保留实际被模板消费的 Element Plus 图标。依据新插件配置重生 [auto-imports.d.ts](../../auto-imports.d.ts)、[components.d.ts](../../components.d.ts) 与 [src/route-map.d.ts](../../src/route-map.d.ts)，替换旧路由声明。自动导入改用 overwrite，移除旧声明残留的 Pinia、VueUse 及不存在的工具模块。首次用 `pnpm exec vite build` 生成声明，再从含新声明的干净工作区跑完整构建，确认先执行的 `vue-tsc` 能通过且声明重生无漂移。 [自动导入配置](https://github.com/unplugin/unplugin-auto-import#configuration) · [组件插件配置](https://github.com/unplugin/unplugin-vue-components#configuration) · [Element Plus 按需导入](https://element-plus.org/en-US/guide/quickstart.html#on-demand-import)
- [x] 在开发和生产预览验证首页、未知路径的 404、直接刷新、路由进度、HMR、异步组件和按需 CSS。重点检查 Rolldown 的 CJS/UMD 互操作下 APlayer 可实例化、NProgress 可执行，以及静态资源和生成路由仍可解析。 [Vite CommonJS 迁移说明](https://vite.dev/guide/migration.html#consistent-commonjs-interop) · [Vue Router HMR](https://router.vuejs.org/file-based-routing/hmr)

## 批次 4 · 运行时依赖与最终验收

- [x] 升级 Element Plus、Axios 和 Nano ID。Nano ID 6 要求 Node `^22 || ^24 || >=26`，[导航 hook](../../src/hooks/useNavFixed.ts)的 ESM 命名导入可沿用。Axios 的生产使用点是 [播放列表请求](../../src/config/playList.ts)，Element Plus 的主要验证点是 [首页](../../src/pages/index.vue)、[卡片](../../src/components/CardList.vue)和[搜索组件](../../src/components/BaseSearchEngine.vue)。 [Nano ID 6](https://github.com/ai/nanoid/releases/tag/6.0.0) · [Axios 发布记录](https://github.com/axios/axios/releases) · [Element Plus 2.14.8](https://github.com/element-plus/element-plus/releases/tag/2.14.8)
- [x] 对照基线复测资源卡、中文文案、搜索面板、图标和播放器。验证播放列表成功和失败时首页目录均可用。第三方服务不可达时，分开记录外部状态和可控输入下的回归证据。
- [x] 最终在干净安装上执行全套检查，核对版本、路由与静态产物，记录未升级项、实际浏览器覆盖和剩余风险。确认临时文件清理后更新待办。

## 实施与验收结果

- CI 改用 Node 26 LTS、pnpm 12.18.0、checkout 7.0.1 和 pnpm/setup 3.1.2。工程工具升级到 TypeScript 6.0.3、vue-tsc 3.3.14、ESLint 10.14.0 和 Antfu 10.0.0。VS Code 设置与 Antfu 10 官方 JSONC 逐字一致。
- 前端锁定 Vite 8.3.6、Vue 3.5.45、Vue Router 5.4.0、Element Plus 2.14.8、Axios 1.21.0、Nano ID 6.0.2。Vite 8.3.7 和 Axios 1.21.1 当时均未满 24 小时，按确认的策略使用上一稳定版，保留 `trustPolicy` 且没有新增发布年龄豁免。Axios 的传递依赖 `follow-redirects` 已在锁文件更新到 1.16.2。TypeScript 7 待 Vue 类型检查和 ESLint 解析器正式兼容。 [Axios 修复说明](https://github.com/axios/axios/releases/tag/v1.21.1)
- 原版本在 Node 24 下建立基线。最终 Node 26.13.0 和 pnpm 12.18.0 在 macOS arm64 和 Linux x64 容器上均通过干净的 `pnpm install --frozen-lockfile`、`pnpm lint`、`pnpm exec vue-tsc --noEmit`、`pnpm build`。三份生成声明前后相同，macOS 上也通过 Vite 原生配置加载验证。GitHub Actions 实际运行和发布留在发布阶段核验。
- Chrome 开发及生产预览通过 27 张资源卡、搜索快捷键和目标 URL、导航滚动、404 直达与返回、APlayer 播放列表成功及 503 两种夹具。搜索提交后重载到 `?word=` 在旧版对照中同样存在。常规 SFC 热更新可在同一文档生效并恢复，快速增删路由文件的一次探针出现短暂的虚拟模块加载错误后自动恢复。
- 新版 `vue-tsc` 先复现导航模板 ref 的 TS6133，再通过 `useTemplateRef` 适配，滚动状态复测通过。新版 Router 的 `next()` 弃用警告先在 console 复现，再按新版守卫写法消除。临时 Husky 仓库验证合法和非法提交信息以及部分暂存。Oxc 的两个压缩开关分别关闭后让对应探针失败，恢复后均通过。

- 提交前复核了 Vite 8、Router 5、TypeScript 6、ESLint 10 和 pnpm 12 的迁移要求。清理了锁文件中无匹配依赖的 pnpm 规则和已不存在的 TypeScript 排除路径。生产预览下，深层路由的加载图由 404 恢复为 `/loading.gif` 返回 200、`image/gif` 且文件字节一致。最终冻结安装、lint、类型检查、默认构建和原生配置构建均通过，生成声明可重复生成。 [Vite public 目录](https://vite.dev/guide/assets.html#the-public-directory)

## Vue Vapor 评估

**建议等 Vue 3.6 正式版，再做单组件试点。** 本轮 npm `latest` 为 Vue 3.5.45，包含 Vapor 的 3.6 分支仍是 `3.6.0-rc.14`。Vue 官方给现有应用的建议是局部启用，并通过 `vaporInteropPlugin` 与 VDOM 组件互操作。 [npm Vue 发布标签](https://registry.npmjs.org/-/package/vue/dist-tags) · [Vue 3.6 RC](https://github.com/vuejs/core/releases/tag/v3.6.0-rc.14) · [Vapor 官方兼容说明](https://github.com/vuejs/core/releases/tag/v3.6.0-rc.1#feature-compatibility)

- [首页](../../src/pages/index.vue)通过 `getCurrentInstance()` 和 `globalProperties` 访问 APlayer。Vapor 不支持这两种使用方式。[搜索组件](../../src/components/BaseSearchEngine.vue)还从 Element Plus 组件实例读取 `$el`，互操作需要单独验收。
- [应用根组件](../../src/App.vue)的 Element Plus Config Provider 和 Vue Router 视图仍依赖 VDOM。混合模式会保留 VDOM 运行时，收益应以实测的首屏资源大小和交互耗时判断。
- 稳定版发布且依赖声明兼容后，可从仅含原生模板的 [Nav.vue](../../src/components/Nav.vue) 开始。保留应用入口的 `createApp`，仅为试点组件选择 Vapor，对比导航滚动和点击的 DOM、console 与产物，再决定是否扩大范围。
