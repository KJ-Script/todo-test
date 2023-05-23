const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});

connection.connect();

//Adding tasks to the backend
app.post("/addTask", (req, res) => {
  console.log("here");
  const task = req.body.task;
  const status = req.body.status;

  let post = {
    task: task,
    status: status,
  };
  const query = connection.query("INSERT INTO todo SET ?", post, (error) => {
    if (error) throw error;
  });
  console.log(query.sql);
  res.send("Data saved successfully");
});

//Fetching Data
app.get("/getdata", (req, res) => {
  connection.query("SELECT * FROM todo", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
  console.log("Data retrieved successfully");
});

app.post("/deletedata", (req, res) => {
  const _id = req.body.id;

  connection.query(`DELETE FROM todo WHERE id=${_id}`, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/updatestatus', (req, res) => {
  const _id = req.body.id
  
  connection.query(`UPDATE todo SET status='completed' WHERE id=${_id}` ,(err, result) => {
    if (err) throw err;
    res.json(result)
  })
})



app.listen(8080, function () {
  console.log("app listening on port 8080!");
});
