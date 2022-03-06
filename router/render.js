const express = require("express");
const router = express.Router();

router.put("/userData", async (_req, res) => {
  await res.send({
    code: 200,
    text: [
      "我可不会碰你,除非忍不住🤪🤪🤪🤪🤪",
      "该睡觉了😪😪😪",
      "早上好,新的一天⏰⏰⏰",
      "下午好,努力吧少年💦💦💦",
      "晚上好,开始学习了嘛📚︎📚︎📚︎",
    ],
    article: [
      {
        imgSrc: "http://localhost:3000/img/hot1.png",
        HotTitle: "一个可以绑定多个天翼云网盘的目录列表程序",
      },
      {
        imgSrc: "http://localhost:3000/img/hot2.png",
        HotTitle:
          "cpulimit 是一个限制进程的 CPU 使用率的工具（以百分比表示，而不是 CPU 时间）。当您不希望批处理作业占用太多 CPU 周期时，控制批处理作业很有用",
      },
      {
        imgSrc: "http://localhost:3000/img/hot3.png",
        HotTitle:
          "查找适合自己当前网络环境的优选Cloudflare Anycast IP，具体这玩意儿有啥用？可以",
      },
      {
        imgSrc: "http://localhost:3000/img/hot4.png",
        HotTitle:
          "Deluge是一款免费的 BT 传输软件，相比于其他同类产品，Deluge完美支持各大主流操作系统( Windows 、 Linux 、 Mac OS )，软件体积小巧、绿色安全，",
      },
      {
        imgSrc: "http://localhost:3000/img/hot5.png",
        HotTitle:
          "多时候，我们监控程序都使用supervisor，但是在一些小场景中，没必要安装额外的软件，并且supervisor对新手不太友好，需要根据他的语法格式进行撰写",
      },
    ],
    blogdata: [
      {
        iconClass: "<notebook/>",
        titleText: "文章",
        changeNumber: "1",
      },
      {
        iconClass: "<chatDotRound/>",
        titleText: "评论数量",
        changeNumber: "2",
      },
      {
        iconClass: "<loading/>",
        titleText: "运行天数",
        changeNumber: "3",
      },
      {
        iconClass: "<sugar/>",
        titleText: "最后活动",
        changeNumber: "4",
      },
    ],
  });
});
router.put("/skills", (req, res) => [
  res.send({
    code: 200,
    skillArr: [
      {
        name: "JavaScript",
        progress: 80,
      },
      {
        name: "ES6",
        progress: 90,
      },

      {
        name: "Node-Express",
        progress: 50,
      },
      {
        name: "Vue2.0-Vue3.0",
        progress: 70,
      },
      {
        name: "微信小程序",
        progress: 40,
      },
      {
        name: "Wabpack-Git",
        progress: 70,
      },
      {
        name: "Element-Vant",
        progress: 90,
      },
    ],
  }),
]);
module.exports = router;
