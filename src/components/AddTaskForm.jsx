import React, { useState } from "react";
import { randomIDGenerator } from "../utility/randomIdGenerator";

const AddTaskForm = ({ addTask }) => {
  const [taskObject, setTaskObject] = useState({});

  const initialTaskObject = {
    taskName: "",
    taskTime: "",
    type: "",
    id: randomIDGenerator(),
  };
  const handleOnChange = (e) => {
    const keyToUpdate = e.target.name;

    setTaskObject({ ...taskObject, [keyToUpdate]: e.target.value });
  };

  const handleOnSubmit = () => {
    e.preventDefault();
    addTask(taskObject);

    setTaskObject(initialTaskObject);
    // logic to add task to add the tasklist
  };
  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="d-flex flex-column gap-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task Name"
            name="taskName"
            required
            value={taskObject.taskName}
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Enter Hours Spent"
            name="taskTime"
            min="1"
            max="24"
            value={taskObject.taskTime}
            onChange={(e) => handleOnChange(e)}
            required
          />
          <button className="btn btn-primary" type="sumbit">
            Add New Task
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskForm;
