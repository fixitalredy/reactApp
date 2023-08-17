import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";

export default function App() {
  let count = 100;

  const createTask = (text) => {
    return {
      className: null,
      value: text,
      id: count++,
      done:false
    };
  };

  const [data, setData] = useState([
    createTask("first"),
    createTask("second"),
    createTask("third"),
  ]);
  const onDeleted = (id) => {
    const idx = data.findIndex((el) => el.id === id);
    setData(data.toSpliced(idx, 1));
  };

  const onToggleDone = (id) => {
    setData((data) => {
      const idx = data.findIndex((el) => el.id === id);
      const oldItem = data[idx];
      const newItem = {...oldItem, done: !oldItem.done}
      const endCopy = data.toSpliced(idx, 1, newItem)
      console.log(endCopy)
      return endCopy;
    });
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList
          data={data}
          onDeleted={(id) => onDeleted(id)}
          onToggleDone={(id) => onToggleDone(id)}
        />
        <Footer data={data} />
      </section>
    </section>
  );
}
