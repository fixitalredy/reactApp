
import PropTypes from 'prop-types'

export default function TaskFilter(props) {
  const { onChangeHandler, currentFilter } =  props;
  
  const filters = [
    { value: "All"},
    { value: "Active"},
    { value: "Completed"}
  ]

  const changeFilterHandler = (event) => {
    onChangeHandler(event.target.textContent)
  }

  return (
    <ul className="filters" onClick = {changeFilterHandler}>
      {filters.map((el)=>{
        return <li key = {el.value}>
            <button className = { el.value === currentFilter ? 'selected' : null}>{el.value}</button>
        </li>
       })
    }
    </ul>
  );
}
TaskFilter.defaultProps = {
  currentFilter: "All"
}
TaskFilter.propTypes = {
  onChangeHandler: PropTypes.func,
  currentFilter: PropTypes.string
}
