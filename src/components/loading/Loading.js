import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(247, 249, 250)",
      }}
    >
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loading;
