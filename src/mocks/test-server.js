import { setupServer } from 'msw/node';
import handlers, { clearTodos } from './handlers';

const server = setupServer(...handlers);
const clearData = clearTodos;

export * from 'msw';
export { server, clearData };
