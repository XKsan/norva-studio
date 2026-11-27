# NORVA STUDIO

NORVA STUDIO 诺维数字创意工作室。网站以独立首页与五个主空间构成：关于、开发与服务、实验、身语意场、联系。

## 信息结构
- 首页：交互水面、星图入口与 ONETHING。
- 关于：品牌原则与工作方式。
- 开发与服务：系统产品、数字工具与七项专业服务的入口。
- 实验：四个独立交互实验。
- 身语意场：原创 IP、摄影记录、纪录影像、行走档案。
- 联系：项目合作与联系信息。

## 内容数据与素材
- 首页 ONETHING：assets/onething/today.json。
- 每日生成：engine/generate.py + .github/workflows/daily.yml；AI 分类键为 AI，主题键为 ai。
- 主导航：assets/navigation.json；首页星图与内页导航共用。
- 媒体数据：assets/data/；统一素材清单：assets/media-manifest.json。
- 三集 9:16 原创 IP 短片存放于 assets/videos/original-ip/。
- 纪录影像轻量预告存放于 assets/videos/documentary-previews/；完整影片可在详情页接入公开播放器或外部观看地址。
- 当前视频文件尚未收到，所有对应条目保持 pending；不得伪造播放文件或社交账号链接。

## 开发与发布
- 所有整改先在独立分支完成；main 保持不变，直到用户验收。
- 本地预览审计：.github/workflows/site-audit.yml。
- 首页移动端审计：.github/workflows/mobile-home-preview.yml。
- 生产环境审计：.github/workflows/live-site-audit.yml。
- 正式部署仅由 .github/workflows/pages.yml 执行。
