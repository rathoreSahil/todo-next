import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { deleteTodo, getTodo } from "./todos";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useState } from "react";

export default function ListComponent({ setReload, todos }) {
  async function handleCheck(id) {
    const currentTodo = await getTodo(id);
    await updateDoc(doc(db, "todos", id), {
      status: "completed",
      ...currentTodo,
    });
    setReload((c) => c + 1);
  }

  async function handleDelete(id) {
    await deleteTodo(id);
    setReload((c) => c - 1);
  }

  return (
    <div className="w-1/2 p-12">
      <p className="text-3xl mb-6">ToDo List</p>
      {todos.map((item, idx) => {
        return (
          <Accordion
            className="border-2 px-4"
            key={idx}
            type="single"
            collapsible
          >
            <AccordionItem value={`item-${idx}`}>
              <AccordionTrigger>
                <span>{item.title}</span>
                <span className="text-green-600">{item.status}</span>
              </AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <div>
                  {item.description}
                  <br />
                  Due: {item.due}
                </div>
                <div className="flex gap-2">
                  {!item.status && (
                    <Button
                      onClick={() => handleCheck(item.id)}
                      className="bg-green-600"
                      size="xs"
                    >
                      <FaCheck />
                    </Button>
                  )}

                  <Button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600"
                    size="xs"
                  >
                    <MdDelete />
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}
