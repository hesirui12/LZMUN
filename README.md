# 柳州模拟联合国 (LZMUN)

柳州模拟联合国官方网站 - 简约艺术风格设计

## 在线预览

- **GitHub Pages**: `https://<你的用户名>.github.io/liuzhoumun`
- **Cloudflare Pages**: 可通过 Cloudflare Pages 部署

## 项目特点

- **设计风格**: 简约艺术风格，无圆角设计
- **材质效果**: 透明亚克力玻璃质感
- **主色调**: 蓝白配色方案
- **看板娘**: 基于 Live2D 的交互式看板娘
- **响应式**: 适配桌面端和移动端

## 页面结构

- **首页**: 展示柳州模拟联合国的核心理念
- **关于我们**: 介绍组织的使命和愿景
- **大会信息**: 展示即将召开的会议详情和委员会设置
- **联系我们**: 提供联系方式和留言表单

## 技术栈

- HTML5
- CSS3 (自定义属性、Flexbox、Grid、Backdrop Filter)
- JavaScript (ES6+)
- Live2D Widget

## 部署到 GitHub Pages

### 方法一：通过 GitHub Actions 自动部署（推荐）

1. 创建 GitHub 仓库并推送代码

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<你的用户名>/liuzhoumun.git
git push -u origin main
```

2. 在 GitHub 仓库页面，进入 **Settings** → **Pages**
3. 在 **Source** 部分选择 **GitHub Actions**
4. 系统会自动使用 `.github/workflows/pages.yml` 进行部署
5. 部署完成后，访问 `https://<你的用户名>.github.io/liuzhoumun`

### 方法二：通过分支部署

1. 创建 GitHub 仓库并推送代码
2. 在 GitHub 仓库页面，进入 **Settings** → **Pages**
3. 在 **Source** 部分选择 **Deploy from a branch**
4. 选择 **main** 分支和 **/(root)** 文件夹
5. 点击 **Save**
6. 等待几分钟后，访问 `https://<你的用户名>.github.io/liuzhoumun`

## 部署到 Cloudflare Pages

### 方法一：通过 Git 部署

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Pages** 选项
3. 点击 **Create a project**
4. 连接你的 Git 仓库
5. 配置构建设置：
   - Build command: （留空，纯静态网站）
   - Build output directory: `/`
6. 点击 **Save and Deploy**

### 方法二：直接上传

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Pages** 选项
3. 点击 **Upload assets**
4. 将项目文件打包为 ZIP 上传

## 项目文件

```
liuzhoumun/
├── index.html              # 主页面
├── styles.css              # 样式文件
├── script.js               # JavaScript 交互脚本
├── _config.yml             # GitHub Pages 配置
├── .gitignore              # Git 忽略文件
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Actions 自动部署配置
└── README.md               # 项目说明
```

## 本地预览

直接在浏览器中打开 `index.html` 文件即可预览效果。

或者使用简单的 HTTP 服务器：

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

然后访问 `http://localhost:8000`

## 联系方式

- 电话: 0772-1234567
- 邮箱: contact@liuzhoumun.org
- 地址: 广西柳州市城中区

## 版权信息

© 2025 柳州模拟联合国 (LZMUN). All rights reserved.
