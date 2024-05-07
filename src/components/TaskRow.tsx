import { Trash, Check } from "phosphor-react";
import styles from "./TaskRow.module.css";
import { Task } from "./TasksManager";

interface TaskRowProps {
  task: Task;
}

export default function TaskRow({ task }: TaskRowProps) {
  return (
    <div className={styles.container}>
      <label>
        <input type="checkbox" checked={task.done} />
        {task.done && (
          <Check size={16} weight="bold" className={styles.checkBoxInner} />
        )}
      </label>
      <span className={styles.taskText}>{task.title}</span>
      <button>
        <Trash size={24} />
      </button>
    </div>
  );
}
