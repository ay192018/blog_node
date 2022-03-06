const express = require("express");
const cors = require("cors");
const app = express();

app
  .use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  )
  /* 
  ^配置静态
*/
  .use(express.static("./public"))
  /*  
  ~解析请求数据
 */
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(require("./module/plugin/session"))
  /*
   *设置子路由
   */

  .use("/blog", require("./router/blog"))
  .use("/user", require("./router/user"))
  .use("/render", require("./router/render"))
  .use("/headerTag", require("./router/headerTag"))
  .listen(3000, () => { 
    console.log("3000端口启动");
  });
require("./module/sql/sql");
