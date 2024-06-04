import React, { useState } from "react";

import TaskList from "./TaskList";
import TimeDisplay from "./TimeDisplay";
import UnwantedTaskList from "./UnwantedTaskList";
import AddTaskForm from "./AddTaskForm";

const TaskContainer = () => {
  const [formData, setFormData] = useState([]);
  console.log(formData);
  const handleOnDelete = (id) => {
    if (window.confirm("Do you want to delete the task?")) {
      setFormData(formData.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <div className="shadow-lg border p-4 rounded">
        <div className="row gap-2">
          <AddTaskForm setFormData={setFormData} formData={formData} />
          <TaskList formData={formData} handleOnDelete={handleOnDelete} />
          <UnwantedTaskList handleOnDelete={handleOnDelete} />
        </div>
        <TimeDisplay />
      </div>
    </>
  );
};

export default TaskContainer;
