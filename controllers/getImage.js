/**
 * Get a random entry from the database.
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 */
function getImage(_req, res) {
  const { db } = require("../index.js");
  const randomObject = require("../utils/randomObject.js");

  db.query(
    {
      sql: "SELECT * FROM images",
    },
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Internal server error." });
        return;
      }

      res.status(200).json(randomObject(results));
    }
  );
}

module.exports = getImage;
