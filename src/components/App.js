import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";

export default function App() {

  
  const [data, setData] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('All')

  const onChangeHandler = (filter) => {
    setCurrentFilter(filter); 
  };
  const [count, setCount] = useState(100);

  const createTask = (text) => {
    return {
      className: null,
      value: text,
      id: count,
      done: false,
    };
  };


  const onDeleted = (id) => {
    setData((prev) => {
      const idx = prev.findIndex((el) => el.id === id);
      const newData = prev.toSpliced(idx, 1);
      return newData;
    });
  };

  const onToggleDone = (id) => {
    setData((p) => {
      const idx = data.findIndex((el) => el.id === id);
      const oldItem = data[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const endCopy = data.toSpliced(idx, 1, newItem);
      //console.log(endCopy)
      return endCopy;
    });
  };

  const addItem = (text) => {
    setCount((prev) => prev + 1);
    setData((prev) => {
      console.log(data);
      return [...prev, createTask(text)];
    });
  };
  
  const filteredTasks = data.filter((el) => {
    if (currentFilter === "Active") {
      return !el.done; 
    } else if (currentFilter === "Completed") {
      return el.done; 
    }
    return true; 
  });

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddItem={addItem} />
      </header>
      <section className="main">
        <TaskList
          data={filteredTasks}
          onDeleted={(id) => onDeleted(id)}
          onToggleDone={(id) => onToggleDone(id)}
        />
        <Footer data={data} 
                onChangeHandler = {onChangeHandler}
                currentFilter={currentFilter} />
      </section>
    </section>
  );
}
