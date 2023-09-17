import s from './ClearCompletedBtn.module.scss';

interface IClearCompletedBtn {
  onClick: () => void;
  completedItems: number;
}

const ClearCompletedBtn = ({ onClick, completedItems }: IClearCompletedBtn) => {
  return (
    <button className={s['btn']} disabled={completedItems === 0} onClick={onClick}>
      Clear completed
    </button>
  );
};

export default ClearCompletedBtn;
