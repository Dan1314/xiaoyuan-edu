# app-lite · 校区端 + 家校端 uni-app 架构示例

一套 uni-app（Vue 3）工程同时演示 **校区/老师端**（工作台、课表点名、学员）与 **家校端**（家长首页、作业点评），可编译为 Android / iOS App、微信小程序与 H5。

```
app-lite/
├── config/index.js     # API_BASE_URL 占位 https://api.example.com
├── api/request.js      # uni.request 封装（Bearer Token）
├── api/edu.js          # 业务接口 + Mock 开关
└── pages/              # index / schedule / students / parent/*
```

```bash
npm install
npm run dev:h5          # H5 预览
npm run dev:mp-weixin   # 微信小程序（用微信开发者工具打开 dist/dev/mp-weixin，填写你自己的 AppID）
```
