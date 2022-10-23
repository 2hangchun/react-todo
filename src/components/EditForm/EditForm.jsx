import React, { useState } from "react";

import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// recoil state
import { updateTask, tasksState } from "../../store/TasksStore";

const EditForm = ({ editedTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  const setTasks = useSetRecoilState(tasksState);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks((prevState) =>
      updateTask(prevState, { ...editedTask, name: updatedTaskName })
    );
    closeEditMode();
  };
  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };
    window.addEventListener("keydown", closeModalIfEscaped);
    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);
  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => e.target === e.currentTarget && closeEditMode()}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            value={updatedTaskName}
            className="input"
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Config edited task to now need ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} width={24} height={24} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
