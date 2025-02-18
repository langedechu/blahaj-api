const model = require("../model/model.js");
const randomObject = require("../utils/randomObject.js");

function getImages(_req, res) {
  model.find((err, images) => {
    if (err) {
      res.send(err);
    } else {
      res.json(randomObject(images));
    }
  });
}

module.exports = getImages;
