const sqlite3 = require("sqlite3");
const express = require("express");
const cors = require("cors");
const app = express();
app.disable("x-powered-by");
app.use(cors());

const PORT = 8000;

let db = new sqlite3.Database("database.db", (err) => {
  if (!err) {
    db.run(
      "CREATE TABLE IF NOT EXISTS tbl_about_myself (name text, email text)",
      (err2) => {
        if (!err2) {
          db.run(
            "INSERT INTO tbl_about_myself (name, email) VALUES ('DOPT', 'goodsosbva@naver.com')",
            (err3) => {
              if (!err3) {
                console.log("Initial data inserted successfully.");
              } else {
                console.log("Error inserting initial data:", err3);
              }
            }
          );
        } else {
          console.log("Error creating table:", err2);
        }
      }
    );
  } else {
    console.log("Error opening database:", err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res, next) => {
  res.json({ rsp: "ok" });
});

app.get("/db/about-me", (req, res, next) => {
  db.all("SELECT * FROM tbl_about_myself", (err, rows) => {
    if (!err) {
      res.json({
        rsp: "ok",
        data: rows[0],
      });
    } else {
      console.log("Error querying database:", err);
      res.status(500).json({ rsp: "error" });
    }
  });
});
