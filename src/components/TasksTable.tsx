import styles from "./TasksTable.module.css";

import { ReactNode } from "react";

interface TasksTableProps {
  children: ReactNode;
}

export default function TasksTable({ children }: TasksTableProps) {
  return <div className={styles.container}>{children}</div>;
}
