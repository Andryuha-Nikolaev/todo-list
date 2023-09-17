import React from 'react';

interface ITodoCount {
  itemsLeft: number;
}

const TodoCount = ({ itemsLeft }: ITodoCount) => {
  return <div>{itemsLeft} items left</div>;
};

export default TodoCount;
