const express = require("express");
const email = require("../module/plugin/Emails");
const router = express.Router();
const genCaptcha = require("../module/plugin/svg");

/**
 * @param {String||Object} 前后端交互 邮箱验证
 *  */
router.post("/setEmail", (req, res) => {
  const { data } = req.body;

  const rule = (value) => {
    res.send(value);
  };
  email(data, rule);
});

router.put("/svg", async (req, res) => {
  const result = await req.body;
  genCaptcha(req, res);
});
/* 
 ~获取用户session
*/
router.patch("/session", (req, res) => {
  if (req.session.userSession) {
    res.send(req.session.userSession);
  } else {
    res.send({
      code: 400,
    });
  }
});
/* 
~退出登录
*/
router.delete("/destruction", (req, res) => {
  req.session.userSession = "";
  res.send({
    code: 200,
    message: "退出成功",
  });
});
module.exports = router;
