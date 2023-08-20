import React, { useEffect } from "react";

export default function S02Component(props) {
  useEffect(() => {
    document.title = props["title"];
  }, [props]);
  return (
    <div className="App">
      <h1>Home Page</h1>
    </div>
  );
}
