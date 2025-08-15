Assignment 3: SQL Task 
users (id, name, email)
tasks (id, title, status, updated_at, user_id)

1. Count tasks by status (completed, pending, etc.)
  SELECT status, COUNT(*) AS total_tasks
  FROM tasks
  GROUP BY status;
2. List users with no assigned tasks
  SELECT u.id, u.name
  FROM users u
  LEFT JOIN tasks t ON u.id = t.user_id
  WHERE t.id IS NULL;
3. Find the most recently updated task
  SELECT *
  FROM tasks
  ORDER BY updated_at DESC
  LIMIT 1;
4. Join two tables (e.g., Task and User) to show assignments
  SELECT t.id AS task_id, t.title, t.status, u.name AS assigned_user
  FROM tasks t
  JOIN users u ON t.user_id = u.id;
