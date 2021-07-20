import { CREATE, UPDATE } from './todo.types';

export const createTodo = (todo) => {
  return {
    type: CREATE,
    todo,
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE,
    todo,
  };
};
