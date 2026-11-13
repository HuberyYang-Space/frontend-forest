# FF-02 项目审查与修复计划

**状态** 四批均已验收，已发布

审查基线为 FF-01 提交 `6e257e7`。覆盖首页、外部搜索、资源卡、播放器、404、客户端路由、项目自有类型和构建发布配置。

## P1 优先修复

1. **搜索提交重载并截断关键词，已复现。** [搜索组件](../../src/components/BaseSearchEngine.vue)打开外部结果后，表单仍执行默认 GET。Chrome 记录到一次外部打开，同时原页文档被替换，地址变成 `?word=`。输入 `Vue+C++ & TS#pin` 后，谷歌查询参数解码为 `Vue C   `，`#pin` 成了 URL 片段。
2. **移动端目录和搜索控件超出视口，已复现。** 375px 宽度下，页面和目录均宽 710px，展开的搜索控件右沿位于 510px，收起按钮超出屏幕。[目录样式](../../src/styles/homepage.scss)和[搜索组件](../../src/components/BaseSearchEngine.vue)都需要随视口约束尺寸。
3. **播放器卸载后仍创建，单组故障拖垮歌单，已复现。** 三组请求在途时从首页进入 404，再释放响应，APlayer 创建在已脱离文档的节点上。三组中一组返回 503、两组正常时，最终曲目数为 0。[首页生命周期](../../src/pages/index.vue) · [歌单解析](../../src/services/playlist.ts)
4. **损坏的发布包会删除现网版本，已在隔离目录复现。** 用基线远程脚本，仅将工作目录换成临时目录。好包能替换旧首页，坏包触发 tar 报错，旧首页消失，脚本仍退出 0。源站和回滚条件见第四批验收记录。[部署工作流](../../.github/workflows/deploy.yml)

## P2 修复交互与收紧边界

