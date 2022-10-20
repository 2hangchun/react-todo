import TaskItem from "../TaskItem/TaskItem";

import styles from "../style.module.css";

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {[...tasks]
        .sort((a, b) => b.id - a.id)
        .map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              enterEditMode={enterEditMode}
            />
          );
        })}
    </ul>
  );
};

export default TaskList;
