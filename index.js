const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Express app
const router = require("./router/router.js");
const app = express();

// MySQL connection
try {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  connection.connect((_err) => {
    if (_err) {
      console.error(_err);
      throw _err;
    }
    console.log("MySQL > Connected to the database");
  });
} catch (_error) {
  console.error(_error);
  throw _error;
}

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("views"));
app.use(router);

app.listen(parseInt(process.env.APP_PORT), async () => {
  console.log(`Express > Listening on port ${port}.`);
});
