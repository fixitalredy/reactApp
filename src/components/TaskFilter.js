import PropTypes from 'prop-types';

export default function TaskFilter(props) {
  const { onChangeHandler, currentFilter } = props;

  const filters = [
    { value: 'All' },
    { value: 'Active' },
    { value: 'Completed' },
  ];

  const changeFilterHandler = (event) => {
    onChangeHandler(event.target.textContent);
  };

  return (
    <div
      role="menuitem"
      tabIndex={0}
      onClick={changeFilterHandler}
      onKeyDown={changeFilterHandler}
    >
      <ul className="filters">
        {filters.map((el) => (
          <li key={el.value}>
            <button
              type="button"
              className={el.value === currentFilter ? 'selected' : null}
            >
              {el.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
TaskFilter.defaultProps = {
  currentFilter: 'All',
};
TaskFilter.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  currentFilter: PropTypes.string,
};
