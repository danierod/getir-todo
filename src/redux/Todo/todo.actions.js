import { createAction, nanoid } from '@reduxjs/toolkit';

export const CREATE = 'todos/create';
export const UPDATE = 'todos/update';

export const createTodo = createAction(CREATE, function prepare(todo) {
  return {
    payload: {
      ...todo,
      id: nanoid(),
    },
  };
});

export const updateTodo = createAction(UPDATE);
