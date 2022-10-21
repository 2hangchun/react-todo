import TaskItem from "../TaskItem/TaskItem";

import styles from "../style.module.css";

const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {[...tasks]
        .sort((a, b) => b.id - a.id)
        .map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
    </ul>
  );
};

export default TaskList;
