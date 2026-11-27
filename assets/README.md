# NORVA STUDIO 素材规范

本仓库当前展示的 SVG/图像均为临时版式占位，不能作为 NORVA 原创作品或真实纪录素材对外陈述。正式素材替换时，按下列路径放入文件，并同步更新对应 JSON 数据中的路径与 status。

## 原创 IP 短片
- 路径：assets/videos/original-ip/001.mp4、002.mp4、003.mp4。
- 比例：9:16；建议 1080×1920、MP4/H.264、AAC；保留原始帧率。
- 文件较小，直接存放在 GitHub 仓库。避免不必要的二次压缩。
- 海报图：assets/images/works/ant-matter/；视频准备好后将 assets/data/original-ip.json 对应条目的 status 改为 real。

## 纪录影像预告
- 预告路径：assets/videos/documentary-previews/<slug>-preview.mp4。
- 建议 10–30 秒、MP4/H.264，保持影片原始 16:9 或 4:3 比例。
- 列表页仅加载轻量预告；完整影片在详情页接入公开播放地址或后续合适的视频托管，不将大型母版塞入仓库。
- 更新 assets/data/documentary.json 中的 preview、poster、ratio、full_video_url 与 status。

## 摄影与行走档案
- 摄影图像：优先 WebP，长边建议 1800–2400px，单张约 200–700KB；保持原始比例，不强制裁切。
- 摄影清单：assets/data/photography.json；每增加一张照片，追加一个 item。
- 行走档案分类：CITY / MOUNTAIN / PEOPLE / TIME；清单位于 assets/data/field-notes.json。

## 通用规则
- 页面使用数据清单渲染，新增内容不需要重做页面布局。
- 所有视频使用 preload=none，不自动播放；图像采用 lazy loading。
- 临时素材状态使用 temporary 或 pending；正式素材状态使用 real。
- 不得编造社交平台主页地址；确认账号 URL 后再填入原创 IP 数据中的 platforms。
