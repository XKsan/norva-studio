# NORVA STUDIO

单站静态网站，部署仅使用 GitHub Actions（Pages workflow）。

主入口：`index.html`。五个主空间：工作室、作品、实验、产品、联系。作品详情、实验详情、系统产品与制作服务均使用独立页面。

## 内容与素材
- 首页 ONETHING 数据：`assets/onething/today.json`。
- ONETHING 每日生成：`engine/generate.py` + `.github/workflows/daily.yml`，使用 `GEMINI_API_KEY` Actions Secret；第 9 类数据键为 `AI`，主题键为 `ai`；`TECH & AI` 仅作为展示名称。
- 主导航数据：`assets/navigation.json`，首页星图与内页导航共用。
- 素材登记：`assets/media-manifest.json`。临时素材状态为 `temporary`，替换后改为 `real`。
- 真实素材替换前先在预览分支检查，验收后合并至 `main`。

## 开发与验收
- 所有整改在独立分支进行，`main` 仅在完整验收后更新。
- 本地预览审计：`.github/workflows/site-audit.yml`。
- 生产环境审计：`.github/workflows/live-site-audit.yml`，只对 `main` 上线后的站点进行检测。
- 正式部署仅由 `.github/workflows/pages.yml` 执行。
