import React, { useState, useMemo } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

type Todo = {
  text: string;
  isCompleted: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const notCompletedTodos = useMemo(
    () => todos.filter((item) => item.isCompleted === false),
    [todos],
  );

  console.log(notCompletedTodos);

  const handleNewTodo = (todo: string) => {
    const trimTodo = todo.trim();
    if (trimTodo.length) {
      setTodos((prevTodos) => [...prevTodos, { text: trimTodo, isCompleted: false }]);
    }
    // setTodos([...todos, { text: todo, isCompleted: false }]);
  };

  // Обработчик для пометки выполненного дела
  const toggleTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  return (
    <div>
      <TodoForm onSubmit={handleNewTodo} />
      <ul>
        {/* {todos.map((item, index) => ( */}

        {todos
          // .filter(filters[currentFilter])
          .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
          .map((item, index) => (
            <TodoItem key={`todo-item-${index}`} item={item} index={index} onClick={toggleTodo} />
          ))}
      </ul>
      <div>
        <div>{notCompletedTodos.length} items left</div>
      </div>
    </div>
  );
};

export default TodoList;
