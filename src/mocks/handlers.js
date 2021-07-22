import { rest } from 'msw';
import { v4 as uuidv4 } from 'uuid';

let todos = [];

export const clearTodos = () => {
  todos = [];
};

const addTodo = (todo) => {
  const newTodo = { ...todo, id: uuidv4(), isCompleted: false };
  todos.push(newTodo);
  return newTodo;
};

const updateTodo = (todo) => {
  const index = todos.findIndex((storedTodo) => storedTodo.id === todo.id);
  todos[index] = todo;
};

const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ items: todos }));
  }),

  rest.post('/todos', (req, res, ctx) => {
    const newTodo = addTodo(req.body);
    return res(ctx.status(200), ctx.json(newTodo));
  }),

  rest.put('/todos', (req, res, ctx) => {
    updateTodo(req.body);
    return res(ctx.status(200), ctx.json(req.body));
  }),
];

export default handlers;
