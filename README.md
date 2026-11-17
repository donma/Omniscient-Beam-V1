# 全職設計視角 24 套輕量化 AI 施工文件

> 24 套視覺差異化的靜態網站模板，每套 12 頁（共 288 頁），以純前端技術建置。

## 專案概述

本專案依施工文件 `全職設計視角_24_套輕量化ai施工文件.md` 建置，提供 24 套產業別各異的網站模板，涵蓋酒吧、資安、時尚、健身、電影、AI SaaS、爵士、名車、SPA、建築、音樂祭、藝廊、美容、診所、早午餐、婚禮、有機、語言、家飾、寵物、農場、書店、共享辦公、社群節慶等產業。

每套模板包含 12 個固定頁面：

`index.html` · `about.html` · `services.html` · `service-detail.html` · `portfolio.html` · `reviews.html` · `faq.html` · `booking.html` · `process.html` · `blog.html` · `blog-detail.html` · `contact.html`

## 技術規格

- **純靜態前端**：HTML5 / CSS3 / JavaScript，無 React/Vue/npm/build 工具
- **UI 框架**：Bootstrap 5（CDN）
- **圖示**：Bootstrap Icons
- **字型**：Google Fonts（Noto Sans TC 等）
- **圖片**：Picsum / Unsplash / Pexels（無 403/404/浮水印）
- **SEO**：每頁含 meta description、canonical、Open Graph、Schema.org placeholder

## 目錄結構

```
Omniscient_Beam_v1/
├── index.html                  # 模板總覽頁
├── template-detail.html        # 單一模板詳情頁
├── data/
│   └── templates.json          # 24 筆模板 metadata
├── assets/
│   ├── css/gallery.css
│   ├── js/gallery.js           # 使用 getTemplateTags() + Array.isArray 保護
│   ├── js/data.js              # TEMPLATES_DATA（與 templates.json 同步）
│   └── img/previews/           # 24 張預覽圖
├── templates/
│   └── template-XXX-name/      # 每套 12 頁 + metadata
│       ├── *.html (12)
│       ├── template.json / tags.json / prompt.md / README.md
│       └── assets/{css,js,img}/
└── README.md
```

## 模板清單（24 套）

| ID | Slug | 產業 | 背景模式 | 佈局型態 |
|---|---|---|---|---|
| template-001 | luxury-bar | 酒吧夜生活 | 深色 | 沉浸式 Hero |
| template-002 | cyber-security | 資安 SOC | 深色 | Dashboard |
| template-003 | fashion-boutique | 時尚精品 | 深色 | Lookbook |
| template-004 | fitness-coach | 健身教練 | 深色 | 運動 |
| template-005 | film-studio | 影像工作室 | 深色 | 電影 |
| template-006 | ai-saas | AI SaaS | 深色 | Sidebar Dashboard |
| template-007 | jazz-club | 爵士酒吧 | 深色 | Live House |
| template-008 | premium-car | 名車展示 | 深色 | 展示 |
| template-009 | night-spa | 夜間 SPA | 深色 | 療癒 |
| template-010 | architecture-dark | 建築設計 | 深色 | 空間 |
| template-011 | music-festival | 音樂祭 | 深色 | 活動 |
| template-012 | art-gallery | 藝廊展覽 | 深色 | Sidebar 展覽 |
| template-013 | beauty-studio | 美容工作室 | 淺色 | 美妝 |
| template-014 | family-clinic | 家醫診所 | 淺色 | 醫療 |
| template-015 | brunch-cafe | 早午餐咖啡 | 淺色 | 餐飲 |
| template-016 | flower-wedding | 婚禮花藝 | 淺色 | 婚禮 |
| template-017 | organic-grocery | 有機超市 | 淺色 | 零售 |
| template-018 | language-school | 語言學校 | 淺色 | 教育 |
| template-019 | home-decor | 家飾選物 | 淺色 | 選物 |
| template-020 | pet-clinic | 寵物診所 | 淺色 | 寵物 |
| template-021 | local-farm | 地方小農 | 淺色 | 農業 |
| template-022 | bookstore | 獨立書店 | 淺色 | 文化 |
| template-023 | coworking-space | 共享辦公 | 淺色 | 空間 |
| template-024 | community-festival | 社區節慶 | 淺色 | 節慶 |

## RWD 與手機瀏覽

- 所有模板皆含 mobile hamburger 選單（左側或右側）
- mobile drawer 預設隱藏，點擊漢堡按鈕可開關，並鎖定 body 捲動
- sidebar 模板（T002/T006/T012）在 mobile 隱藏 sidebar、顯示 mobile hamburger
- 斷點：900px / 600px，grid 自動 collapse 為 1 欄
- `overflow-x: hidden` 防止水平捲軸

## ZIP 按鈕

所有模板 `hasZip = false`，ZIP 按鈕顯示「ZIP 待打包」（disabled）。

## 完成宣告

本專案全部 24 套模板、288 頁靜態網站，由 **Beam 模型**（opencode-go/beam-free）於 OpenCode Agent 環境中完成建置與驗證。

---

Repository: https://github.com/donma/Omniscient-Beam-V1.git