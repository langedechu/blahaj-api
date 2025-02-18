const model = require("../model/model");

function postImage(req, res) {
  const image = new model({
    name: req.body.name,
    url: req.body.url,
  });

  image.save((err, image) => {
    if (err) {
      res.send(err);
    }
    res.json(image);
  });
}

module.exports = postImage;