- **键盘和焦点。** Chrome 中按 Tab 切到谷歌引擎，焦点仍留在搜索框。首页卸载后，遗留监听仍在 404 上拦截 Enter。资源卡语言链接和 404 返回入口使用点击型元素。搜索提供独立的可聚焦引擎选择，恢复 Tab 和 Shift+Tab 的原生焦点顺序，同步改引导文案。保留页面空闲时用 Enter 打开搜索的习惯，过滤已被处理的事件、交互控件、输入法组合和重复按键。关闭时恢复焦点。[搜索](../../src/components/BaseSearchEngine.vue) · [资源卡](../../src/components/CardList.vue) · [404](../../src/pages/%5B...path%5D.vue)
- **类型缺口。** 全局 `AnyKey`、裸 APlayer 模块声明、组件和 DOM 的 `as any`、`ref<any[]>`、Axios 隐式 `any` 让严格模式漏掉实际错配。例如资源卡向签名为 `string[]` 的函数传入单个字符串，当前实现以子串匹配标签。保留可推断的局部类型，给 props、模板引用、事件、异步边界和第三方接口补类型。[APlayer 声明现路径](../../src/types/aplayer.d.ts) · [资源卡](../../src/components/CardList.vue) · [歌单请求](../../src/services/playlist.ts)
- **导航与视差的生命周期。** 导航写入响应式代理，模板读取原始数组。首页用视口坐标当作绝对滚动位置。两个滚动监听均未随组件卸载。先在真实浏览器复现高亮、非零起点滚动和重复挂载，再分别处理已证实的问题。[导航](../../src/composables/useNavFixed.ts) · [首页](../../src/pages/index.vue) · [视差](../../src/composables/useParallax.ts)
- **数据与视图耦合。** 27 条静态资源经假异步加载，悬浮状态写进资源对象，卡片再用 watch 复制 props。将数据与视图状态分开，移除静态资源的加载状态。两个 SFC 同时载入首页样式，先核对构建产物与实际生效的选择器，再按消费者拆分。[资源清单](https://github.com/Hub-yang/frontend-forest/blob/d1036e9/src/data/resources.ts) · [资源卡](../../src/components/CardList.vue) · [首页](../../src/pages/index.vue)

## P3 入口、配置与待复现项

- Chrome 查询到两个 `#app`，同时中文页面标记为 `lang="en"`。收敛挂载节点，修正语言标记，移除入口内联脚本的松散比较、旧注释和已确认无效的 IE 专用滤镜。按使用点引入图标，检查异步块和 404 产物。[HTML 入口](../../index.html) · [根组件](../../src/App.vue) · [应用入口](../../src/main.ts)
- 基线审查时，标题计时器覆盖离开文案仅有模拟时钟证据，路由加载失败后的进度条状态待核实。歌单无条件删除首项也需对照有无占位的响应。后续验证见第二、三批验收记录。[标题](../../src/composables/usePageTitle.ts) · [路由进度](../../src/main.ts) · [歌单解析](../../src/services/playlist.ts)
- 开发代理在仓库中只有旧注释指向，删除前核实是否用于本地调试。生产 history fallback 需单独核实，Vite 预览直达 404 只覆盖前端路由。[Vite 配置](../../vite.config.ts) · [Vue Router 的服务端配置要求](https://router.vuejs.org/guide/essentials/history-mode)

## 实施与验证

1. **搜索与窄屏。** 用一个表单提交入口阻止默认导航，增加显式提交按钮。为三家引擎建模，用 `URL.searchParams.set` 写入已去除首尾空白的关键词，空白不打开结果。将引擎选择改为具有键盘语义的控件，移除对 Element Plus 私有 DOM 的事件绑定，处理搜索监听与计时器清理。让目录网格和搜索面板随视口收缩。回归覆盖鼠标与 Enter 各提交一次、空值、中文和 `+ & #`、三家查询参数、同一文档与历史、Tab 正反顺序、Esc 焦点、输入法组合事件，以及 375px、390px 和桌面尺寸。真实输入法行为单独标明验证情况。[Vue 事件修饰符](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers) · [Element Plus Input 公共接口](https://element-plus.org/en-US/component/input.html#exposes) · [MDN URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
2. **播放器与生命周期。** 将歌单请求及解析移到 `src/services/playlist.ts`，按 `unknown` 校验响应，给曲目的必需字段和 APlayer 实际消费的选项补类型。通过请求超时、取消及逐组结果隔离保护首页。在首页的类型化模板引用上创建实例，卸载取消请求并调用 `destroy()`，移除全局播放器注入和调试变量。保留歌单顺序、封面及歌词映射。回归覆盖完整、部分失败、空和异常响应、慢请求离页与重进、已创建实例卸载及目录独立可用。[Vue 模板引用类型](https://vuejs.org/guide/typescript/composition-api.html#typing-template-refs) · [Vue 组合式函数的副作用清理](https://vuejs.org/guide/reusability/composables.html#side-effects)
3. **类型、别名与目录。** 把静态清单和数据模型移到 `src/data/resources.ts`，同步改协作入口与 FF-03 的文件引用。用类型化 props、稳定键和组件内状态处理资源卡，语言入口改用原生链接并支持键盘与触屏。图片失败用类型收窄后的 `Event.currentTarget`，验证回退只触发一次。已复现的 Vue 生命周期逻辑按所属组件整理到 `src/composables/`，保留文件路由约定。检查项目自有 TS、Vue 和 Vite 配置的类型边界，清理无消费者的定义。对 JS 配置及 HTML 内联脚本按 ES2015 以上语法和现有浏览器目标检查。对照验证 27 条记录的 ID、顺序、分类、链接、标签、简介和图标路径。[Antfu Vitesse 的别名与目录](https://github.com/antfu-collective/vitesse/blob/main/vite.config.ts)
4. **单独修复发布流程。** 先核实服务器站点根目录、同盘暂存能力、需保留的文件和 history fallback，再设计独立上传、解包校验、切换及回滚。候选版本完整后再切换，保留上次成功版本。隔离验证坏包、缺 `index.html`、异常条目、切换失败和重试，要求失败返回非零且旧首页和旧资源仍可读。真实发布单独验收。[现有工作流](../../.github/workflows/deploy.yml) · [SSH Action 错误处理](https://github.com/appleboy/ssh-action)

### 类型和路径别名的完成标准

- `tsconfig.json` 删除 `@/*`，`vite.config.ts` 删除 `@`，首页和资源卡的两处 SCSS `@use` 改为 `~/`。npm 的 `@scope`、Vue 的 `@` 事件和 Sass 指令照常使用。用实际 TS 和 Vite 解析分别证明 `~/` 可用和 `@/` 不再解析，并构建 Sass 确认样式作用到对应元素。[TS 配置](../../tsconfig.json) · [Vite 配置](../../vite.config.ts) · [Vite 别名文档](https://vite.dev/config/shared-options.html#resolve-alias)
- 自有代码清除显式或隐式的 `any` 逃逸，外部未知数据从 `unknown` 收窄。类型检查覆盖应用和 Vite 配置，重新生成并核对自动导入、组件和路由声明。使用 `pnpm lint`、`pnpm exec vue-tsc --noEmit`、`pnpm build` 和 Vite 原生配置加载构建验收。
- 行为回归先在原实现上得到预期失败，再验证修复。若增加源码或配置守卫，逐一恢复它声称拦截的每个回退，确认 diff 确实改到目标且守卫失败。浏览器用已知 DOM 和 console 探针验证环境，以实际 DOM、事件、导航及 console 作为验收依据。

## 本轮审查证据

- 在 `6e257e7` 的隔离副本上，用 Node 26.13.0 跑过 ESLint、`vue-tsc --noEmit`、Vite 默认及原生配置加载的生产构建。构建使用 `CHOKIDAR_USEPOLLING=true` 绕开隔离环境的文件监听限制。
- 在 Vite 生产预览上用无头 Chrome 通过了已知 DOM 和 console 探针，再复现搜索重载、查询串截断、Tab 被拦截、375px 溢出和播放器问题。外部搜索打开调用及远端资源由探针接管。播放器结论覆盖本地夹具下的请求竞态和部分失败，远端歌单契约仍待核实。
- 临时目录用同一部署脚本对照。好包 `exit=0 index=new`，坏包 `exit=0 index=missing`。生产部署和服务器配置未验证。

FF-02 的目录迁移只移动既有资源记录，逐条更新链接归 FF-03。Vue Vapor 的评估继续沿用 [FF-01 记录](2026-11-10-ff-01-dependency-upgrade.md#vue-vapor-评估)。

## 第一批验收

2026-11-10 在隔离工作树完成搜索和窄屏修复。

- 搜索使用原生表单和引擎下拉框。Enter 和点击搜索按钮都走同一提交入口，空白不打开结果，三家引擎的查询参数保留中文和 `+ & #`。展开后聚焦输入，Tab 和 Shift+Tab 按原生顺序移动，Esc 收起并把焦点还给展开按钮。首次引导在点击高亮按钮后关闭，页面卸载时清理快捷键监听和引导计时器。[搜索组件](../../src/components/BaseSearchEngine.vue)
- Chrome 的已知 DOM 与 console 探针通过。原实现复现了重载、关键词损坏、空白提交、焦点被拦截、离页后的键盘监听和窄屏溢出。修复后 14 项回归通过。实际新标签页使用本地拦截响应，原页文档、地址和历史长度未变化，子页 `window.opener` 为 `null`。输入法用组合事件和按键标记验收，真实系统输入法及 Safari 待实机验证。
- 320px、375px、390px、768px、992px 和 1280px 下，页面宽等于视口宽，搜索按钮和输入控件可命中，27 张卡片均在水平边界内。首行分别为 1、1、1、2、3、4 列。[资源卡](../../src/components/CardList.vue) · [首页样式](../../src/styles/homepage.scss)
- Node 26.13.0 和 pnpm 12.18.0 下，`pnpm lint`、`pnpm exec vue-tsc --noEmit`、`pnpm build`、`pnpm exec vite build --configLoader native` 均通过。隔离副本复用 FF-01 安装好的依赖，临时将 pnpm 脚本前置校验设为告警，Vite 构建使用轮询。生成声明只移除了搜索组件停用的三个 Element Plus 组件。主目录 `dev` 原有的 `tsconfig.json` 补丁逐字核对一致。

## 第二批验收

2026-11-10 在隔离工作树完成播放器请求、解析和实例的改造。

- [歌单服务](../../src/services/playlist.ts)按三组独立请求和校验，单组 503 或 8 秒超时时保留其他组的曲目与原有顺序。以仓库已有的 FLAC 对象键为准，按键内容跳过目录占位、异常记录、HTML 和非法 Unicode。有效首条、封面和歌词映射均通过测试。
- [首页](../../src/pages/index.vue)持有[类型化播放器](../../src/types/aplayer.d.ts)，仅在页面存活且有有效曲目时创建。离开首页会取消在途的三组歌单请求并调用 `destroy()`。空歌单时仍可使用全部 27 张资源卡。APlayer 1.10.1 的歌词 XHR 由其内部管理，`destroy()` 不会取消该请求。[APlayer API](https://github.com/DIYgod/APlayer/blob/master/docs/README.md)
- Chrome 通过已知 DOM 与 console 探针。旧版复现五项失败，独立复核追加的 HTML 注入与非法 UTF-16 也先复现。最终 9 项回归通过，包括确认三条请求收到 abort、播放中的音频在离页后暂停并清空源、再次进入时只创建一个实例。
- 线上歌单接口探测遇到 SSL 连接超时，播放验证使用本地歌单、音频和歌词响应。Node 26.13.0 下 ESLint、`vue-tsc --noEmit` 以及 Vite 默认和原生配置加载的生产构建均通过。

## 第三批验收

2026-11-10 在隔离工作树完成项目自有类型、路径别名和目录整理。

- [静态资源清单](https://github.com/Hub-yang/frontend-forest/blob/d1036e9/src/data/resources.ts)与旧清单逐项深比较通过。两组共 27 条，ID、顺序、组名、地址、标签、简介和图标路径一致。卡片用原生折叠控件展开中英文链接，桌面入口由悬停展开改为点击。标签颜色改为精确匹配，`react native` 和 `nuxtjs` 等复合标签使用默认色。卡片与首页样式分别按作用域加载。[资源卡](../../src/components/CardList.vue)
- TypeScript 与 Vite 的实际解析器均解析 `~/main` 到 `src/main.ts`，均拒绝 `@/main`。分别恢复 TS、Vite、首页 SCSS 和资源卡 SCSS 的旧别名，核对四处变异均落地并分别触发预期失败，恢复后通过。ESLint 加开显式 `any` 检查、`vue-tsc --noEmit`、Vite 默认和原生配置构建均通过，生成声明已对照。主目录 `dev` 的 `tsconfig.json` 原补丁逐字核对，并与本批别名调整在隔离副本合并通过类型检查。
- Chrome 通过已知 DOM 与 console 探针，最终 14 项回归通过。键盘和触屏可展开语言链接，坏图回退一次，320px 至 1280px 的四个宽度下页面无横向溢出。导航点击后高亮，从 120px 起滚时目录准确停在视口顶部下方 60px，离页后两条滚动监听均已移除。404 返回支持键盘且替换历史，深层路径的加载图返回 200，搜索和播放器入口也通过复测。
- 标题计时器通过 Chrome 合成可见性事件验证。注入路由分块加载失败后，基线进度条正常退出，保留该逻辑。开发代理保留现有用途，缺少代理配置的模式跳过代理初始化。

## 第四批验收与回滚

2026-11-10 通过只读 SSH 确认 Nginx 直接服务物理目录 `/www/wwwroot/frontend-forest`，配置含 `try_files $uri $uri/ /index.html`。源站首页、深层路径均返回 200，响应与磁盘首页的 SHA-256 一致。站点和 `/www` 位于同一 XFS 文件系统，目录中只有当前 Vite 构建的七项顶层产物。源站为 Linux 6.6，Python 3.11.6 提供 `renameat2`，`/www/.frontend-forest-deploy` 当时尚不存在。[Linux 原子目录交换](https://man7.org/linux/man-pages/man2/rename.2.html)

- [工作流](../../.github/workflows/deploy.yml)在上传前运行回归，将归档上传到 `/www/.frontend-forest-deploy/incoming/<运行号>-<尝试号>`。该路径位于已核对的站点根目录之外。[发布脚本](../../.github/scripts/frontend_forest_deploy.py)校验归档路径、条目类型、TAR 结束块、gzip 完整性、顶层文件及首页入口资源，再在锁内原子交换两个物理目录。旧站留在 `/www/.frontend-forest-deploy/releases/<运行号>-<尝试号>`。
- 隔离 Linux 和 Python 3.11 的 [9 项回归](../../.github/scripts/test_deploy.py)通过，覆盖坏包、重新压缩的截断 TAR、缺首页或入口资源、异常条目、未知线上文件、切换前后中断和重复回滚。额外用实际目录权限触发内核 `EACCES`，旧首页、旧 JS 和加载图均返回 200，恢复权限后用同编号重试成功。实际 Vite 构建用 GNU tar 打包后，6 个入口资源返回 200，CLI 回滚后旧站再次通过 HTTP 对照。工作流 YAML 解析与远端脚本语法检查通过。
- 首次实际发布前，确认 Actions 部署账号对 `/www`、`/www/wwwroot` 和现网站点目录有交换所需的权限。只读核查使用本机已有 SSH 登录，Actions 的凭据和实际上传仍待首轮验收。用同一运行号核对发布记录。交换后校验源站首页、一个带哈希的入口资源、加载图和深层路由回退。
- 当新版本已交换且需恢复时，使用该次发布的编号和上传的脚本执行下方命令。脚本会核对现网和备份目录身份，拒绝回滚未生效、已回滚或已被其他版本替换的发布。至少保留当前可回滚的目录、同编号的 JSON 记录和上传脚本。由维护者确认后整理更早的备份和失败上传。新增静态根目录文件需同步更新发布校验清单。

```sh
release='<GitHub Actions 运行号>-<尝试号>'
python3 -B "/www/.frontend-forest-deploy/incoming/$release/frontend_forest_deploy.py" rollback /www/wwwroot/frontend-forest "$release"
```

## 生产发布验收

2026-11-10 经确认发布 `d1036e9`。Actions 通过冻结安装、生产构建、9 项发布回归、上传和目录交换。发布编号为 `42748565811-1`。[Deploy 运行记录](https://github.com/HuberyYang-Space/frontend-forest/actions/runs/42748565811)

- 源站首页、深层路由、`/loading.gif` 和首页引用的 6 个入口资源均返回 HTTP 200，响应与磁盘文件逐字节一致。线上首页 SHA-256 为 `0925b867d6bea5bef05aaa743908931c292b754b8c3bc025e04a0beba38b8fe2`，与本地生产构建一致。
- 从服务器按正常 DNS 请求公开域名，首页返回 HTTP 200，SHA-256 与源站一致。
- 现网站点和回滚目录的设备及 inode 与交换记录一致。旧版在 `/www/.frontend-forest-deploy/releases/42748565811-1`，首页 SHA-256 为 `8e32f3d1f493429279490185dbdf8ac8fefe110e385e71d14a113c6ab7f52fbb`，与发布前一致。回滚脚本已核对存在。
