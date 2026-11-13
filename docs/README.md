# 前端森林 · Codex 协作入口

前端森林是面向日常开发的前端资源导航，收录框架、工具及其官方文档，方便按需查找和打开。项目由 Codex 协作维护，方案、决策、进度和会话交接统一记录在 `docs/`。

## 待办追踪

[项目待办](TODO.md)集中追踪依赖升级、项目审查和资源链接更新。每项通过固定编号关联后续方案、进度和验收记录。

[FF-05 按需加载改造](plans/2026-11-13-ff-05-category-tabs-and-lazy-loading.md#生产发布验收)已完成生产发布及验收，包含用户批准的 ElImage 最小 pnpm 补丁。外部音频播放观察项经用户确认另列为 [FF-06](TODO.md#ff-06-核验外部音频播放)。

[FF-06 诊断与修复计划](plans/2026-11-13-ff-06-media-playback.md)已完成，空间白名单修复已生效，77 项冷/热缓存、线上 37 首播放与歌词同步、封面及断网恢复验收通过，无需重部署前端。用户已确认将原生控制台的传输稳定性观察另列 [FF-07](TODO.md#ff-07-核验媒体传输稳定性)，保留证据供后续排查。

## 当前资源目录

2026-11-13，线上目录已细分为 16 类，仍为 411 项、471 个语言入口。名称及数量见[分类元数据](../src/data/resource-categories.ts)，正文见[分类资源目录](../src/data/resource-categories/)。使用 Element Plus 标签页，只挂载当前分类；分类数据动态加载，图标通过 ElImage 按视口加载。[FF-05 验收记录](plans/2026-11-13-ff-05-category-tabs-and-lazy-loading.md#实施与验收)记录分包、异步状态、浏览器及发布包证据。[生产发布验收](plans/2026-11-13-ff-05-category-tabs-and-lazy-loading.md#生产发布验收)记录提交、Actions、现网及回滚核对。

2026-11-12 的 FF-03 历史版本按四类发布 411 项资源：框架与生态 273 项、打包/构建工具 36 项、CSS 相关 51 项、测试与代码质量 51 项。版本、维护状态、语言入口、采用证据、图标来源及暂缓项见 [FF-03 核验记录](ff-03-resource-audit.md)，实施过程见 [FF-03 计划](plans/2026-11-12-ff-03-resource-audit-and-expansion.md)。

## 接手基线

2026-11-10 核对了 `dev` 分支的 `4643e35`。

- 站点使用 Vue、TypeScript、Vite 和 Element Plus，构建为静态站点。部署流程见 [GitHub Actions](../.github/workflows/deploy.yml)。
- 接手时资源清单收录 27 项资源，分为「框架与生态」和「打包/构建工具」；[当前资源目录](../src/data/resource-categories/)的规模见上节。[现有搜索](../src/components/BaseSearchEngine.vue)会打开外部搜索引擎。
- 接手时用现有依赖执行 `eslint .` 和 `vue-tsc` 均通过。隔离副本的默认构建报文件监听 `EMFILE`，启用 `CHOKIDAR_USEPOLLING=true` 后成功生成 `dist/index.html`。
