"use client";
import { getTodos } from "@/utils/todos";
import AddTodoForm from "@/utils/AddTodoForm";
import { useEffect, useState } from "react";

import ListComponent from "@/utils/ListComponent";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    async function fetchTodos() {
      const todos = await getTodos();
      setTodos(todos);
    }
    fetchTodos();
  }, [reload]);
  return (
    <div className="flex gap-12 ">
      <ListComponent setReload={setReload} todos={todos} />
      <AddTodoForm setReload={setReload} />
    </div>
  );
}
