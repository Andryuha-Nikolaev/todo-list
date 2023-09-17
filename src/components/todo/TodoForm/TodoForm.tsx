import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button disabled={!newTodo.length} type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
