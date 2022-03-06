const mongoose = require("mongoose");

/* 
  & 用户表
*/
module.exports = mongoose.model(
  "user",
  new mongoose.Schema(
    {
      user: String,
      pass: String,
      time: {
        // ~注册时间
        type: Date,
        default: new Date() + 1000 * 60 * 60 * 8,
      },
      userimg: {
        type: String,
        default: "/node/img/default.png",
      }, // ^头像
      signature: {
        type: String,
        default: "暂无个性签名",
      }, // ^个性签名
    },
    { versionKey: false }
  )
);
