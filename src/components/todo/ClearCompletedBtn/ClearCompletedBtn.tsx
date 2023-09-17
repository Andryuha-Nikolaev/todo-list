import s from './ClearCompletedBtn.module.scss';

interface IClearCompletedBtn {
  onClick: () => void;
  completedItems: number;
}

const ClearCompletedBtn = ({ onClick, completedItems }: IClearCompletedBtn) => {
  return (
    <button
      data-testid="todo-clear-btn"
      className={s['btn']}
      disabled={completedItems === 0}
      onClick={onClick}>
      Clear completed
    </button>
  );
};

export default ClearCompletedBtn;
