const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
  secretAccesKey: process.env.AWS_SECRET_ACCESS,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.region,
});
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "amazon-clone-fatih-v1",
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: "testmetadata" });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = upload;
