import React, { useState } from 'react';
import s from './TodoForm.module.scss';
import btnImg from '../../../assets/img/todo-submit-btn-img.svg';

interface ITodoForm {
  onSubmit: (todo: string) => void;
}

const TodoForm = ({ onSubmit }: ITodoForm) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(newTodo);
    setNewTodo('');
  };

  return (
    <form className={s['form']} onSubmit={handleSubmit}>
      <button
        data-testid="todo-submit-btn"
        className={s['btn']}
        disabled={!newTodo.length}
        type="submit">
        <div className={s['img']}></div>
      </button>
      <input
        data-testid="todo-form-input"
        placeholder="What needs to be done?"
        className={s['input']}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
