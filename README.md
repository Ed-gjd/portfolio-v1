# 全栈作品集 Portfolio

纯 HTML/CSS/JS 静态站，**作品集总入口**——展示 6 个 webdev 学习项目（5 已完成 + 1 进行中），S3 + CloudFront 全球分发上线。

## 内容
- 首屏：一句话自我介绍
- 项目卡片网格：每项目「名称 + 一句话 + GitHub 代码链接 + 在线演示链接」
- 6 个项目：作品集站 / 博客 / 数据看板 / 小商城 / CRM / 知识库 AI（进行中）

## 技术栈
- 前端：原生 HTML + CSS（grid 响应式卡片）+ JS
- 部署：AWS S3 静态托管 + CloudFront CDN（HTTPS）

## 演示
- 线上：https://di5hc23rfibz1.cloudfront.net/

## 本地运行
```bash
python3 -m http.server 8000   # 打开 http://127.0.0.1:8000
```

## 目录
- `index.html` — 页面结构（项目卡片）
- `style.css` — 样式（导航/hero/卡片网格）
- `app.js` — JS（当前静态无交互，预留扩展）

## 课程来源
webdev 课程 M0（课1-4）：落地页 → S3 + CloudFront 上线。课22 改版为作品集总入口。
