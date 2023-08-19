
import Task from "./Task";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
export default function TaskList(props) {
  const { onDeleted, onToggleDone, data, onToggleEdit, onEdit} = props;



  const elements = data.map((item) => {
    const { id, ...itemProps } = item; // className = item.className см. в файле App.js 7стр.
    return (
      <Task
        {...itemProps}
        key={id}
        date={formatDistanceToNow(new Date(), { addSuffix: true })}
        data={item}
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
