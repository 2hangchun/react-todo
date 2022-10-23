import { useState } from "react";

// custom hooks
import useLocalStorage from "./hooks/useLocalStorage";

// custom components
import CustomForm from "./components/CustomForm/CustomForm";
import EditForm from "./components/EditForm/EditForm";
import TaskList from "./components/TaskList/TaskList";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

// recoil state
import { tasksState } from "./store/TasksStore";
import { useRecoilValue } from "recoil";

function App() {
  const [editedTask, setEditedTask] = useState(null);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const tasks = useRecoilValue(tasksState);

  const closeEditMode = () => {
    setIsEditing(false);
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
      <CustomForm />
      {tasks && <TaskList enterEditMode={enterEditMode} />}
      <ThemeSwitcher />
    </div>
  );
}

export default App;
