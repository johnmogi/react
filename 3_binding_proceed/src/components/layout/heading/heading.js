import React from "react";
import "./heading.css";




export default function Heading(props) {

  return (
    <div className="heading">
  <h2 >
&rarr;
 {props.title}

&larr;


</h2>

    </div>
  );
}
