# 方法一
  > 原文链接：https://blog.csdn.net/adley_app/article/details/94549366

* app.js
  ```javascript
  const Koa = require('koa');
  const app = new Koa();
  const routes = require('./routes');

  app.use(routes.routes(), routes.allowedMethods());
  app.listen(9092);
  ```

* routes/index.js
  ```javascript
  const Router = require('koa-router');
  const router = new Router();

  const fs = require('fs');
  const path = require('path');

  const files = fs.readdirSync(__dirname);

  files
      .filter(file => file.endsWith('.js'))
      .forEach(file => {
          const file_name = file.substr(0, file.length - 3);
          const file_entity = require(path.join(__dirname, file));
          if (file_name !== 'index') {
              router.use(`/${file_name}`, file_entity.routes(), file_entity.allowedMethods())
          }
      })

  module.exports = router;
  ```

* routes/login.js
  ```javascript
  const Router = require('koa-router');
  const router = new Router();

  // router.prefix('/login')

  router.get('/', async ctx=> {
      ctx.body = 'login'
  })

  router.get('/quickLogin', async ctx=> {
      ctx.body = 'quickLogin'
  })

  module.exports = router;
  ```


# 方法二
  > 原文链接：https://1peng.github.io/2017/09/28/Vue2+koa2+nuxt+ssr%E9%A1%B9%E7%9B%AE%E5%88%9D%E6%9E%84

* 创建server/autoRoutes.js，大致意思自己意会吧，相信大家都能看懂。
  ```javascript
  /**
   * Created by wangyipeng on 2017/9/26.
   */
  const router = require('koa-router')()
  const path = require('path')
  const fs = require('fs')
  var exports = {}
  exports['auto'] = function (app) {
    let files = fs.readdirSync(path.join(__dirname, 'controllers'))
    let jsFiles = files.filter((f) => {
      return f.endsWith('.js')
    }, files)
    // 控制器文件
    for (let f of jsFiles) {
      console.log(`import controller from file ${f}...`)
      let name = f.substring(0, f.length - 3)
      exports[name] = require('./controllers/' + f)
      router.use('/' + name, exports[name].routes(), exports[name].allowedMethods())
      app.use(exports[name].routes(), exports[name].allowedMethods())
    }
  }
  module.exports = exports
  ```

* 在server/index.js里添加
  ```javascript
  import AutoRoutes from './autoRoutes' //这个放在最前边，不多解释了
  AutoRoutes.auto(app) //这个放在原有的app.use前边就行了
  ```

* 创建在server/controllers文件夹
* 写一个测试控制器server/controllers/user.js
  ```javascript
  /**
   * Created by wangyipeng on 2017/9/27.
   */
  const router = require('koa-router')()
  router.get('/index', async function (ctx, next) {
    ctx.body = [
      {
        name:'yipeng', age: '29'
      },
      {
        name:'yihang', age: '18'
      }
    ]
  })
  module.exports = router
  ```

# 方法三
  > 廖雪峰：https://www.liaoxuefeng.com/wiki/1022910821149312/1099849448318080

  * 我们先在controllers目录下编写index.js：
  ```javascript
  var fn_index = async (ctx, next) => {
      ctx.response.body = `index`;
  };

  var fn_signin = async (ctx, next) => {
      ctx.response.body = `name`;
  };

  module.exports = {
      'GET /': fn_index,
      'POST /signin': fn_signin
  };
  ```

  * 这个index.js通过module.exports把两个URL处理函数暴露出来。
  * 类似的，hello.js把一个URL处理函数暴露出来：
  ```javascript

  var fn_hello = async (ctx, next) => {
      var name = ctx.params.name;
      ctx.response.body = `<h1>Hello, ${name}!</h1>`;
  };

  module.exports = {
      'GET /hello/:name': fn_hello
  };
  ```

  * 现在，我们修改app.js，让它自动扫描controllers目录，找到所有js文件，导入，然后注册每个URL：
  ```javascript
  // 先导入fs模块，然后用readdirSync列出文件
  // 这里可以用sync是因为启动时只运行一次，不存在性能问题:
  var files = fs.readdirSync(__dirname + '/controllers');

  // 过滤出.js文件:
  var js_files = files.filter((f)=>{
      return f.endsWith('.js');
  });

  // 处理每个js文件:
  for (var f of js_files) {
      console.log(`process controller: ${f}...`);
      // 导入js文件:
      let mapping = require(__dirname + '/controllers/' + f);
      for (var url in mapping) {
          if (url.startsWith('GET ')) {
              // 如果url类似"GET xxx":
              var path = url.substring(4);
              router.get(path, mapping[url]);
              console.log(`register URL mapping: GET ${path}`);
          } else if (url.startsWith('POST ')) {
              // 如果url类似"POST xxx":
              var path = url.substring(5);
              router.post(path, mapping[url]);
              console.log(`register URL mapping: POST ${path}`);
          } else {
              // 无效的URL:
              console.log(`invalid URL: ${url}`);
          }
      }
  }
  ```