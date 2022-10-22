import { useState } from "react";

// styles
import styles from "../style.module.css";

// library imports
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

// store
import { tasksStore } from "../../store/TasksStore";
import { observer } from "mobx-react-lite";

const TaskItem = ({ task, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);
  const handelCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    tasksStore.toggleTask(task.id);
  };
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          name={task.name}
          id={task.id}
          onChange={handelCheckboxChange}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilIcon width={24} height={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => tasksStore.deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};

export default observer(TaskItem);
