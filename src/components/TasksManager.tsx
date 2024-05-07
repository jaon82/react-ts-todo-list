import TaskInput from "./TaskInput";
import TasksCount from "./TasksCount";
import TasksRow from "./TasksRow";
import TasksTable from "./TasksTable";

import styles from "./TasksManager.module.css";

export default function TasksManager() {
  return (
    <main className={styles.container}>
      <TaskInput />
      <TasksTable>
        <TasksCount />
        <TasksRow />
      </TasksTable>
    </main>
  );
}
