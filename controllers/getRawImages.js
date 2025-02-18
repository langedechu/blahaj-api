const model = require("../model/model.js");
const randomObject = require("../utils/randomObject.js");

function getRawImages(_req, res) {
  model.find((err, images) => {
    if (err) {
      res.err(err);
    } else {
      res.redirect(randomObject(images)["url"]);
    }
  });
}

module.exports = getRawImages;
