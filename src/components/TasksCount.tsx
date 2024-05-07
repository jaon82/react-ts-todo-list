import styles from "./TasksCount.module.css";
import { Task } from "./TasksManager";

interface TasksCountProps {
  tasks: Task[];
}

export default function TasksCount({ tasks }: TasksCountProps) {
  const tasksDone = tasks.reduce((sum, currentTask) => {
    if (currentTask.done) {
      sum++;
    }
    return sum;
  }, 0);

  return (
    <div className={styles.container}>
      <aside>
        <strong className={styles.createdLabel}>Tarefas criadas</strong>
        <strong className={styles.counter}>{tasks.length}</strong>
      </aside>
      <aside>
        <strong className={styles.finishedLabel}>Concluídas</strong>
        <strong className={styles.counter}>
          {tasksDone}
          {tasksDone > 0 && ` de ${tasks.length}`}
        </strong>
      </aside>
    </div>
  );
}
