import React from "react";

const TaskList = ({ formData, handleOnDelete, switchTask }) => {
  const entries = formData.filter((item) => item.type === "taskList");
  return (
    <>
      <div className="col border p-4 rounded">
        <h3 className="text-center">Task List</h3>
        <div className="px-4" style={{ height: "40vh", overFlowY: "auto" }}>
          <table className="table table-hover border">
            <tbody id="taskListelement">
              {entries.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.taskName}</td>
                  <td>{item.taskTime}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleOnDelete(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => switchTask(item.id, "unwanted")}
                    >
                      <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskList;
