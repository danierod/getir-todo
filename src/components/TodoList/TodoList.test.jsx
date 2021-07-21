import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '../../utils/test-utils';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('renders empty TodoList', () => {
    render(<TodoList />);

    const todoListElement = screen.getByText(/Todo List/i);
    const createTodoButton = screen.getByText(/Create Todo/i);

    expect(todoListElement).toBeInTheDocument();
    expect(createTodoButton).toBeInTheDocument();
  });

  test('adds a todo item when create todo button is clicked', async () => {
    render(<TodoList />);

    const createTodoButton = screen.getByText(/Create Todo/i);

    expect(createTodoButton).toBeInTheDocument();

    fireEvent.click(createTodoButton);
    await screen.findAllByText(/TODO\s[0-9]/i);

    expect(screen.getAllByText(/TODO\s[0-9]/i).length).toEqual(1);
    expect(screen.getAllByText(/Update Todo/i).length).toEqual(1);
  });

  test('updates a todo item when update todo button is clicked', async () => {
    render(<TodoList />);

    const createTodoButton = screen.getByText(/Create Todo/i);

    expect(createTodoButton).toBeInTheDocument();

    fireEvent.click(createTodoButton);
    await screen.findByText(/TODO\s[0-9]/i);
    expect(screen.getByText(/TODO\s[0-9]/i)).toBeInTheDocument();

    const updateTodoButton = screen.getByText(/Update Todo/i);
    expect(updateTodoButton).toBeInTheDocument();

    fireEvent.click(updateTodoButton);
    await screen.findAllByText(/U-TODO\s[0-9]/i);

    expect(screen.getAllByText(/U-TODO\s[0-9]/i).length).toEqual(1);
  });

  test('marks a todo as completed when mark as completed button is clicked', async () => {
    render(<TodoList />);
    const createTodoButton = screen.getByText(/Create Todo/i);

    expect(createTodoButton).toBeInTheDocument();

    fireEvent.click(createTodoButton);
    await screen.findAllByText(/TODO\s[0-9]/i);
    expect(screen.getAllByText(/TODO\s[0-9]/i).length).toEqual(1);

    const markCompletedButton = screen.getByText(/Mark completed/i);
    expect(markCompletedButton).toBeInTheDocument();

    fireEvent.click(markCompletedButton);
    await waitForElementToBeRemoved(markCompletedButton);
    expect(screen.queryByText(/Mark completed/i)).toBeNull();
  });
});
