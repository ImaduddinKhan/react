import React from "react";
import Output from "./Output";

const NewParagraph = (props) => {
  console.log("New Paragraph running");
  return <p>{props.children}</p>;
};

export default NewParagraph;
