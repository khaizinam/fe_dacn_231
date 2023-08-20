import React, { useEffect } from "react";

export default function NotFound(props) {
  useEffect(() => {
    document.title = props["title"];
  }, [props]);
  return <div>NOT FOUND</div>;
}
