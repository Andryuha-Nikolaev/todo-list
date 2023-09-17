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
    <li className={classnames(s['item'], isCompleted && s['completed'])}>
      <div
        data-testid={text}
        onClick={() => onClick(index)}
        className={classnames(s['icon'], isCompleted && s['completed'])}></div>

      <p className={classnames(s['text'], isCompleted && s['completed'])}>{text}</p>
    </li>
  );
};

export default TodoItem;
