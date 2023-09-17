/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

describe('TodoList', () => {
  it('удаляет завершенные задачи при нажатии на кнопку "Очистить завершенные"', () => {
    render(<App />);

    const todoFormInput = screen.getByTestId('todo-form-input');
    const todoSubmitBtn = screen.getByTestId('todo-submit-btn');
    const todoClearBtn = screen.getByTestId('todo-clear-btn');

    const task1 = 'Задача-1';
    const task2 = 'Задача-2';

    fireEvent.change(todoFormInput, {
      target: { value: task1 },
    });
    fireEvent.click(todoSubmitBtn);

    fireEvent.change(todoFormInput, { target: { value: task2 } });
    fireEvent.click(todoSubmitBtn);

    const todoItemBtn = screen.getByTestId(task1);

    fireEvent.click(todoItemBtn);
    fireEvent.click(todoClearBtn);

    // Проверка, что завершенная задача удалена из списка
    expect(screen.queryByTestId(task1)).toBeNull();
    // Проверка, что незавершенная задача в списке
    expect(screen.getByTestId(task2)).toBeInTheDocument();
  });
});
