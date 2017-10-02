import * as C from './constants';

export const todosListReducer = (state = C.todosListInitialState, action: C.TodosAction): C.TodosListState => {
   const { type, id, completed } = action;
   switch (type) {
      case C.ActionType.AddTodoSuccess: {
         const todos = state.todos;
         const newState = {
            todos: [...todos, singleTodoReducer(undefined, action)],
            filter: '',
         };
         return newState;
      }
      case C.ActionType.AddTodo:
      case C.ActionType.AddTodoFail:
      case C.ActionType.DelTodo:
      case C.ActionType.DelTodoFail:
      case C.ActionType.GetTodos:
      case C.ActionType.GetTodosFail:
      case C.ActionType.ToggleTodo:
      case C.ActionType.ToggleTodoFail:
         return state;
      case C.ActionType.ToggleTodoSuccess: {
         const todoElem = state.todos.map(todo => {
            const newTodo = todo;
            if (todo.id === action.id) {
               return {
                  id: todo.id,
                  text: todo.text,
                  completed: !todo.completed,
               };
            }
            return todo;
         });
         const newState = {
            todos: [...todoElem],
            filter: '',
         };
         return newState;
      }
      case C.ActionType.DelTodoSuccess: {
         const filterTodos = state.todos.filter(item => item.id !== id);
         const newState = {
            todos: filterTodos,
            filter: '',
         };
         return newState;
      }
      default:
         return state;
   }
};

export const singleTodoReducer = (state = C.singleTodoInitialState, action: C.TodosAction): C.Todo => {
   const { type, id, text, completed } = action;
   switch (type) {
      case C.ActionType.AddTodoSuccess:
         return {
            id,
            text,
            completed,
         };
      case C.ActionType.ToggleTodoSuccess:
         state.completed = !state.completed;
         return state;

      default:
         return state;
   }
};
