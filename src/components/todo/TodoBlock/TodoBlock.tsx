import s from './TodoBlock.module.scss';
import TodoList from '../TodoList/TodoList';

const TodoBlock = () => {
  return (
    <section className={s['block']}>
      <div className={s['wrap']}>
        <h1 className={s['title']}>todos</h1>
        <TodoList />
      </div>
    </section>
  );
};

export default TodoBlock;
