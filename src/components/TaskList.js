import PropTypes from 'prop-types';

import Task from './Task';

export default function TaskList(props) {
  const { onDeleted, onToggleDone, data, onToggleEdit, onEdit, onClose } =
    props;

  const elements = data.map((item) => {
    const { id, ...itemProps } = item; // className = item.className см. в файле App.js 7стр.
    return (
      <Task
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...itemProps}
        key={id}
        task={item}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onToggleEdit={() => onToggleEdit(id)}
        onEdit={onEdit}
        id={id}
        onClose={() => onClose(id)}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
