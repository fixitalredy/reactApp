import TaskFilter from "./TaskFilter";

export default function Footer(props) {
  const{data} = props;
  const onCount = (data) =>{
    let count = data.filter((el)=> !el.done);
    return count.length
  } 
  return (
  <footer className="footer">
    <span className="todo-count">{onCount(data)} items left</span>
    <TaskFilter />
    <button className="clear-completed">Clear completed</button>
  </footer>) ;
}
