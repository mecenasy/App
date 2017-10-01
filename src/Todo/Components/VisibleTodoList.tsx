import * as React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoElement from './TodoElement';
class VisibleTodoList extends React.Component<{}, {}> {
   public render() {
      return (
         <div className={'container'}>
            <AddTodo />
            <TodoElement/>
         </div>
      );
   }
}

export default connect(

)(VisibleTodoList);
