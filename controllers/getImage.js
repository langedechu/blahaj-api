const { db } = require("../index.js");
const randomObject = require("../utils/randomObject.js");

/**
 * Get a random entry from the database.
 * @param {import("express").Request} _req
 * @param {import("express").Response} res
 */
function getImage(_req, res) {
  const query = db.createQuery({
    sql: "SELECT * FROM images",
  });

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error." });
      return;
    }

    res.status(200).json(randomObject(results));
  });
}

module.exports = getImage;
