module.exports = (req, res) => {
  const captcha = require("node-svgcaptcha");
  const options = {
    length: 5, // lenght of chars in generated captcha
    width: 150, // width of the generated image
    height: 40, // height of the generated image
    color: true, // true means that letters are painted in colors and false in gray scale
    lines: 2, // number of lines in the captcha
    noise: 1, // level of noise (points) in the captcha
  }; //Set your configuration in this object
  const genCaptcha = captcha(options);
  if (req.session) {
    //save value in session
    req.session.captcha = {
      code: 200,
      svg: genCaptcha.svg,
      text: genCaptcha.captchaValue,
    };
  }
  //return svg to render in the browser
  res.set("Content-Type", "image/svg+xml");
  res.send({
    code: 200,
    svg: genCaptcha.svg,
    text: genCaptcha.captchaValue,
  });
};
