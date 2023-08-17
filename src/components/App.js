import React, {useState} from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";

export default function App() {
  let count = 100;

  const createTask = (text) => {
    return{
      className: null,
      value: text,
      id: count++
    }
  }

  const [data, setData] = useState([
    createTask('first'),
    createTask('second'),
    createTask('third')
  ]);
  const onDeleted = (id) => {
    const idx = data.findIndex((el)=> el.id === id)
    setData(data.toSpliced(idx,1))
  }
  const onToggleDone = (id) => {
    let copy = JSON.stringify(data)
    let endCopy = JSON.parse(copy)

    let idx = data.findIndex((el)=> el.id === id);
    endCopy[idx].done = !data[idx].done
    setData(endCopy)
    //console.log(endCopy[0] == data)
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList data = {data}
         onDeleted = {(id)=>onDeleted(id)}
         onToggleDone = {(id)=>onToggleDone(id)}/>
        <Footer data = {data} />
      </section>
    </section>
  );
}
