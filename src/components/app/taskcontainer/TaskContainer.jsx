import React, { useState } from "react";
import TaskList from "./TaskList";
import TimeDisplay from "./TimeDisplay";
import UnwantedTaskList from "./UnwantedTaskList";
import AddTaskForm from "./AddTaskForm";

const TaskContainer = () => {
  const [formData, setFormData] = useState([]);

  const handleOnDelete = (id) => {
    if (window.confirm("Do you want to delete the task?")) {
      const upDatedList = formData.filter((item) => item.id !== id);
      setFormData(upDatedList);
    }
  };

  const switchTask = (id, type) => {
    const tempArray = formData.map((item) => {
      if (item.id === id) item.type = type;
      return item;
    });
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
            formData={formData}
            handleOnDelete={handleOnDelete}
            switchTask={switchTask}
          />
        </div>
        <TimeDisplay />
      </div>
    </>
  );
};

export default TaskContainer;
