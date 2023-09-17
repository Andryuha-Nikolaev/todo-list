import React, { useState, useMemo } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';
import TodoCount from '../TodoCount/TodoCount';
import TodoFilterBtn from '../TodoFilterBtn/TodoFilterBtn';
import ClearCompletedBtn from '../ClearCompletedBtn/ClearCompletedBtn';

import s from './TodoList.module.scss';

type Todo = {
  text: string;
  isCompleted: boolean;
};

interface IFilters {
  [key: string]: (todo: Todo) => boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const filters: IFilters = {
    All: () => true,
    Active: (todo: Todo) => !todo.isCompleted,
    Completed: (todo: Todo) => todo.isCompleted,
  };

  const [todosFilter, setTodosFilter] = useState('All');

  const handleFilter = (filterName: string) => {
    setTodosFilter(filterName);
  };

  console.log(todosFilter);

  const uncompletedTodos = useMemo(
    () => todos.filter((item) => item.isCompleted === false),
    [todos],
  );

  const handleNewTodo = (todo: string) => {
    const trimTodo = todo.trim();
    if (trimTodo.length) {
      setTodos((prevTodos) => [...prevTodos, { text: trimTodo, isCompleted: false }]);
    }
  };

  const toggleTodo = (index: number) => {
    setTodos(
      (prevTodos) =>
        prevTodos.map((todo, i) =>
          i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        ),
      // .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)),
    );
  };

  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div>
      <TodoForm onSubmit={handleNewTodo} />
      <ul className={s['list']}>
        {todos
          .filter(filters[todosFilter])
          // .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
          .map((item, index) => (
            <TodoItem key={`todo-item-${index}`} item={item} index={index} onClick={toggleTodo} />
          ))}
      </ul>
      <div>
        <TodoCount itemsLeft={uncompletedTodos.length} />
        <div>
          {Object.keys(filters).map((filterName) => (
            <TodoFilterBtn
              key={`filter-name-${filterName}`}
              onClick={handleFilter}
              filterName={filterName}
              active={filterName === todosFilter}
            />
          ))}
        </div>
        <ClearCompletedBtn onClick={handleClearCompleted} />
      </div>
    </div>
  );
};

export default TodoList;
