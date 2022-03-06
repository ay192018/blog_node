const nodemailer = require("nodemailer");

module.exports = ({ name, email, theme, message }, callback) => {
  /*  
    ^邮件基础信息
  */
  const transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,

    auth: {
      user: "2510186180@qq.com", // generated ethereal user
      pass: "uslpgwiudfaceajd", // generated ethereal password
    },
  });
  /*  
    ~邮件发送信息
  */
  const info = [
    //发给申请人
    {
      from: "2510186180@qq.com", // 邮件发送的来源
      to: "1738202298@qq.com", //发送给谁
      subject: theme, //主题
      text: `${name}(先生/女士)${message}`, // 内容
    },
    //发给自己看
    {
      from: "2510186180@qq.com", // 邮件发送的来源
      to: email, //发送给谁
      subject: "自动回复邮件", //主题
      text: `已经接收你发送的邮件，我会在看到邮件第一时间回复您`, // 内容
    },
  ];
  /*   {
    from: name, // 邮件发送的来源
    to: email, //发送给谁
    subject: theme, //主题
    text: message, // 内容
  }, */
  info.forEach((item, index) => {
    transporter.sendMail(item, (err, info) => {
      /* 
          !报错信息 和发送结果
        */
      console.log(err, info);
      if (err) {
        return callback({
          code: 400,
          message: "发送邮件失败",
        });
      }
      if (index === 1) {
        return callback({
          code: 200,
          message: "发送邮件成功",
        });
      }
    });
  });
};
