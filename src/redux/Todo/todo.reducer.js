import { CREATE, UPDATE } from './todo.types';

const INITIAL_STATE = {
  items: [],
};

const reducer = (state = INITIAL_STATE, { type, todo }) => {
  switch (type) {
    case CREATE:
      return {
        ...state,
        items: [...state.items, todo],
      };

    case UPDATE: {
      const index = state.items.findIndex(
        (prevTodo) => prevTodo.id === todo.id,
      );
      const newTodos = [...state.items];
      newTodos[index] = todo;

      return {
        ...state,
        items: newTodos,
      };
    }
    default:
      return state;
  }
};

export default reducer;
