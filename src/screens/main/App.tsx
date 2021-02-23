import React, { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    console.log("from react");
  }, []);

  return (
    <div id="layout">
      <div id="content">Main Window</div>
    </div>
  );
};
