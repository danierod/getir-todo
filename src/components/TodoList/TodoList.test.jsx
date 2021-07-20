import { fireEvent, render, screen } from '../../utils/test-utils';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('renders empty TodoList', () => {
    render(<TodoList />);

    const todoListElement = screen.getByText(/Todo List/i);
    const createTodoButton = screen.getByText(/Create Todo/i);

    expect(todoListElement).toBeInTheDocument();
    expect(createTodoButton).toBeInTheDocument();
  });

  test('adds a todo item when create todo button is clicked', () => {
    render(<TodoList />);

    const createTodoButton = screen.getByText(/Create Todo/i);

    expect(createTodoButton).toBeInTheDocument();

    fireEvent.click(createTodoButton);
    expect(screen.getAllByText(/TODO\s[0-9]/i).length).toEqual(1);
    expect(screen.getAllByText(/Update Todo/i).length).toEqual(1);

    fireEvent.click(createTodoButton);
    expect(screen.getAllByText(/TODO\s[0-9]/i).length).toEqual(2);
    expect(screen.getAllByText(/Update Todo/i).length).toEqual(2);
  });

  test('updates a todo item when update todo button is clicked', () => {
    render(<TodoList />);

    const createTodoButton = screen.getByText(/Create Todo/i);

    expect(createTodoButton).toBeInTheDocument();

    fireEvent.click(createTodoButton);
    expect(screen.getAllByText(/TODO\s[0-9]/i).length).toEqual(1);

    const updateTodoButton = screen.getByText(/Update Todo/i);
    expect(updateTodoButton).toBeInTheDocument();

    fireEvent.click(updateTodoButton);
    expect(screen.getAllByText(/U-TODO\s[0-9]/i).length).toEqual(1);
  });
});
