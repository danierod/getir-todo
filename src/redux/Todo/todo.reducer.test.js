import { createTodo, updateTodo } from './todo.actions';
import reducer from './todo.reducer';

describe('Todo reducer', () => {
  const defaultTodo = { title: 'default', id: 1 };
  const prefilledState = { items: [defaultTodo] };

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ items: [] });
  });

  test('should handle a todo being added on initial state', () => {
    expect(reducer(undefined, createTodo(defaultTodo))).toEqual({
      items: [defaultTodo],
    });
  });

  test('should handle a todo being added on existing state', () => {
    expect(reducer(prefilledState, createTodo(defaultTodo))).toEqual({
      items: [defaultTodo, defaultTodo],
    });
  });

  test('should handle a todo being updated', () => {
    const updatedTodo = { ...defaultTodo, title: 'updated' };
    expect(reducer(prefilledState, updateTodo(updatedTodo))).toEqual({
      items: [updatedTodo],
    });
  });
});
