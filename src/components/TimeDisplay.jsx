import React from "react";

const TimeDisplay = () => {
  return (
    <>
      <div className="col">
        <div className="alert alert-info fw-bold">
          Total Hours in a week:
          <span id="weekHoursElement"></span>
        </div>
      </div>
      <div className="col">
        <div className="alert alert-info fw-bold">
          Total Hours Spent:
          <span id="totalTimeSpentElement"></span>
        </div>
      </div>
      <div className="col">
        <div className="alert alert-danger fw-bold">
          Total Hours you could have saved:
          <span id="totalTimeWastedElement"></span>
        </div>
      </div>
    </>
  );
};

export default TimeDisplay;
