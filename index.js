const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Express app
const router = require("./router/router.js");
const app = express();

// MySQL connection
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect((_err) => {
  if (_err) {
    console.error(_err);
    throw _err;
  }
  console.log("MySQL > Connected to the database");

  module.exports.db = connection;
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("views"));
app.use(router);

app.listen(parseInt(process.env.APP_PORT), async () => {
  console.log(`Express > Listening on port ${process.env.APP_PORT}.`);
});
