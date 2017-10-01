import * as React from 'react';
import { connect } from 'react-redux';
import * as A from '../Reducers/actions';

class AddTodo extends React.Component<{dispatch: any}, {}> {

   public render() {
      let input: any;

      return (
         <div>
            <input ref={(node) => { input = node; }} autoFocus={true} />
            <button onClick={() => {  this.props.dispatch(A.addTodo(input.value));  input.value = ''; }}>
               AddTodo
                </button>
         </div>
      );
   }
}

export default connect(

)(AddTodo);
