import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TimeDisplay from "./TimeDisplay";

const TaskContainer = () => {
  const [tasklist, setTaskList] = useState([]);
  const addTask = (taskObject) => {
    setTaskList([...tasklist, setTaskList]);
  };

  return (
    <>
      <div className="shadow-lg border p-4 rounded">
        <div className="row gap-2">
          {/* <!--First Column--> */}
          <div className="col border p-4 rounded align-self-center">
            {/* <!--- Form to Add task--> */}

            <AddTaskForm addTask={addTask} />
          </div>
          {/* <!--Second Column--> */}
          <div className="col border p-4 rounded">
            {/* <!--- Task List--> */}
            <TaskList title="Task List" />
          </div>
          {/* <!--Third Column--> */}
          <div className="col border p-4 rounded">
            {/* <!--- unwanted Task List--> */}
            <TaskList title="Unwanted Task List" />
          </div>
        </div>

        {/* <!--Second row--> */}
        <div className="row mt-4">
          <TimeDisplay />
        </div>
      </div>
    </>
  );
};

export default TaskContainer;
