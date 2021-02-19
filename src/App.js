import React, { useState, useEffect, useRef } from 'react';
import { v1 as uudidv4 } from 'uuid';

import './App.css';




const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault()

    setTodos([...todos, {
      text: inputValue,
      id: uudidv4()
    }])

  }

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addTodo}>
          <input type="text"
            placeholder="Add a task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <p>{todo.text}</p>
          </div>
        ))}
      </div>


    </div>
  );
}

export default App;
