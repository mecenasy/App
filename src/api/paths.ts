const protocol = 'http://';
const host = 'localhost';
const port = ':3001';
const basePath = [protocol, host, port].join('');

export const todosList = basePath + '/todos';
export const todo = todosList + '/:id';
