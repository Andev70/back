const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(null, "./uploads");
  },
  fileName: (req, file, cb) => {
    cb(null, `${file.fieldname}_${date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage: storage }).single("image");

module.exports = { upload };
