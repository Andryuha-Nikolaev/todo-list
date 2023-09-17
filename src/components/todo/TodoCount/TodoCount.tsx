import s from './TodoCount.module.scss';

interface ITodoCount {
  itemsLeft: number;
}

const TodoCount = ({ itemsLeft }: ITodoCount) => {
  return (
    <div className={s['wrap']}>
      <p>{itemsLeft} items left</p>
    </div>
  );
};

export default TodoCount;
