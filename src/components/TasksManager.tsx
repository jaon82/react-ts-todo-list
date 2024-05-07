import TaskInput from "./TaskInput";
import TasksCount from "./TasksCount";
import TaskRow from "./TaskRow";
import TasksTable from "./TasksTable";
import Empty from "../assets/empty.svg";
import styles from "./TasksManager.module.css";

export interface Task {
  id: number;
  done: boolean;
  title: string;
}

const tasks: Task[] = [
  {
    id: 1,
    done: false,
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: 2,
    done: false,
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: 3,
    done: false,
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: 4,
    done: true,
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: 5,
    done: true,
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
];

export default function TasksManager() {
  return (
    <main className={styles.container}>
      <TaskInput />
      <TasksTable>
        <TasksCount tasks={tasks} />
        {tasks.length === 0 && (
          <div className={styles.noTasksContainer}>
            <img src={Empty} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </TasksTable>
    </main>
  );
}
