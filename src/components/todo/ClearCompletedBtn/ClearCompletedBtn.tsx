import React from 'react';

interface IClearCompletedBtn {
  onClick: () => void;
}

const ClearCompletedBtn = ({ onClick }: IClearCompletedBtn) => {
  return <button onClick={onClick}>Clear completed</button>;
};

export default ClearCompletedBtn;
