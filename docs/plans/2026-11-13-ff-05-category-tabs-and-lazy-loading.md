# FF-05 资源目录按需加载实施计划

> 已使用 superpowers:executing-plans 按顺序实施并完成本地验收；提交、推送和发布另按后续指令执行。

**状态** 2026-11-13：已完成本地验收；用户随后授权提交、推送和发布，当前处于发布准备阶段。

**Goal:** 将现有 411 项资源迁移到已确认的 16 类，通过现有 Element Plus 标签页切换，按分类下载数据、挂载卡片和加载图标。

**Architecture:** 首页只读取轻量分类元数据；16 份资源清单通过显式动态 import 加载。ElTabs 负责导航，当前分类独占卡片实例；Vue composable 管理异步状态，ElImage 负责图标延迟加载，成功模块复用浏览器原生缓存。

**Tech Stack:** 沿用 Vue 3.5.45、Element Plus 2.14.8、Vite 8.3.6、TypeScript 6.0.3、Node.js 26.13.1、pnpm 12.18.0；不升级现有依赖，不增加组件库或测试框架。

**Spec:** [需求与方案](#需求与方案)。既有发布内容和限制见 [FF-03 核验记录](../ff-03-resource-audit.md#生产发布验收)。

## 全局约束

- 使用已确认的 16 个名称和顺序；每项资源只归一个分类。名称遵循 [AGENTS.md](../../AGENTS.md) 的单一概念规则。
- 优先使用现有组件库的组件及原生能力；不手写标签条、滚动箭头、图片观察器或额外缓存系统。
- 保留全部 411 项、471 个语言入口、原 ID、名称、简介、标签、URL、图标路径及卡片顺序；只改变分类归属和加载方式。
- 图标继续保存在 [既有 images 目录](../../public/images/resource-icons/)。不新增发布脚本未允许的顶层目录。
- 当前分类最多 58 张卡片；访问全部分类后也只保留当前分类卡片。数据成功缓存与 DOM 常驻分开处理。
- 当前资源检索入口仍是外部搜索；本轮不追加目录搜索、筛选、分页、二级导航或资源扩充。首页其余区域维持既有行为并回归检查。
- 生产模块不因测试引入专用开关；新增导出和字段必须有生产消费者。沿用现有自动导入配置。
- 浏览器验证按现行授权规则执行，执行阶段先取得本任务授权、核实工具能力；以 DOM、console、请求记录为依据。不得要求用户把窗口切到前台。
- 保护主 checkout 原有 tsconfig.json 修改；实施前复核 worktree 和远端状态。本计划不授权生产发布。

## 重点复核

1. 同为 46 项的“框架”和“组件库”加载错包时，数量检查仍会通过：必须比较具体 ID 和完整字段。
2. 慢请求 A 晚于 B 返回或失败时，不得覆盖 B；离开分类后，旧卡片链接与悬停状态不得继续存在。
3. 只设置 ElTabPane lazy 会保留已访问内容：遍历 16 类后仍须证明非当前分类卡片已卸载。
4. 动态包网络失败、旧页面引用已删除的包时，要有显式重试和重新载入入口，不能自动无限重载。
5. 视口外图片、图标回退、资源请求记录截断可能产生假结论：用已知请求探针及服务端日志验证观测链路，再比较实际 src、解码状态和延迟请求。

## 需求与方案

### 已确认

- 分类采用下面 16 类；本轮不再调整分类名称或收录范围。
- 分类名称优先使用单一概念，避免并列拼接。
- 后续通过标签页切换分类，并按需加载。
- 优先复用现有 Element Plus 组件。

### 分类清单

目录数量是元数据，直接用于标签及当前分类标题；正文来自对应独立模块。每个 ID 仅出现一次，分类内沿用原清单相对顺序。ID 范围均包含端点，不补造缺失 ID。

| 分类       | 稳定标识 / 模块文件名 | 数量 | 已核对的资源 ID                                                                              |
| ---------- | --------------------- | ---: | -------------------------------------------------------------------------------------------- |
| 框架       | frameworks            |   46 | 001、003、005、006、009—012、014、015、019、028—036、038—047、049—053、057—062、074、148—151 |
| 组件库     | components            |   46 | 017、054—056、085—130，排除 097、118—120、125；另含 140                                      |
| 数据管理   | data                  |   23 | 002、004、007、063—073、075—081、083、084                                                    |
| 跨端       | cross-platform        |   14 | 008、013、016、097、131—139、142                                                             |
| 运行时     | runtimes              |    5 | 018、144—147                                                                                 |
| 工具库     | utilities             |    2 | 048、082                                                                                     |
| 可视化     | visualization         |   58 | 153—181、248—258、265—278、284、286—288                                                      |
| 动画       | animation             |   12 | 182—188、279—282、315                                                                        |
| 表单       | forms                 |   27 | 189—209、259—264                                                                             |
| 网页编辑器 | editors               |   21 | 228—247、283                                                                                 |
| 国际化     | i18n                  |   11 | 210—220                                                                                      |
| PWA        | pwa                   |    8 | 221—227、285                                                                                 |
| CSS        | css                   |   51 | 118—120、125、289—314、316—336                                                               |
| 构建       | build                 |   36 | 020—027、337—353、398—405、413—415                                                           |
| 测试       | testing               |   31 | 354—380、392、393、395、397                                                                  |
| 代码质量   | quality               |   20 | 381—391、394、406—412、416                                                                   |

归属示例：Quasar 属“跨端”，Ionic 属“组件库”，Bun 属“运行时”，Animate.css 属“动画”，Stylelint 属“代码质量”。网页编辑器只收录既有可嵌入库；开发编辑器仍按原约定另排。

### 实现方式比较

| 方式                               | 效果和代价                                                     | 本计划建议                               |
| ---------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| 全量数据加标签页                   | 可减少可见内容，411 项数据仍随首页下载；单用 lazy 还会累计卡片 | 不满足本轮加载目标                       |
| 分类分包、当前面板、组件图片懒加载 | 数据、组件实例、图标请求分别按实际访问产生；沿用静态站发布     | 已确认采用                               |
| 后端接口或列表虚拟化               | 增加接口或滚动维护；当前最大分类只有 58 项                     | 当前没有引入依据，性能实测发现需要时另议 |

### 交互建议

- 在现有外部搜索下方使用 ElTabs / ElTabPane，显示 16 个短名称及数量，默认选“框架”。
- 先采用单层横向标签页，使用组件内置溢出导航与活动标签定位；不强行把 16 项等分压缩进一行，也不手写触屏滑动逻辑。
- 当前页面内保留选择；不增加 URL 参数、浏览历史或本地持久化，刷新回默认分类。这一方案已获用户确认。
- 点击或组件内置方向键切换后立即选中新分类；加载期间显示新分类的骨架，不把旧内容留在新标题下面。
- 键盘行为沿用锁定版本的 ElTabs：方向键会切换选中项并触发相应加载；不另造手动激活协议。真实验证焦点、选中态及面板关联。
- 使用 ElSkeleton，延迟 200ms 显示骨架以减少缓存命中时闪烁；错误使用 ElAlert 和 ElButton，提供“重试”和“重新载入页面”。
- 成功切换或重试不主动滚到页面顶部，不抢走标签焦点。离开卡片分类时重建下一组卡片，清除旧悬停和展开状态。
- 页面整体视觉沿用现有风格，只适配标签栏、状态区及 ElImage 必要尺寸；若需重新确定视觉方向，先另行讨论。

### 加载约定

1. 首页同步入口只含分类标识、名称、数量、加载函数；资源数组不经静态 import 或全量 re-export 回流到首页。
2. 16 个模块各自默认导出 readonly Resource 数组。使用 16 个显式 import 路径，保持打包边界可审查，不引入运行时字符串路径猜测。
3. 只调用当前选中分类的加载函数；不做全分类预取。已经因真实切换发出的 import 无法取消，离开后可完成并由原生模块缓存复用。
4. 加载状态只接受最近一次选择的结果；旧成功、旧失败及销毁后的回调均不得改写当前状态。使用请求序号及 Vue 作用域清理，不给 import 套无效的 AbortController。
5. 缓存优先用 ESM 模块缓存，不写 LRU 或持久化缓存。普通失败允许再次调用加载函数；旧浏览器可能缓存模块失败，因此保留用户主动重新载入入口，不保证所有浏览器的原地重试均成功。
6. 16 个面板壳由 ElTabPane 处理，内部真实内容在当前分类条件下挂载，CardList 使用分类 ID 作为 key。未选分类可有轻量面板壳，不得有卡片或其图片实例。
7. 图标使用 ElImage 的 lazy 能力，fit=contain，正常图标固定 40×40，不开启预览。保留现有 /error.gif 回退：外层 error 插槽最多嵌套一次显示回退图的 ElImage，内层失败使用组件默认错误状态，不再递归。

### 验收目标

- 数据迁移：16 类、411 项、471 个入口；分组外的所有 Resource 字段逐项不变。
- 首次打开：只下载默认分类数据；只挂载 46 张框架卡片，不下载从未选中过的分类数据和图标。
- 切换到“可视化”：只挂载该类 58 张卡片；访问全部分类后仍不超过当前分类数量。
- 可见区域图标正常解码；视口外图标延迟到组件触发范围加载。测试统计区分“尚未触发加载”和“真正失败”。
- 生产首页和每个分类的 JS 静态依赖可追踪，任一分类数据包不得包含其他类别完整数组。
- 在相同环境、视口、冷缓存条件下记录改造前后 JS 请求、图标请求、字节、目录 ready 时间及切换耗时；每组至少 3 次记录中位数，不预先承诺提速百分比。其他首页资源的耗时单列。
- 未激活分类零请求、当前卡片数量及数据完整性为硬验收条件；若目录 ready 或切换中位数出现可重复变慢，不标记性能验收完成，先定位并调整方案，必要时请用户确认取舍。

## 基线

- 产品源码基线为 c014090；实施开始时保留本会话已有的 AGENTS.md、协作入口及计划修改，主 checkout 仍仅有原 tsconfig.json 修改。
- [首页](../../src/pages/index.vue)静态导入全量 resourceGroups，并同时循环挂载四组 [CardList](../../src/components/CardList.vue)；图片尚未设置延迟加载。
- 全部 410 个独立图标源文件共 7,917,793 字节；这不是浏览器网络流量实测。
- 迁移比较算法：按资源 ID 排序，递归排序对象键，保留数组顺序，以 JSON.stringify 生成 UTF-8 后计算 SHA-256。当前 411 项正文指纹为 be423951b1483f10a5c98b90b3d13c0fa5dccbbd73b8f8285f07a41326af7d34；不含分组名称。
- 当前项目没有前端测试框架；Node.js 已支持可擦除 TypeScript。新增测试使用 node:test；Vue composable 显式导入 Vue API，测试中的 TypeScript 文件使用完整扩展名，运行时不依赖 Node 无法解析的 ~/ 别名。
- 数据测试按文件 URL 直接导入 16 个 .ts 数组模块；生产动态映射由构建和真实浏览器逐类核对，不在 Node 中调用 Vite 的无扩展名加载路径。Node 测试只覆盖数据和状态，不宣称覆盖布局、ElTabs DOM 或图片请求。

## 文件职责

下表“新增”为计划路径，实施前尚不存在。

| 文件                                                                                           | 动作和职责                                                                    |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [resource-types.ts](../../src/data/resource-types.ts)                                          | 新增；迁移原 Resource 类型，纯类型，不放数组或加载逻辑                        |
| [resource-categories.ts](../../src/data/resource-categories.ts)                                | 新增；轻量元数据及由其推导的 ResourceCategoryId                               |
| [resource-categories 目录](../../src/data/resource-categories/)                                | 新增；上表 16 个稳定标识各对应同名 .ts 文件，默认导出一个分类数组             |
| [resource-catalog.ts](../../src/data/resource-catalog.ts)                                      | 新增；私有加载函数映射，导出 loadResourceCategory；无全量静态数组和自定义缓存 |
| [useResourceCategory.ts](../../src/composables/useResourceCategory.ts)                         | 新增；异步状态、重试、过期结果及作用域销毁处理                                |
| [ResourceCatalog.vue](../../src/components/ResourceCatalog.vue)                                | 新增；组合 Element Plus 标签页、加载状态和 CardList                           |
| [首页](../../src/pages/index.vue)                                                              | 修改；通过现有异步组件模式接入 ResourceCatalog，移除全量目录导入              |
| [CardList](../../src/components/CardList.vue)                                                  | 修改；类型导入及 ElImage 图标，保留链接开合交互                               |
| [卡片样式](../../src/styles/resource-card.scss)                                                | 修改；适配 ElImage 包装及稳定尺寸，清理失去消费者的旧 img.err 规则            |
| [resources.ts](https://github.com/Hub-yang/frontend-forest/blob/c014090/src/data/resources.ts) | 迁移完成后删除；不保留把 16 类重新静态合并的兼容出口                          |
| [resource-categories.test.mjs](../../tests/resource-categories.test.mjs)                       | 新增正式测试；分类数据完整性、实际文件和元数据一致性                          |
| [useResourceCategory.test.mjs](../../tests/useResourceCategory.test.mjs)                       | 新增正式测试；真实 Vue 响应式状态和可控异步结果                               |
| [package.json](../../package.json)                                                             | 仅增加 test 脚本，调用 Node 内置 runner，不添加依赖                           |
| [components.d.ts](../../components.d.ts)                                                       | 按实际使用更新自动生成的组件声明；其他声明检查差异                            |
| [协作入口](../README.md)、[待办](../TODO.md)、本计划                                           | 记录实施和验收，不把计划状态写成已发布                                        |

## Task 1: 迁移分类数据

**产出接口：**

```ts
// resource-types.ts：字段保持原定义
export interface Resource { /* 原有 id、url、title、tags、content、iconUrl */ }
// resource-categories.ts
export const resourceCategories = [/* 16 个 { id, label, count } */] as const
export type ResourceCategoryId = typeof resourceCategories[number]['id']
// resource-categories/<id>.ts
export default resources // readonly Resource[]
```

- [x] 实施前记录基线 DOM、资源请求及目录加载时间；先用已知文字、尺寸、console 和 1 个 JS / 1 个图片请求探针证明环境可信。
- [x] 先写正式数据测试：分类标识和名称恰为本计划 16 项；模块文件集合等于元数据；实际条数等于各 count；全局 ID 唯一、文本和链接有效、本地图标存在。加入代表性 ID 归属断言，尤其框架 001/005、组件库 085/101、跨端 097、动画 315、CSS 119、质量 383。
- [x] 用 node --test tests/resource-categories.test.mjs 观察原实现未满足接口时变红，确认不是 Node 路径解析导致假红。
- [x] 按分类表拆分 16 个数组，迁移纯类型，添加元数据。保留当前旧入口至任务 3 完成接入，避免中间破坏首页。
- [x] 运行正式测试；另作一次临时迁移核验，合并新模块后与 Git 基线逐字段一致且正文指纹相同，16 类数量和入口总数正确。
- [x] 将同数量分类的代表 ID、计数、重复 ID、错误图片路径分别故意改坏，确认差异实际写到目标文件且对应测试变红；恢复后全部通过。

## Task 2: 实现按类加载状态

**文件：** [resource-catalog.ts](../../src/data/resource-catalog.ts)、[useResourceCategory.ts](../../src/composables/useResourceCategory.ts)、[状态测试](../../tests/useResourceCategory.test.mjs)。

**接口：**

```ts
// resource-catalog.ts：加载函数映射留在模块私有作用域
export function loadResourceCategory(id: ResourceCategoryId): Promise<readonly Resource[]>
// useResourceCategory.ts：由生产组件传入真实加载函数
export function useResourceCategory(
  activeId: Readonly<Ref<ResourceCategoryId>>,
  loadCategory: (id: ResourceCategoryId) => Promise<readonly Resource[]>,
): {
  resources: Readonly<ShallowRef<readonly Resource[]>>
  status: Readonly<Ref<'loading' | 'ready' | 'error'>>
  errorMessage: Readonly<Ref<string>>
  retry: () => Promise<void>
}
```

- [x] 在 effectScope 中使用真实 Vue ref / watch，写可控 Promise 测试：默认加载、先选 A 后选 B、B 先成功而 A 后成功、B 成功而 A 后失败、重试成功、销毁后返回；断言完整 resources 和 status，不只断言加载函数被调用。
- [x] 先运行 node --test tests/useResourceCategory.test.mjs，看到目标行为失败。
- [x] 实现 16 个显式动态 import；实现 composable 的状态和请求序号。选择改变时清空旧资源；旧请求结束不影响新选择；errorMessage 被错误面板消费。
- [x] 运行正式测试，依次故意去掉旧成功、旧失败、销毁保护，确认各自触发目标失败，恢复后全部通过。
- [x] 检查模块只有生产所需导出；不增加测试专用配置，不重复实现 ESM 已提供的成功缓存。

## Task 3: 接入分类标签页

**文件：** [ResourceCatalog.vue](../../src/components/ResourceCatalog.vue)、[首页](../../src/pages/index.vue)、旧 [resources.ts](https://github.com/Hub-yang/frontend-forest/blob/c014090/src/data/resources.ts)。

**消费：** resourceCategories、ResourceCategoryId、loadResourceCategory 和任务 2 的 composable；CardList 仍接收 title 和 readonly resources。

- [x] 在真实生产预览先记录原首页同时存在 411 张卡片，建立本次挂载问题的基线证据。
- [x] 使用 ElTabs / ElTabPane；label 来自元数据，name 和 key 使用稳定 ID。仅当前分类的内容通过条件渲染进入面板，CardList 以该 ID 重建；不依赖 lazy 自动销毁，也不使用 KeepAlive。
- [x] 接入 ElSkeleton、ElAlert、ElButton；状态区提供 aria-busy / 可读加载反馈，保留组件的标签和面板语义。选择值仅接受元数据中的有效分类标识。
- [x] 首页用既有 defineAsyncComponent 方式接入 ResourceCatalog。删除旧静态 resourceGroups 消费及旧聚合文件，修改所有纯类型导入。
- [x] 真实浏览器核对默认框架 46 项、工具库 2 项、可视化 58 项；轮询全部 16 类后，每次仅当前分类卡片存在。逐字段比较分类完整数据；框架和组件库即便同为 46，也不能互换。
- [x] 用可控延迟复现 A→B 的乱序完成，及一次加载失败；确认标题、内容、错误、重试和标签焦点始终对应当前选择。
- [x] 实测 320、768、1024、1280 宽度下最后一个标签可达、活动标签可见、页面无横向溢出；验证组件原生方向键及 Tab 行为，不用截图代替 DOM / 几何数据。
- [x] 故意让非活动 CardList 保留、或把 components 加载函数改指 frameworks，分别确认“累计挂载”和“同数量错包”验收变红，核实改动确实落地后再恢复。

## Task 4: 使用 ElImage 延迟图标加载

**文件：** [CardList](../../src/components/CardList.vue)、[卡片样式](../../src/styles/resource-card.scss)。

- [x] 在相同视口下记录原始图标请求，使用不靠近视口的明确样本验证本轮原实现确有提前请求；不凭图片是否可见推断请求是否发生。
- [x] 替换为 ElImage lazy，fit=contain，40×40 固定容器，禁用预览；用组件 error 插槽实现一次回退。删除失去生产消费者的原错误处理函数和样式。
- [x] 验证视口内、视口外、未激活分类三个样本；滚动后目标图片才由组件触发请求，分类切换不会请求未选过分类的图标。
- [x] 受控使项目图标失败，再使回退图失败：确认回退最多一次、无递归请求，卡片高度和链接可用性不受影响。
- [x] 逐项滚动检查 16 类图标的真实 src 和解码状态；懒加载的未触发项不被误计为加载失败，回退图不被误计为正确项目图标。
- [x] 回归鼠标悬停、键盘展开 / Esc 关闭、触屏点击；重开分类后不能复现上次展开状态。

## Task 5: 验证构建边界和性能

**修改：** [package.json](../../package.json) 的 test 脚本、必要的生成声明、[待办](../TODO.md)、[协作入口](../README.md)、本计划。

- [x] 增加 test = node --test tests/*.test.mjs，执行 pnpm test、pnpm lint、pnpm exec vue-tsc --noEmit、默认生产构建及 native 配置构建；检查锁文件、依赖和声明差异。
- [x] 将带 manifest 的审计构建输出到本次登记的临时目录，检查首页静态依赖和 16 个动态数据入口。检查代表资源正文没有回流到首页共享包，不能仅看源码有 import() 就判为分包成功。
- [x] 真实生产预览采集冷缓存网络：初次只请求默认类别数据；逐类首次切换只引入相应新包；返回已成功类别无重复数据传输。已因真实切换启动的旧请求可以完成，不算误预取。
- [x] 用独立服务器请求日志或完整网络记录覆盖验证，避免 Resource Timing 缓冲区截断。受控测试服务器和故障脚本放临时目录，不给生产代码加测试分支。
- [x] 对当前分支和基线在相同条件各测至少 3 次；分别记录 JS / 图标请求与字节、卡片 DOM 数量、目录 ready 时间和缓存切换耗时。其他首页资源单列；若仍有主要瓶颈，带证据提交后续范围决定。
- [x] 用现役发布脚本检查正式 dist；确认只含原允许的 assets、images 等顶层产物。manifest 审计目录不得混入正式发布包，原图标路径继续有效。
- [x] 完成整体审查，确认所有 411 项完整、16 类逐字段一致、错误恢复有效、现有首页入口和卡片交互无回退。
- [x] 将必要证据写入既有记录后清理本次临时脚本、基线副本、manifest、构建产物、缓存和服务；按登记路径复查，保留正式测试与必要回滚材料。
- [x] 更新当前资源目录为 16 类；计划只有在数据、构建及真实页面证据齐备后才标完成。AGENTS.md 本轮新增规则须在下个会话确认实际加载。

## 文档核对和执行交接

2026-11-13 用户确认完整方案，并明确按当前会话顺序实施、优先复用现有组件库、允许浏览器验证。当前代码已实施；提交、推送和发布没有本轮授权。

使用 executing-plans 按顺序执行。分类数据、状态、标签页及图片接入已完成，末轮图片复验发现依赖缺陷，任务 4 曾重新打开；用户批准最小补丁后，修复验证、文档定稿和清理均已完成。

2026-11-13 计划复核：已按实际清单验证分类表覆盖全部 411 个 ID，各类数量相符，无重复或遗漏；核对的安装版本与技术栈表一致。独立审阅结果为“没有重要未决问题”，表示文档足以进入用户评审，不代表用户已批准交互建议，也不代表产品或性能已经验收。

## 依据

- [Element Plus Tabs](https://element-plus.org/en-US/component/tabs.html)：使用现有导航及 lazy API；另外核对锁定依赖的 tab-pane 与 tab-nav 源码，确认已访问面板保留和方向键行为。
- [Element Plus Image](https://element-plus.org/en-US/component/image.html#lazy-load)：使用组件延迟加载、固定尺寸及错误插槽，不自建观察器。
- [Vue 性能指南](https://vuejs.org/guide/best-practices/performance.html#code-splitting)、[Vite 动态导入](https://vite.dev/guide/features.html#dynamic-import)：数据拆分与实际构建边界。
- [Vite 加载失败处理](https://vite.dev/guide/build.html#load-error-handling)：旧包失效与主动重新载入的边界。
- [Node.js TypeScript](https://nodejs.org/api/typescript.html#type-stripping)：测试可直接导入可擦除 TS，但不依赖 tsconfig 路径别名。
- [Antfu Vitesse 首页](https://github.com/antfu-collective/vitesse/blob/main/src/pages/index.vue)、[Vite 配置](https://github.com/antfu-collective/vitesse/blob/main/vite.config.ts)：参考其 script setup、组合式逻辑及自动导入组织，沿用本项目已经采用的模式，不照搬额外依赖。

## 实施与验收

2026-11-13 实施，基线 c014090。以下记录已取得的验收证据；本地任务已完成，尚未提交或发布。

### 已验证

- 16 类、411 项、471 个语言入口与原清单逐字段一致，类内相对顺序保留。正文 SHA-256 仍为 be423951b1483f10a5c98b90b3d13c0fa5dccbbd73b8f8285f07a41326af7d34；独立 reviewer 也完整复核通过。
- 原全量数据入口已删除。真实 manifest 有 16 个独立数据入口，首页静态依赖闭包不含分类数组；实际导入全部构建数据包，与原正文逐字段一致。首次只请求 frameworks，回访 frameworks 和 utilities 不重复传输。
- 原正式测试 11/11 通过。数据测试先红 4 项，状态测试先红 7 项；数据及状态的 7 种变异都核实源文件差异落地并得到目标失败。同数量错加载器在浏览器全字段比较中失败，保留非活动面板时实际得到 92 张卡片，恢复后通过。
- 默认 46 张框架卡片，可视化 58 张；遍历所有分类后只保留当前分类卡片。慢成功、慢失败、重试及标签焦点、两个显式恢复入口已在真实动态包故障下核对。
- 已知文字、137×41 尺寸、console 标记、一个 JS 和一个图片请求先作可信探针。完整网络统计采用独立服务日志，避开 Resource Timing 默认缓冲区截断。
- 日常浏览器后台会暂停图片观察器；内置浏览器插件又缺少本机二进制。改用本机 Chrome 的独立空白临时配置，未安装测试依赖、未读取日常浏览器数据。桌面更新导致隔离浏览器出现额外帮助页后，对自有测试目标启用原生焦点仿真；以明确的 visible、DOM 和事件日志校准，不要求用户保持窗口可见。
- 320、768、1024、1280 实际宽度的横向边界、最后标签可达和活动标签可见通过。原生键盘事件 isTrusted=true：方向键进入组件库，Tab 聚焦 Ionic 文档链接。鼠标悬停、Esc、触屏 PointerEvent、分类重入、导航、搜索和播放器不可用重试通过。触屏是事件模拟，不宣称真机或真实音频后端验收。
- ElCard 正文默认 overflow:auto 被 ElImage 识别为局部观察根，原实现会提前请求视口外 46 个图标；先真实复现，再用原生 body-style 裁切正文，初始图标请求降为 0。卡片原外框高度 102px 保留。
- 原图失败和回退再次失败用全新文档及来源隔离故障，避免成功图片缓存绕过注入。原图及回退各请求一次，无递归，卡片高度和文档链接仍可用。
- 默认 pnpm build、native 配置构建、vue-tsc --noEmit 通过。现役 check_site 验包通过；经现役 unpack 解包后 453 个文件逐字节一致，410 个图标与 public 原件一致，正式 dist 没有审计用 .vite。
- 独立整体审查未发现已证实的其他代码问题，正式 11 项测试和全量迁移核验通过。主执行者随后完成库缺陷回归、最终图片、性能、完整 lint 及清理；正式测试最终为 15/15。

### ElImage 缺陷与已批准补丁

更新前的一轮 411 图标逐项解码通过，但末轮快速分类切换及滚动可复现可见图标不加载，不能用那次通过覆盖新失败。

已记录到资源 157 的实际组件观察回调只有一批记录：2847.3ms 为 isIntersecting=false，2891.1ms 为 true、ratio=1。锁定 Element Plus 2.14.8 的 ElImage 回调解构为 `[entry]`，只消费首条，因而没有触发加载。独立原生观察器同时确认目标在视口内、ratio=1，祖先未裁掉目标；充分等待 15 秒后仍没有 img 或原图请求。

新增 [ElImage 回归测试](../../tests/element-plus-image.test.mjs)抽取安装包中实际注册到 container 的回调并执行同批记录：`[false,true]` 用例变红，其余三项通过。测试没有增加生产导出或运行时开关。

通过 pnpm 原生补丁机制只修改当前版本的两行 ESM 回调，改为检查该批是否有进入视口的记录，不升级依赖。同步补丁配置与锁文件超出原计划仅新增 test 脚本、锁文件不变的约定，已按 AGENTS.md 的范围例外规则取得用户确认。

用户先要求直接升级至最新稳定版。实时核对 [npm 官方 latest](https://registry.npmjs.org/element-plus/latest) 和 [GitHub 最新稳定发布](https://github.com/element-plus/element-plus/releases/tag/2.14.8)，两者均为 2.14.8，与项目安装版一致，npm 的完整性摘要也与锁文件相同，因此没有更高稳定版本。随后用户明确选择应用最小 pnpm 补丁。

采用 [pnpm 官方补丁机制](https://pnpm.io/cli/patch)，正式文件为 [Element Plus 补丁](../../patches/element-plus@2.14.8.patch)、[工作区配置](../../pnpm-workspace.yaml)及[锁文件](../../pnpm-lock.yaml)。package.json 除 test 脚本外未变；所有原包版本和完整性摘要保持一致。补丁仅覆盖当前生产构建消费的 ESM ElImage 回调。未来升级时须复核回归用例；上游修复后可删除补丁与其配置。

安装验证采用 `pnpm install --frozen-lockfile --ignore-scripts`，通过锁文件供应链策略检查。沙箱内离线尝试因全局 store 无法硬链接而回退空缓存，出现缺包并重建了 node_modules；已使用工作区内的临时 store 按同一锁文件恢复完成，没有依赖版本变化。此离线失败不计为安装验收通过。

清理前又用冻结锁文件安装回正常用户 store，安装元数据不再指向临时目录；检查所有依赖软链接也不指向待清理路径。正常 store 安装后 15 项测试、类型检查及双构建再次通过，全部生产输出与此前验收的 453 个文件逐字节一致。保留正常包管理缓存，不遗留任务专用 store。

实际安装回调的最小修复从红转绿后，原子替换回旧回调，确认文件散列变化且回归重新变红；恢复补丁后全部 15 项通过。原子替换避免改写包缓存的其他硬链接。临时变异文件已消失，正式补丁仍由 pnpm 管理。

### 最终构建复验

- 补丁后的两轮独立浏览器遍历均通过：每轮 411 个图标实际 src 与原数据一致、解码成功，没有用回退图冒充正常图标。复验页面不含诊断用观察器包装；生产没有自建图片观察器。
- 默认、native 和 manifest 审计构建均通过。再次核对 16 个独立数据包、首页无分类数组回流、默认只请求 frameworks、首次图标零请求，以及框架和工具库回访各只有一次数据传输。
- 错误回退和二次失败、全部目录字段、延迟成功及失败、重试、搜索/卡片/播放器回归、四个实际宽度等 11 组末轮场景通过。每次都先核对探针、可见性与浏览器身份。
- 补丁后的正式 dist 再次通过现役 check_site，归档用现役 unpack 解包后 453 个文件逐字节相同；410 个图标与 public 原件一致，没有审计 manifest 或临时探针文件进入发布包。
- 独立 reviewer 的只读审查未发现其他已证实问题。其暂未判断的图片行为已由实际批量回调证据定位并完成一轮修复：正式回归先红、恢复旧回调再红、修复后 15/15 绿，加上两轮真实图标遍历；没有用重复审查代替验证。

### 性能对照

相同本机 HTTP/1.1 服务、隔离 Chrome 157、1280×800 页面视口，采用独立 localhost 来源及 no-store 响应实现冷缓存；无网络/CPU 节流，传输字节未压缩。DOM ready 由页面内 MutationObserver 记录，不用父页面轮询时间；请求数量与字节取完整服务端日志。

| 指标                    |     基线 c014090 |                       FF-05 |
| ----------------------- | ---------------: | --------------------------: |
| 初始卡片                |              411 |                          46 |
| 初始 JS 请求 / 字节     |      7 / 464,194 |                 8 / 431,744 |
| 初始资源图标请求 / 字节 |  410 / 7,917,793 |                       0 / 0 |
| 其他同源资源请求 / 字节 |   15 / 1,068,844 | 14–15 / 1,078,846–1,094,252 |
| 目录 ready 中位数       |          897.9ms |                     779.3ms |
| 缓存分类切换中位数      | 原版没有分类切换 |              14.1ms（9 次） |

三次完整 ready 样本：基线 862.7、897.9、1271.7ms；FF-05 为 754.8、779.3、789.7ms。原基线另有一次异步卡片在 15 秒内未就绪，已单列失败并补测一次，未把失败伪造为成功或纳入就绪中位数。后台文档、并行构建干扰下的早期采样不用于最终性能结论。

其他同源资源包含首页插图、CSS 和入口等；外部字体不在同源日志的字节统计中。结果仅为本机前后对照，不代表公网加载时间；没有扩展到首页视觉、播放器后端或发布系统改造。

### 清理与交付检查

- 完整证据已转存本记录；已清理本任务临时目录、三个隔离浏览器配置、观察器/故障探针、测试服务、基线及审计构建、dist、归档、pnpm 临时编辑目录和 store、Vite 缓存。逐路径确认不存在，所有任务 HTTP 端口已关闭。
- 正式补丁、三个正式测试文件和现有依赖保留。node_modules 的 patch 编辑状态仅移除本任务条目，已无指向临时编辑目录的记录；生产依赖软链接不指向清理路径，正常用户包管理 store 保留。
- 清理后重新执行 pnpm test（15/15）、不加忽略参数的 pnpm lint、vue-tsc --noEmit 及 git diff --check，全部通过。文档本地链接按 Markdown URL 解码后逐项核实，无指向已删除资源文件或临时探针的链接。
- 主 checkout 保留原 tsconfig.json 修改。没有当前提交、推送或发布授权。

## 发布准备

2026-11-13 用户明确要求提交代码、推送并发布。已重新核对远端 main/dev 均为 c014090，按既有双分支快进与 main 推送触发 Deploy 的流程执行。

提交前重新执行 15 项测试、完整 lint、类型检查和生产构建，全部通过。现役 check_site 检查正式 dist 通过，共 453 个文件、410 个资源图标。主 checkout 原 tsconfig.json 内容及两行删除补丁均已单独留存，用于同步后逐字核对。

发布前公开首页 SHA-256 为 9f8be54cde54cb675146ddd9efebbb4d6253350dafcc4f7ff1d61e84de647c32，源站目录身份为 [64769, 35973946]。源站 437 个文件的完整指纹已留存，首页与公开站点一致；发布后核对现网、回滚目录和正式构建，不只依赖工作流状态。
