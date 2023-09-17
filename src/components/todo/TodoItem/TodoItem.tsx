import classnames from 'classnames';
import s from './TodoItem.module.scss';

interface ITodoItem {
  item: {
    text: string;
    isCompleted: boolean;
  };
  index: number;
  onClick: (index: number) => void;
}

const TodoItem = ({ item, index, onClick }: ITodoItem) => {
  const { text, isCompleted } = item;

  return (
    <li
      onClick={() => onClick(index)}
      className={classnames(s['item'], isCompleted && s['completed'])}>
      {text} {isCompleted && 'выполнено'}
    </li>
  );
};

export default TodoItem;
