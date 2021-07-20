import { render, screen } from './utils/test-utils';
import App from './App';

test('renders landing page', () => {
  render(<App />);

  const titleElement = screen.getByText(/Getir - TODO/i);
  const todoListElement = screen.getByText(/Todo List/i);
  const createTodoButton = screen.getByText(/Create Todo/i);

  expect(titleElement).toBeInTheDocument();
  expect(todoListElement).toBeInTheDocument();
  expect(createTodoButton).toBeInTheDocument();
});
