import React, { useState } from 'react';

export default function NewTaskForm(props) {
  const { onAddItem } = props;
  const [text, setText] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const changeValueHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'text') {
      setText(value);
    }
    if (name === 'sec') {
      setSec(value);
    }
    if (name === 'min') {
      setMin(value);
    }
  };
  const submitItem = (e) => {
    e.preventDefault();
    onAddItem(text, min, sec);
    setText('');
    setSec('');
    setMin('');
  };
  // 1
  return (
    <form className="new-todo-form" onSubmit={submitItem}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        onInput={changeValueHandler}
        value={text}
        name="text"
      />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Min"
        onInput={changeValueHandler}
        value={min}
        name="min"
        min={0}
        step={1}
      />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Sec"
        name="sec"
        onInput={changeValueHandler}
        value={sec}
        min={0}
        step={1}
      />
      <button type="submit" aria-label="submit" hidden />
    </form>
  );
}

NewTaskForm.defaultProps = {
  onAddItem: () => {},
};
