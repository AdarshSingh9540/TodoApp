import React, { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from './components/createTodo';
import { Todos } from './components/Todos';
import { ShoWTodos } from './components/ShowTodos';
import axios from 'axios';

interface Todo {
  _id: string;
  title: string;
  description: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); 

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001/todos");
      const json = await response.json(); 
      setTodos(json.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/todo/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <CreateTodo /> 
      <Todos todos={todos} />
      <div>
        {todos.map((todo: Todo) => (
          <div key={todo._id}>
            <ShoWTodos
              title={todo.title}
              description={todo.description}
            />
            <button onClick={() => deleteTodo(todo._id)} className='bg-blue-600 text-white'>Delete</button>
          </div>
        ))}
        <button onClick={fetchTodos} className='bg-green-500 p-2'>Show Todo</button>
      </div>
    </div>
  );
}

export default App;
