export default function Task(props) {
  const { className, date, value, onDeleted, onToggleDone, data } = props;

  return (
    <li className={data.done ? "completed" : null}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label onClick={onToggleDone}>
          <span className="description">{value}</span>
          <span className="created">{date}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {className === "editing" ? (
        <input type="text" className="edit" defaultValue={value} />
      ) : null}
    </li>
  );
}
