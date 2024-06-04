import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TimeDisplay from "./TimeDisplay";
import UnwantedTaskList from "./UnwantedTaskList";

const TaskContainer = () => {
  const [formData, setFormData] = useState([]);
  console.log(formData);
  return (
    <>
      <div className="shadow-lg border p-4 rounded">
        <div className="row gap-2">
          <AddTaskForm setFormData={setFormData} formData={formData} />
          <TaskList formData={formData} />
          <UnwantedTaskList />
        </div>
        <TimeDisplay />
      </div>
    </>
  );
};

export default TaskContainer;
