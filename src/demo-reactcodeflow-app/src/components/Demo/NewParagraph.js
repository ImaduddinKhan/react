import React from "react";

const NewParagraph = (props) => {
  console.log("New Paragraph running");
  return <p>{props.children}</p>;
};

export default NewParagraph;
