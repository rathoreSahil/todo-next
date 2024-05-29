import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { update } from "firebase/database";
import { updateTodo } from "./todos";

import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function ListComponent({ todos }) {
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
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <div>
                  {item.description}
                  <br />
                  Due: {item.due}
                </div>
                <div className="flex gap-2">
                  <Button className="bg-green-600" size="xs">
                    <FaCheck />
                  </Button>
                  <Button className="bg-red-600" size="xs">
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
