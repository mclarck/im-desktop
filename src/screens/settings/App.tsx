import React, { useEffect } from "react";

module.exports = function App() {
  useEffect(() => {
    console.log("from react");
  }, []);

  return (
    <div id="layout">
      <div id="content">Main Window</div>
    </div>
  );
};
