const express = require("express");
const router = express.Router();

router.patch("/tag", async (_req, res) => {
  await res.send({
    code: 200,
    navlist: [
      { name: "首页", router: "/home" },
      { name: "文章", router: "/article" },
      { name: "留言", router: "/message" },
      { name: "友链", router: "/Friendslink" },
      { name: "关于", router: "/about" },
    ],
  });
});
module.exports = router;
