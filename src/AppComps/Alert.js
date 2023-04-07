import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    // const lowCase = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    props.alert && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}
