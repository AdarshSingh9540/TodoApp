import React, { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from './components/createTodo';
import { Todos } from './components/Todos';
import { ShoWTodos } from './components/ShowTodos';

interface Todo {
  id: string;
  title: string;
  description: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setTodos(json.todos);
      console.log(json.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
      <div>
        {todos.length > 0 ? (
          todos.map(todo => (
            <ShoWTodos
              key={todo.id}
              title={todo.title}
              description={todo.description}
            />
          ))
        ) : (
          <p>No todos available</p>
        )}
      </div>
    </div>
  );
}

export default App;
