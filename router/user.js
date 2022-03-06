const express = require("express");
const router = express.Router();
const {
  handleruser,
  changeUserData,
  changeUsserImg,
} = require("../module/user/handlerUser");
const multer = require("multer");
const upload = require("../module/plugin/multer");

router.post("/login", async (req, res) => {
  const { user, pass } = req.body;

  const result = await handleruser(user, pass);
  if (result.code === 200) {
    req.session.userSession = result;
  }
  res.send(result);
});
/* 
^修改用户名及个性签名
*/
router.post("/changeUserData", async (req, res) => {
  const { name, region, id } = await req.body;
  console.log(name, region, id);

  const resSend = (data) => {
    res.send(data);
  };
  changeUserData(name, region, id, resSend);
});
/* 
 !修改用户头像
*/
router.post("/changeImg", (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      console.log("上传错误");
      // !上传错误
    } else if (err) {
      // *捕获未知错误
      console.log("未知错误");
    }
    /*   const origin = req.session.userSession.result; */

    const result = await changeUsserImg(
      req.body._id,
      `/node/userImg/${req.file.filename}`,
      req.session.userSession.result.userimg
    );
    console.log(req.session.userSession.result);
    if (result.code === 200) {
      req.session.userSession = result;
      res.send(result);
    }
  });
});
module.exports = router;
