const { updateOne } = require("../sql/sqlUser");
const mongoUser = require("../sql/sqlUser");
const fs = require("fs");
const path = require("path");
// *处理用户
const handleruser = async (user, pass) => {
  const result = await mongoUser.findOne({ user }); //&未找到返回null
  if (result === null) {
    console.log(result);
    const data = await mongoUser.create({ user, pass });
    return {
      code: 200,
      message: "注册成功,请再点击一次",
    };
  }
  if (result.pass === pass) {
    console.log(result);
    return {
      code: 200,
      message: "登录成功",
      result,
    };
  }

  return {
    code: 400,
    message: "密码不正确",
  };
};
const changeUserData = async (name, region, id, callback) => {
  const result = await mongoUser.findById(id);
  /*  console.log(result); */
  if (!result) {
    return callback({
      code: 400,
      message: "没有此用户！",
    });
  } else {
    await mongoUser.updateOne(
      { _id: id },
      {
        $set: {
          user: name,
          signature: region,
        },
      }
    );
    const result = await mongoUser.findById(id);
    console.log(result);
    return callback({
      code: 200,
      result,
      message: "修改成功！！！",
    });
  }
};
/* 
  ^修改用户头像
*/
const changeUsserImg = async (id, filename, pat) => {
  const result = await mongoUser.findById(id);
  if (result) {
    //^找到了就正常修改img
    await mongoUser.updateOne({ _id: id }, { $set: { userimg: filename } });
    const result = await mongoUser.findById(id);
    if (pat.indexOf("/node/userImg/") === 0) {
      fs.unlink(
        path.resolve(
          __dirname,
          `../../public/userImg/${pat.split("/")[pat.split("/").length - 1]}`
        ),
        () => {}
      );
    }
    return {
      code: 200,
      result,
      message: "修改图片成功",
    };
  } else {
    return {
      code: 400,
      message: "修改失败",
    };
  }
};
module.exports = {
  handleruser,
  changeUserData,
  changeUsserImg,
};
