import { rest } from 'msw';

const getSessionTodos = () => {
  return JSON.parse(sessionStorage.getItem('todos')) || [];
};

const addSessionTodo = (todo) => {
  sessionStorage.setItem('todos', JSON.stringify([...getSessionTodos(), todo]));
};

const updateSessionTodo = (todo) => {
  const currentTodos = getSessionTodos();
  const index = currentTodos.findIndex(
    (sessionTodo) => sessionTodo.id === todo.id,
  );
  const updatedTodos = [...currentTodos];
  updatedTodos[index] = todo;
  sessionStorage.setItem('todos', JSON.stringify(updatedTodos));
};

const handlers = [
  rest.get('/todos', (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ items: getSessionTodos() })),
  ),

  rest.post('/todos', (req, res, ctx) => {
    addSessionTodo(req.body);
    return res(ctx.status(200), ctx.json(req.body));
  }),

  rest.put('/todos', (req, res, ctx) => {
    updateSessionTodo(req.body);
    return res(ctx.status(200), ctx.json(req.body));
  }),
];

export default handlers;
