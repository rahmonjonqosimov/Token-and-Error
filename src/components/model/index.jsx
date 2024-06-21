import React from "react";
import "./index.scss";

const Model = ({ children, width }) => {
  return (
    <section style={{ width: `${width}px` }} id="model">
      {children}
    </section>
  );
};

export default Model;
