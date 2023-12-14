import { useRef } from "react";

import Input from "./Input";
import Button from "./Button";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    // validation...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input type="text" ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
