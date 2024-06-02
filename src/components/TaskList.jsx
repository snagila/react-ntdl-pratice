import React from "react";

const TaskList = ({ title }) => {
  return (
    <>
      <h3 className="text-center">{title}</h3>
      <div className="px-4" style={{ height: "40vh", overFlowY: "auto" }}>
        <table className="table table-hover border">
          {/* <!-- This is where you add all task--> */}
          <tbody id="taskListelement"></tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
