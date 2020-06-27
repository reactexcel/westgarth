import React from "react";

function field({ ...props }) {
  return (
    <div className={`py-3 ${props.headerClassName}`}>
      <h6 className={`text-uppercase ${props.textClassName}`}>{props.heading}</h6>
      <div>{props.text}</div>
    </div>
  );
}

export default field;
