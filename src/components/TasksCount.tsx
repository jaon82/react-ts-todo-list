import styles from "./TasksCount.module.css";

export default function TasksCount() {
  return (
    <div className={styles.container}>
      <aside>
        <strong className={styles.createdLabel}>Tarefas criadas</strong>
        <strong className={styles.counter}>0</strong>
      </aside>
      <aside>
        <strong className={styles.finishedLabel}>Concluídas</strong>
        <strong className={styles.counter}>0</strong>
      </aside>
    </div>
  );
}
