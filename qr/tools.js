const qrcode = require("qrcode");

function toBuffer(text) {
  return new Promise((resolve, reject) => {
    qrcode.toBuffer(text, (err, buffer) => {
      if (err) {
        reject(err);
        
      } else {
        resolve(buffer);
      }
    });
  });
}

module.exports = {
  toBuffer,
};
