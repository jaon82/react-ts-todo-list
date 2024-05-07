import { Trash, Check } from "phosphor-react";
import styles from "./TaskRow.module.css";
import { Task } from "./TasksManager";

interface TaskRowProps {
  task: Task;
  onCheckTask: (id: number) => void;
  onRemoveTask: (id: number) => void;
}

export default function TaskRow({
  task,
  onCheckTask,
  onRemoveTask,
}: TaskRowProps) {
  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onCheckTask(task.id)}
        />
        {task.done && (
          <Check size={16} weight="bold" className={styles.checkBoxInner} />
        )}
      </label>
      <span className={task.done ? styles.taskDone : styles.taskText}>
        {task.title}
      </span>
      <button onClick={() => onRemoveTask(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
