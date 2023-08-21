import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default function Task(props) {
  Task.defaultProps = {
    value: 'New Task',
  };

  const { value, onDeleted, onToggleDone, task, onToggleEdit, onEdit, id } =
    props;

  const [editValue, setEditValue] = useState(value);

  const changeTaskHandler = (e) => {
    setEditValue(e.currentTarget.value);
  };
  const sumbitChange = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEdit(editValue, id);
    }
  };

  return (
    <li className={task.done ? 'completed' : task.editing ? 'editing' : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          id={id}
          checked={task.done}
          onChange={onToggleDone}
        />
        <label htmlFor={id}>
          <span className="description">
            {value === '' ? Task.defaultProps.value : value}
          </span>
          <span className="created">
            {formatDistanceToNow(task.createDate, {
              addSuffix: true,
              includeSeconds: true,
            })}
          </span>
        </label>
        <button
          type="button"
          className="icon icon-edit"
          onClick={onToggleEdit}
          aria-label="edit"
        />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={onDeleted}
          aria-label="delete"
        />
      </div>
      {task.editing ? (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <form onKeyDown={sumbitChange}>
          <input
            type="text"
            className="edit"
            defaultValue={editValue}
            onInput={changeTaskHandler}
          />
        </form>
      ) : null}
    </li>
  );
}

Task.propTypes = {
  value: PropTypes.string,
  task: PropTypes.instanceOf(Object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
