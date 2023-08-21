import React from 'react';
import PropTypes from 'prop-types';

import TaskFilter from './TaskFilter';

export default function Footer(props) {
  const { data, onChangeHandler, currentFilter, onClearCompleted } = props;
  const onCount = (tasks) => {
    const count = tasks.filter((el) => !el.done);
    return count.length;
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        {onCount(data)}
        items left
      </span>
      <TaskFilter
        data={data}
        onChangeHandler={onChangeHandler}
        currentFilter={currentFilter}
      />
      <button
        type="submit"
        className="clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}
Footer.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};
