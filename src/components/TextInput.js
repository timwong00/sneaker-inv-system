import React from "react";

function TextInput(props) {
  function handleChange(event) {
    event.preventDefault();
    if (props.onChange) {
      props.onChange(event);
    }
  }

  return (
    <p>
      <input
        ref={props.inputRef}
        type="text"
        value={props.value}
        name={props.name}
        onChange={handleChange}
      />
    </p>
  );
}

export default TextInput;
