import React from "react";
import NewParagraph from "./NewParagraph";

const Output = (props) => {
  console.log("Demo output running");
  return <NewParagraph>{props.show ? "Hello Pakistan" : ""}</NewParagraph>;
};

export default React.memo(Output);

/**memo tells react to compare the new prop value to the previous prop value
 * and if there is some change then only renders this and the child/children
 * to this component
 */
