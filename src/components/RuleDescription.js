import React from "react";

const ruleDescription = (props) => {

  //params to display if have
  const params = props.parameters.length > 0 ? ":" + props.parameters.join(",") : "";

  //notes to display if have
  const notes = props.notes
    ? props.notes.map((note, index) => (
        <p key={index + 1}>
          💡 Note: <span dangerouslySetInnerHTML={{ __html: note }} />{" "}
        </p>
      ))
    : "";

  return (
    <div id={props.name}>
      <h3>
        {props.name}
        <span style={{ fontWeight: "normal", fontStyle: "italic" }}>
          {params}
        </span>
      </h3>
      <p>{props.description}</p>

      {notes}
      <hr style={{ borderBottom: "1px solid #b3cdf6 !important" }} />
    </div>
  );
};

export default ruleDescription;
