import React from "react";

const UnwantedTaskList = ({ handleOnDelete }) => {
  return (
    <>
      <div className="col border p-4 rounded">
        <h3 className="text-center">Unwanted Task List</h3>
        <div className="px-4" style={{ height: "40vh", overFlowY: "auto" }}>
          <table className="table table-hover border">
            <tbody id="taskListelement">
              <tr>
                <td>1</td>
                <td>sleep</td>
                <td>9hrs</td>
                <td className="text-end">
                  <button className="btn btn-warning btn-sm">
                    <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleOnDelete(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UnwantedTaskList;
