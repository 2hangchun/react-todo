import TaskItem from "../TaskItem/TaskItem";

// style
import styles from "../style.module.css";

// store
import { tasksStore } from "../../store/TasksStore";
import { observer } from "mobx-react-lite";

const TaskList = ({ enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {[...tasksStore.tasks]
        .sort((a, b) => b.id - a.id)
        .map((task) => {
          return (
            <TaskItem key={task.id} task={task} enterEditMode={enterEditMode} />
          );
        })}
    </ul>
  );
};

export default observer(TaskList);
