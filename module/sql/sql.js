const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then((result) => {
    console.log("数据库连接成功mongodb://localhost:27017/blog");
  })
  .catch((err) => {
    console.log("数据库连接失败" + err);
  });
