import * as C from './constants';

export const getTodos = (): C.TodosAction => ({
   type: C.ActionType.GetTodos,
});

export const getTodosFail = (): C.TodosAction => ({
   type: C.ActionType.GetTodosFail,
});
export const getTodosByFilter = (filter: string): C.TodosAction => ({
   type: C.ActionType.GetTodosByFilter,
   filter,
});

export const getTodosByFilterFail = (): C.TodosAction => ({
   type: C.ActionType.GetTodosByFilterFail,
});

// incrementing and decrementing
export const addTodo = (text: string): C.TodosAction => ({
   type: C.ActionType.AddTodo,
   text,
});

export const addTodoSuccess = (id: string, text: string, completed: boolean): C.TodosAction => ({
   type: C.ActionType.AddTodoSuccess,
   id,
   text,
   completed,
});

export const addTodoFail = (): C.TodosAction => ({
   type: C.ActionType.AddTodoFail,
});

export const delTodo = (id: string): C.TodosAction => ({
   type: C.ActionType.DelTodo,
   id,
});

export const delTodoSuccess = (id: string): C.TodosAction => ({
   type: C.ActionType.DelTodoSuccess,
   id,
});

export const delTodoFail = (id: string): C.TodosAction => ({
   type: C.ActionType.DelTodoFail,
   id,
});
export const toggleTodo = (id: string): C.TodosAction => ({
   type: C.ActionType.ToggleTodo,
   id,
});

export const toggleTodoSuccess = (id: string, text: string, completed: boolean): C.TodosAction => ({
   type: C.ActionType.ToggleTodoSuccess,
   id,
   text,
   completed,
});

export const toggleTodoFail = (id: string): C.TodosAction => ({
   type: C.ActionType.ToggleTodoFail,
   id,
});
