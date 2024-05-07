import { Trash, Check } from "phosphor-react";
import styles from "./TaskRow.module.css";

export default function TaskRow() {
  return (
    <div className={styles.container}>
      <label>
        <input type="checkbox" name="economy" />
        <Check size={16} weight="bold" className={styles.checkBoxInner} />
      </label>
      <span className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <button>
        <Trash size={24} />
      </button>
    </div>
  );
}
