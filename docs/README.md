# 前端森林 · Codex 协作入口

前端森林是面向日常开发的前端资源导航，收录框架、工具及其官方文档，方便按需查找和打开。项目由 Codex 协作维护，方案、决策、进度和会话交接统一记录在 `docs/`。

## 待办追踪

[项目待办](TODO.md)集中追踪依赖升级、项目审查和资源链接更新。每项通过固定编号关联后续方案、进度和验收记录。

## 接手基线

2026-11-10 核对了 `dev` 分支的 `4643e35`。

- 站点使用 Vue、TypeScript、Vite 和 Element Plus，构建为静态站点。部署流程见 [GitHub Actions](../.github/workflows/deploy.yml)。
- [资源清单](../src/config/nav.ts)收录 27 项资源，分为「框架与生态」和「打包/构建工具」。[现有搜索](../src/components/BaseSearchEngine.vue)会打开外部搜索引擎。
- 接手时用现有依赖执行 `eslint .` 和 `vue-tsc` 均通过。隔离副本的默认构建报文件监听 `EMFILE`，启用 `CHOKIDAR_USEPOLLING=true` 后成功生成 `dist/index.html`。
