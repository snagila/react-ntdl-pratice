import React from "react";

const UnwantedTaskList = ({ handleOnDelete, switchTask, formData }) => {
  const unwantedEntries = formData.filter((item) => item.type === "unwanted");

  return (
    <>
      <div className="col border p-4 rounded">
        <h3 className="text-center">Unwanted Task List</h3>
        <div className="px-4" style={{ height: "40vh", overFlowY: "auto" }}>
          <table className="table table-hover border">
            <tbody id="taskListelement">
              {unwantedEntries.map((item, i) => {
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.taskName}</td>
                  <td>{item.taskTime}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => switchTask(item.id, "taskList")}
                    >
                      <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleOnDelete(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>;
                console.log(unwantedEntries);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UnwantedTaskList;
