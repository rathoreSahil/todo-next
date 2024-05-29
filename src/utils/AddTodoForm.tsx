"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { addTodo } from "./todos";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AddTodoForm({ setReload }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState("");

  async function addNewTodo() {
    // Add Todo

    const newTodo = {
      title,
      description,
      due,
    };
    console.log(newTodo);
    await addTodo(newTodo);
    setReload((c) => c + 1);
  }

  return (
    <Card className="w-1/2 m-12">
      <CardHeader>
        <CardTitle>Add Todo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            type="text"
          />
        </div>
        <div>
          <Label htmlFor="due">Due Date</Label>
          <Input
            value={due}
            onChange={(e) => setDue(e.target.value)}
            id="due"
            type="date"
          />
        </div>
        <Button onClick={addNewTodo} size="lg">
          Add Todo
        </Button>
      </CardContent>
    </Card>
  );
}
