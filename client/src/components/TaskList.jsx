import React from "react";

const API_URL = "https://todo-app-26nf.onrender.com/api/tasks";

const TaskList = ({ tasks, fetchTasks }) => {
  const toggleComplete = async (task) => {
    await fetch(`${API_URL}/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <span className={task.completed ? "completed-task" : ""}>
            {task.title}
          </span>

          
          <button
            className={`complete-btn ${task.completed ? "completed" : ""}`}
            onClick={() => toggleComplete(task)}
          >
            Complete
            {task.completed && <span className="check-line"></span>}
          </button>

          <button className="delete-btn" onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
