export interface Todo {
   id: string;
   text: string;
   completed: boolean;
}
export interface TodoState {
   todos: Todo[];
   filter: string;
}
export type TodosListState = TodoState;

export const singleTodoInitialState = { id: '', text: '', completed: false } as Todo;

export const todosListInitialState = { todos: [] as Todo[], filter: '' } as TodosListState;

export enum ActionType {
   GetTodos = 'todosApp/GET_TODOS',
   GetTodosFail = 'todosApp/GET_TODOS_FAIL',
   GetTodosByFilter = 'todosApp/GET_TODOS_BY_FILTER',
   GetTodosByFilterFail = 'todosApp/GET_TODOS_BY_FILTER_FAIL',
   AddTodo = 'todosApp/ADD_TODO',
   AddTodoSuccess = 'todosApp/ADD_TODO_SUCCESS',
   AddTodoFail = 'todosApp/ADD_TODO_FAIL',
   DelTodo = 'todosApp/DEL_TODO',
   DelTodoSuccess = 'todosApp/DEL_TODO_SUCCESS',
   DelTodoFail = 'todosApp/DEL_TODO_FAIL',
   ToggleTodo = 'todosApp/TOGGLE_TODO',
   ToggleTodoSuccess = 'todosApp/TOGGLE_TODO_SUCCESS',
   ToggleTodoFail = 'todosApp/TOGGLE_TODO_FAIL',
}

export interface TodosAction {
   type: ActionType;
   id?: string;
   text?: string;
   completed?: boolean;
   filter?: string;
}
