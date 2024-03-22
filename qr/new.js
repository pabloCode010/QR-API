const qrcode = require("qrcode");

const methods = {
  png: qrcode.toBuffer,
  svg: qrcode.toString,
};

function newCode(text, options) {
  return new Promise((resolve, reject) => {
    methods[options.type](text, options, (err, qr) => {
      if (err) {
        reject(err);
      } else {
        resolve(qr);
      }
    });
  });
}

module.exports = {
  newCode,
};
