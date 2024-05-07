//import styes from "./TaskManager.module.css";

import { ReactNode } from "react";

interface TasksTableProps {
  children: ReactNode;
}

export default function TasksTable({ children }: TasksTableProps) {
  return <>{children}</>;
}
