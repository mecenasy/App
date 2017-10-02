import * as React from 'react';
import { Todo } from '../Reducers/constants';
import TodoElement from './TodoElement';

export interface ITodoList {
    todos: Todo[];
    // onTodoClick: (id: string) => void;
}
export default class TodoList extends React.Component<ITodoList, {}> {
    public render() {
        const {
            todos,
            // onTodoClick,
        } = this.props;
        return (
            <ul className="list-style-type:none">
                {todos.map((todo: Todo) => <TodoElement key={todo.id} {...todo}  />)}
            </ul>
        );
    }
}

// onClick={() => {onTodoClick(todo.id); }}