import * as React from 'react';
import { Todo } from '../Reducers/constants';
import TodoElement, { TodoElementProps } from './TodoElement';

export interface ITodoList {
   todos: Todo[];
   onTodoClick: (id: string) => void;
}
export default class TodoList extends React.Component<ITodoList, {}> {
   public render() {
      const {
         todos,
         onTodoClick,
      } = this.props;

      const todosElement = todos.map((todo: Todo) => {
         const props: TodoElementProps = {
            completed: todo.completed,
            onClick: () => onTodoClick(todo.id),
            text: todo.text,
         };
         return <li key={todo.id}><TodoElement key={todo.id} {...props}/></li>;
      });
      return (
         <ul className="list-unstyled">
            {todosElement}
         </ul>
      );
   }
}

// onClick={() => {onTodoClick(todo.id); }}