import React from 'react';

interface ITodoFilterBtn {
  filterName: string;
  onClick: (filterName: string) => void;
  active: boolean;
}

const TodoFilterBtn = ({ filterName, onClick, active }: ITodoFilterBtn) => {
  return <button onClick={() => onClick(filterName)}>{filterName}</button>;
};

export default TodoFilterBtn;
