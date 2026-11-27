# NORVA STUDIO 素材接入说明

当前网站结构和页面模板已按五个主空间整理。以下文件用于后续正式素材接入，不需要重新设计页面。

## 1. 原创 IP
将三集竖屏短片放入：
- assets/videos/original-ip/001.mp4
- assets/videos/original-ip/002.mp4
- assets/videos/original-ip/003.mp4

建议 9:16、1080×1920、MP4/H.264、AAC，保留原始帧率。视频准备好后，在 assets/data/original-ip.json 中将对应条目的 status 从 pending 改为 real。

## 2. 纪录影像
将轻量预告片放入 assets/videos/documentary-previews/，命名为 <slug>-preview.mp4。预告保持原片比例（16:9 或 4:3），建议 10–30 秒。完整影片可在 documentary-film.html 对应数据条目中填写已确认的公开观看地址，不要求将大型母版存入 GitHub。

## 3. 摄影记录
将优化后的 WebP 图片放入 assets/images/works/photography/，在 assets/data/photography.json 追加条目。保留照片原始比例；页面支持逐张放大查看。

## 4. 行走档案
内容按 CITY、MOUNTAIN、PEOPLE、TIME 四个主题组织，更新 assets/data/field-notes.json。

## 5. 社交平台
原创 IP 页面预留小红书、TikTok、微信视频号入口。请在确认账号主页地址后填写 assets/data/original-ip.json 的 platforms.url，不使用猜测链接。

所有临时素材与待接入视频均已在 assets/media-manifest.json 登记。正式素材接入后，先在独立分支检查，再提交验收。不得直接上传到 main。
