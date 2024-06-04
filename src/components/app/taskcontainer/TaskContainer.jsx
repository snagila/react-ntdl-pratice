import React, { useState } from "react";

import TaskList from "./TaskList";
import TimeDisplay from "./TimeDisplay";
import UnwantedTaskList from "./UnwantedTaskList";
import AddTaskForm from "./AddTaskForm";

const TaskContainer = () => {
  const [formData, setFormData] = useState([]);

  const handleOnDelete = (id) => {
    if (window.confirm("Do you want to delete the task?")) {
      setFormData(formData.filter((item) => item.id !== id));
    }
  };

  const switchTask = (id, type) => {
    const tempArray = formData.map((item) => {
      if (item.id === id) item.type = type;
      return item;
    });
    console.log(tempArray);
    setFormData(tempArray);
  };

  return (
    <>
      <div className="shadow-lg border p-4 rounded">
        <div className="row gap-2">
          <AddTaskForm setFormData={setFormData} formData={formData} />
          <TaskList
            formData={formData}
            handleOnDelete={handleOnDelete}
            switchTask={switchTask}
          />
          <UnwantedTaskList
            handleOnDelete={handleOnDelete}
            switchTask={switchTask}
            formData={formData}
          />
        </div>
        <TimeDisplay />
      </div>
    </>
  );
};

export default TaskContainer;
