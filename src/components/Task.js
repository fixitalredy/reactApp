import React, { useState } from "react";

export default function Task(props) {
  const [done, setDone] = useState(props.done);
  const [removed, setRemoved] = useState(props.removed);

  const valueOnClick = () =>{
    setDone(true)
  }
  const destroy= () =>{
    setRemoved(true)
  }

  const { className, date, value } = props;

  if (removed) {
    return null;
  } else
    return (
      <li className={done ? "completed" : null} onClick={valueOnClick}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{value}</span>
            <span className="created">{date}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={destroy}></button>
        </div>
        {className === "editing" ? (
          <input type="text" className="edit" defaultValue={value} />
        ) : null}
      </li>
    );
}
