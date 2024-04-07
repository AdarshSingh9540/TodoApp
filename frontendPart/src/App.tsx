import React, { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from './components/createTodo';
import { Todos } from './components/Todos';
import { ShoWTodos } from './components/ShowTodos';


interface Todo {
  _id: string;
  title: string;
  description: string;
}
function App() {
  const [todos, setTodos] = useState([]); 

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      console.log(response)
      const json = await response.json(); 
      setTodos(json.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <CreateTodo /> 
      <Todos todos={todos} />
      <div>

        {todos.map((todo: any) => (
          <ShoWTodos
            key={todo._id}
            title={todo.title}
            description={todo.description}
          />
        ))}

        <button onClick={fetchTodos} className='bg-green-500 p-2'>Show TOdo</button>
      </div>
    </div>
  );
}

export default App;
