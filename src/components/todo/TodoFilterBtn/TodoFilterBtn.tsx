import s from './TodoFilterBtn.module.scss';
import classNames from 'classnames';

interface ITodoFilterBtn {
  filterName: string;
  onClick: (filterName: string) => void;
  active: boolean;
}

const TodoFilterBtn = ({ filterName, onClick, active }: ITodoFilterBtn) => {
  return (
    <button
      className={classNames(s['btn'], active && s['active'])}
      onClick={() => onClick(filterName)}>
      {filterName}
    </button>
  );
};

export default TodoFilterBtn;
