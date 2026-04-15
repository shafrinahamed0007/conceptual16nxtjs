import React from "react";
import { ClockLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center">
      <ClockLoader color="#c92222" />
    </div>
  );
};

export default loading;
