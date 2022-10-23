import TaskItem from "../TaskItem/TaskItem";

// style
import styles from "../style.module.css";

// library import
import { useRecoilValue } from "recoil";

// recoil state
import { tasksState } from "../../store/TasksStore";

const TaskList = ({ enterEditMode }) => {
  const tasks = useRecoilValue(tasksState);
  return (
    <ul className={styles.tasks}>
      {[...tasks]
        .sort((a, b) => b.id - a.id)
        .map((task) => {
          return (
            <TaskItem key={task.id} task={task} enterEditMode={enterEditMode} />
          );
        })}
    </ul>
  );
};

export default TaskList;
