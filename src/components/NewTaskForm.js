import React, { useState } from "react";

export default function NewTaskForm(props) {

  const { onAddItem } = props
  const [value, setValue] = useState("");

  const changeValueHandler = (event) => {
    setValue(event.target.value);
  };
  const submitItem = (event) =>{
    if(event.key === "Enter"){
      onAddItem(value);
      setValue('');
    }
  }

  return (
    <input
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus=""
      onInput={changeValueHandler}
      onKeyDown={submitItem}
      value={value}
    />
  );
}
