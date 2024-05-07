import { PlusCircle } from "phosphor-react";

import styles from "./TaskInput.module.css";

export default function TaskInput() {
  return (
    <form className={styles.container}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
