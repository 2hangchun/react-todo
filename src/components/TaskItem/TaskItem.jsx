import { useState } from "react";

// styles
import styles from "../style.module.css";

// library imports
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSetRecoilState } from "recoil";

// recoil state
import { tasksState, toggleTask } from "../../store/TasksStore";

const TaskItem = ({ task, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);
  const setTasks = useSetRecoilState(tasksState);
  const handelCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTasks((prevState) => toggleTask(prevState, task.id));
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
          onClick={() =>
            setTasks((prevState) => deleteTask(prevState, task.id))
          }
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
