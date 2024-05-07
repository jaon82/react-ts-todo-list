import { FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./TaskInput.module.css";

interface TaskInputProps {
  onAddTask: (taskTitle: string) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleChangeTaskTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskTitle(event.target.value);
  };

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();
    onAddTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <form className={styles.container} onSubmit={handleAddTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={taskTitle}
        onChange={handleChangeTaskTitle}
      />
      <button className={styles.addButton}>
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
