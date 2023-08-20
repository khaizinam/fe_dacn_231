import React, { useEffect } from "react";
function S01Component(props) {
  useEffect(() => {
    document.title = props["title"];
  }, [props]);
  return (
    <div className="App">
      <h1>worked</h1>
    </div>
  );
}

export default S01Component;
