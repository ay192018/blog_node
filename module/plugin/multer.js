const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination(req, file, callback) {
    console.log(file);
    // !上传文件存储位置
    callback(null, path.resolve(__dirname, "../../public/userImg"));
  },
  filename(req, file, callback) {
    // ~设置上传文件名称

    callback(null, `${Date.now()}.jpg`);
  },
});

module.exports = multer({ storage: storage }).single("file");
