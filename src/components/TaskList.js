
import Task from "./Task";
import PropTypes from 'prop-types'

export default function TaskList(props) {
  const { onDeleted, onToggleDone, data, onToggleEdit, onEdit} = props;


  const elements = data.map((item) => {
    const { id, ...itemProps } = item; // className = item.className см. в файле App.js 7стр.
    return (
      <Task
        {...itemProps}
        key={id}
        task={item}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onToggleEdit={() =>  onToggleEdit(id)}
        onEdit={onEdit}
        id={id}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.propTypes = {
  data: PropTypes.array.isRequired,
  onToggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
  onToggleEdit: PropTypes.func,
  onEdit:PropTypes.func,
}