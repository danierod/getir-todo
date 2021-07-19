import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Getir - TODO/i);
  expect(titleElement).toBeInTheDocument();
});
