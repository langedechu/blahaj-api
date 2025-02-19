/**
 * Post an image entry to the database.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function postImage(req, res) {
  const { db } = require("../");

  db.query(
    {
      sql: "INSERT INTO images (url, name) VALUES (?, ?)",
      values: [req.query.url, req.query.name],
    },
    (err, _results) => {
      if (err) {
        res.status(500).json({ error: "Internal server error." });
        return;
      }

      res.status(200).json({ message: "Image posted." });
    }
  );
}

module.exports = postImage;
