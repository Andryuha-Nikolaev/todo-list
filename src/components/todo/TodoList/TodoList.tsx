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

  const uncompletedTodos = useMemo(() => todos.filter((item) => !item.isCompleted), [todos]);

  const completedTodos = useMemo(() => todos.filter((item) => item.isCompleted), [todos]);

  const handleNewTodo = (todo: string) => {
    const trimTodo = todo.trim();
    if (trimTodo.length) {
      if (todosFilter === 'Completed') {
        setTodosFilter('All');
      }
      setTodos((prevTodos) => [{ text: trimTodo, isCompleted: false }, ...prevTodos]);
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
    <div className={s['block']}>
      <div className={s['background2']} />
      <div className={s['background']} />

      <div className={s['wrap']}>
        <TodoForm onSubmit={handleNewTodo} />
        <ul className={s['list']}>
          {todos.filter(filters[todosFilter]).map((item) => {
            const realIndex = todos.indexOf(item);

            return (
              <TodoItem
                key={`todo-item-${realIndex}`}
                item={item}
                index={realIndex}
                onClick={toggleTodo}
              />
            );
          })}
        </ul>
        <div className={s['bottom-wrap']}>
          <TodoCount itemsLeft={uncompletedTodos.length} />
          <div className={s['btns-wrap']}>
            {Object.keys(filters).map((filterName) => (
              <TodoFilterBtn
                key={`filter-name-${filterName}`}
                onClick={handleFilter}
                filterName={filterName}
                active={filterName === todosFilter}
              />
            ))}
          </div>
          <ClearCompletedBtn
            completedItems={completedTodos.length}
            onClick={handleClearCompleted}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
