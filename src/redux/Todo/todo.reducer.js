import { TODO_CREATE, TODO_SET, TODO_UPDATE } from './todo.actions';

const INITIAL_STATE = {
  items: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TODO_SET:
      return {
        ...state,
        items: [...payload.items],
      };

    case TODO_CREATE:
      return {
        ...state,
        items: [...state.items, payload],
      };

    case TODO_UPDATE: {
      const index = state.items.findIndex(
        (prevTodo) => prevTodo.id === payload.id,
      );
      const newTodos = [...state.items];
      newTodos[index] = payload;

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
