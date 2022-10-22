import { useState } from "react";

// custom hooks
import useLocalStorage from "./hooks/useLocalStorage";

// custom components
import CustomForm from "./components/CustomForm/CustomForm";
import EditForm from "./components/EditForm/EditForm";
import TaskList from "./components/TaskList/TaskList";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

// store
import { tasksStore } from "./store/TasksStore";
import { observer } from "mobx-react-lite";

function App() {
  const [editedTask, setEditedTask] = useState(null);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const addTask = (task) => {
    setTasks((prevState) => {
      return [...prevState, task];
    });
  };
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };
  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    // TODO: close the edit mode
    closeEditMode();
  };
  const closeEditMode = () => {
    setIsEditing(false);
    // TODO: previous state focus
    previousFocusEl.focus();
  };
  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };
  return (
    <div className="container">
      <h1>My Task List</h1>
      {isEditing && (
        <EditForm editedTask={editedTask} closeEditMode={closeEditMode} />
      )}
      <CustomForm addTask={addTask} />
      {tasksStore.tasks && <TaskList enterEditMode={enterEditMode} />}
      <ThemeSwitcher />
    </div>
  );
}

export default observer(App);
