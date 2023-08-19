import React, {useState} from "react";
export default function Task(props) {
  const {date, value, onDeleted, onToggleDone, data, onToggleEdit, onEdit, id} = props;

  const [editValue, setEditValue] = useState(value);

  const changeTaskHandler = (e) => {
    setEditValue(e.currentTarget.value)
  }
  const sumbitChange = (event) => {
    if(event.key === "Enter") {
      event.preventDefault()
      onEdit(editValue,id);
    }
  }

  return (
    <li className={data.done ? "completed" : data.editing ? "editing" : null}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label onClick={onToggleDone}>
          <span className="description">{value}</span>
          <span className="created">{date}</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {data.editing ? (
        <form onKeyDown={sumbitChange}>
          <input type="text" className="edit" defaultValue={editValue}
                onInput={changeTaskHandler} />
        </form>
      ) : null}
    </li>
  );
}
