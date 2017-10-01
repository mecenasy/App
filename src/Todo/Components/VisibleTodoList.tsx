import * as React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
class VisibleTodoList extends React.Component<{}, {}> {
   public render() {
      return (
         <div>
            <AddTodo />
         </div>
      );
   }
}

export default connect(

)(VisibleTodoList);
