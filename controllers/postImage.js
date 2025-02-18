const { db } = require("../");

/**
 * Post an image entry to the database.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function postImage(req, res) {
  const query = db.createQuery({
    sql: "INSERT INTO images (url, name) VALUES (?, ?)",
    values: [req.query.url, req.query.name],
  });

  db.query(query, (err, _results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error." });
      return;
    }

    res.status(200).json({ message: "Image posted." });
  });
}

module.exports = postImage;
