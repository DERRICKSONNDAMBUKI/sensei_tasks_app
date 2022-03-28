CREATE DATABASE tasksDB;
CREATE TABLE taskTable(
  task_id SERIAL PRIMARY KEY,
  task_text VARCHAR(50),
  task_day VARCHAR,
  task_reminder BOOLEAN
);
SELECT
  *
FROM
  taskTable;
INSERT INTO
  taskTable (task_text, task_day, task_reminder)
VALUES($ 1, $ 2, $ 3) RETURNING *;
SELECT
  *
FROM
  taskTable
WHERE
  task_id = $ 1;
UPDATE
  taskTable
SET
  task_text = $ 2 task_day = $ 3
WHERE
  task_id = $ 1;
DELETE FROM
  taskTable
WHERE
  task_id = $ 1;
INSERT INTO
  taskTable (task_text, task_day, task_reminder)
VALUES('Code js', 'Saturday', True);
INSERT INTO
  tasktable (task_id, task_text, task_day, task_reminder)
VALUES
  (
    task_id :integer,
    'Design shop',
    'Monday',
    True
  );