import { rest } from 'msw';

let todos = [];

export const clearTodos = () => {
  todos = [];
};

const addTodo = (todo) => {
  todos.push(todo);
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
    addTodo(req.body);
    return res(ctx.status(200), ctx.json(req.body));
  }),

  rest.put('/todos', (req, res, ctx) => {
    updateTodo(req.body);
    return res(ctx.status(200), ctx.json(req.body));
  }),
];

export default handlers;
