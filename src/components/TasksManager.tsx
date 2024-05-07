import TaskInput from "./TaskInput";
import TasksCount from "./TasksCount";
import TaskRow from "./TaskRow";
import TasksTable from "./TasksTable";
import Empty from "../assets/empty.svg";
import styles from "./TasksManager.module.css";
import { useState } from "react";

export interface Task {
  id: number;
  done: boolean;
  title: string;
}

export default function TasksManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const sortedTasks = [
    ...tasks.filter((task) => !task.done),
    ...tasks.filter((task) => task.done),
  ];

  const handleAddTask = (taskTitle: string) => {
    const newTask: Task = {
      id: Date.now(),
      done: false,
      title: taskTitle,
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const handleCheckTask = (id: number) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(tasksUpdated);
  };

  const handleRemoveTask = (id: number) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdated);
  };

  return (
    <main className={styles.container}>
      <TaskInput onAddTask={handleAddTask} />
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
        {sortedTasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            onCheckTask={handleCheckTask}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </TasksTable>
    </main>
  );
}
