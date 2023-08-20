import TaskFilter from "./TaskFilter";

import PropTypes from 'prop-types'

export default function Footer(props) {
  const { data, onChangeHandler, currentFilter, onClearCompleted }  = props;
  const onCount = (data) => {
    let count = data.filter((el) => !el.done);
    return count.length;
  };
  return (
    <footer className="footer">
      <span className="todo-count">{onCount(data)} items left</span>
      <TaskFilter data = {data}
                  onChangeHandler = {onChangeHandler}
                  currentFilter={currentFilter} />
      <button className="clear-completed" onClick = {onClearCompleted}>Clear completed</button>
    </footer>
  );
}
Footer.propTypes = {
  data: PropTypes.array,
  onChangeHandler: PropTypes.func,
  onClearCompleted: PropTypes.func,
  currentFilter: PropTypes.string,
}