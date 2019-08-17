
<p align="center">
  <!-- <img alt="" src="./xiaojiejie.png"> -->
</p>

<p align="center">
  Blog
</p>

<p align="center">
  Personal Blog
</p>

## A B C 端
 > A 端是开发界面。即管理员所接触的界面。

 > B 端是商家界面。即浏览器界面，依托于web界面。

 > C 端是用户界面。即app的界面，用户所接触最为广泛的界面。

# 目录结构
```
  .
  +-- pages
  +-- server
  |   +-- routes
  |     +-- api
  |       +-- users.js
  |     +-- index.js
  |   +-- dbs
  +-- api
  |   +-- routes
  |     +-- users.js
  |   +-- index.js
  +-- store
```

## Tencent Cloud Base
![腾讯云基地](https://github.com/TencentCloudBase)

## 前端的何去何从？
[『前端技术』相比后端是否只能打辅助?](https://juejin.im/post/5cf01c0251882503050edec9)



Nuxt
├─ nuxt.config.js
├─ package-lock.json
├─ package.json
├─ pages
│    ├─ README.md
│    ├─ home.vue
│    └─ index.vue
├─ plugins
│    ├─ README.md
│    ├─ axios.js
│    └─ element-ui.js
├─ server
│    ├─ .DS_Store
│    ├─ dbs
│    │    ├─ .DS_Store
│    │    ├─ config.js
│    │    └─ models
│    ├─ index.js
│    └─ routes
│           ├─ .DS_Store
│           └─ users.js
├─ static
│    ├─ README.md
│    └─ favicon.ico
└─ store
       └─ README.md