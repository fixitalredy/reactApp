import React, { useState, useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

import Timer from './Timer';

export default function Task(props) {
  Task.defaultProps = {
    value: 'New Task',
  };

  const {
    value,
    onDeleted,
    onToggleDone,
    task,
    onToggleEdit,
    onEdit,
    id,
    onClose,
    time,
  } = props;

  const [editValue, setEditValue] = useState(value);

  const changeTaskHandler = (e) => {
    setEditValue(e.currentTarget.value);
  };
  const sumbitChange = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEdit(editValue, id);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      onClose(id);
    }
  };
  const closeHandler = (event) => {
    if (task.editing && !event.target.closest('.editing')) {
      event.preventDefault();
      onClose(id);
    }
  };
  useEffect(() => {
    document.addEventListener('click', closeHandler);

    return () => {
      document.removeEventListener('click', closeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.editing]);

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
          <span className="title">
            {value === '' ? Task.defaultProps.value : value}
          </span>
          <span className="description">
            <Timer time={time} createDate={task.createDate} />
            <span className="description">
              {' '}
              {formatDistanceToNow(task.createDate, {
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
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
        <form className="form" onKeyDown={sumbitChange} onClick={closeHandler}>
          <input
            type="text"
            className="edit"
            defaultValue={value}
            onInput={changeTaskHandler}
          />
        </form>
      ) : null}
    </li>
  );
}
// 1
Task.propTypes = {
  value: PropTypes.string,
  task: PropTypes.instanceOf(Object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
