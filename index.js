const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const router = require("./router/router.js");

const app = express();

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

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is online at ${port} port`);
});
