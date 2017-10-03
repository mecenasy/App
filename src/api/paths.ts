const protocol = 'http://';
const host = 'localhost';
const port = ':3001';
const basePath = [protocol, host, port].join('');

export const todosList = basePath + '/todos';
export const todo = todosList + '/:id';

export const getTodosByFilter = (filter: string) => {
   if (filter === 'active') {
      const path = todosList + '?completed=true';
      return path;
   } else if (filter === 'completed') {
      const path = todosList + '?completed=false';
      return path;
   }
};
