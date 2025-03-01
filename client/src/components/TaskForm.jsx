import React, { useState } from "react";

const API_URL = "https://todo-app-26nf.onrender.com/api/tasks";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a task..." value={title} onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
