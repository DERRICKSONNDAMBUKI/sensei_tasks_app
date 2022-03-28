const express = require("express");
app = express();
const cors = require("cors");
const pool = require("./database/db");
const { param } = require("express/lib/request");

// routes
app.get("/", (req, res) => {
  try {
    res.send("<h1>Sensei Tasks Back-end</h1>");
  } catch (error) {
    console.error(error);
  }
});
// create task
app.post("/tasks", async (req, res) => {
  try {
      console.log(req.body);
    const { task_text, task_day, task_reminder } = req.body;
    const newTask = await pool.query(
      "INSERT INTO taskTable(task_text, task_day, task_reminder) VALUES($1, $2, $3) RETURNING *;",
      [task_text, task_day, task_reminder]
    );

    res.json(newTask.rows[0]);
    console.log("task created");
  } catch (error) {
    console.error(error.message);
  }
});

// get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM taskTable;");
    res.json(allTasks.rows);
    console.log("getting all tasks");
  } catch (error) {
    console.error(error);
  }
});

// get one task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Tasks = await pool.query(
      "DELETE FROM taskTable WHERE task_id = $1;",
      [id]
    );
    res.json(`deleted task (${id}) successfully`);
    console.log(`deleted task (${id}) successfully`);
  } catch (error) {
    console.error(error);
  }
});

const server = app.listen(8080, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server is listening at http://${host}:${port}`);
});
