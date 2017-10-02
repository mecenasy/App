import * as React from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';

export default  class App extends React.Component<{}, {}> {
   public render() {
      return (
         <div className={'container'}>
            <AddTodo />
            <VisibleTodoList />
            {/* <Footer /> */}
         </div>
      );
   }
}
