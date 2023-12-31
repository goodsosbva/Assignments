const sqlite3 = require("sqlite3");
const express = require("express");
const TYPE = require("./type.js");
const get = require("./get.js");
const post = require("./post.js");
const put = require("./put.js");
const initial = require("./initial.js");
const cors = require("cors");
const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use("/assets", express.static("assets"));

const PORT = 8000;

let db = new sqlite3.Database("database.db", (err) => {
  if (!err) {
    initial.run(db, TYPE.about_me);
    initial.run(db, TYPE.resume);
    initial.run(db, TYPE.applications);
    initial.run(db, TYPE.notification);
    initial.run(db, TYPE.blog);
    initial.run(db, TYPE.accounts);
  }
});

app.listen(PORT, () => {
  console.log(`Listening... ${PORT}`);
});

get.setup(app, db);
post.setup(app, db);
put.setup(app, db);

db.all("SELECT * FROM tbl_accounts;", (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }

  // 조회 결과를 출력
  rows.forEach((row) => {
    console.log(
      `ID: ${row.id}, Email: ${row.email}, Password: ${row.password}`
    );
  });
});
