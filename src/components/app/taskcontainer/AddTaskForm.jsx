import React, { useState } from "react";
import { randomIDGenerator } from "../../../utility/randomIdGenerator";

const AddTaskForm = ({ setFormData, formData }) => {
  const [form, setForm] = useState({});
  const ttHrPerWk = 24 * 7;
  const ttlHr = formData.reduce((acc, item) => {
    return acc + item.taskTime;
  }, 0);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "taskTime" ? +value : value }); //setForm({ ...form, [name]: value }); but we are changing string to number by checking name
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ...form,
      type: "entry",
      id: randomIDGenerator(),
    };
    if (ttlHr + obj.taskTime > ttHrPerWk) {
      return alert("sorry Boss not enough hours left to fit this task");
    } else setFormData([...formData, obj]);
  };

  return (
    <>
      <div className="col border p-4 rounded align-self-center">
        <form action="" onSubmit={handleOnSubmit}>
          <div className="d-flex flex-column gap-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Task Name"
              name="taskName"
              required
              onChange={handleOnChange}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Enter Hours Spent"
              name="taskTime"
              min="1"
              max="24"
              required
              onChange={handleOnChange}
            />
            <button className="btn btn-primary" type="sumbit">
              Add New Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTaskForm;
