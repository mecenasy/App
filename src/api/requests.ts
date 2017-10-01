import * as paths from './paths';
import req from './apiProxy';
import { v4 } from 'node-uuid';

const pathParams = require('path-params');
const p = pathParams.pathParams;

const replaceParam = (toReplace) => (path, replaceWith) => {
   return path.replace(toReplace, replaceWith.toString());
};

const replaceId = replaceParam(':id');

export function addTodo(text: string) {
   return req.post(paths.todosList, {
      completed: false,
      id: v4(),
      text,
   });
}

export function removeTodo(id: string) {
   return req.delete(replaceId(paths.todo, id));
}

export function getTodos() {
   return req.get(paths.todosList);
}
