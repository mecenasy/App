import * as React from 'react';
import { Label, Radio, Checkbox } from 'react-bootstrap';
interface TodoElementProps {
   // key: string;
   // id: string;
   text: string;
   completed: boolean;
  // onClick: () => void;
}
export default class TodoElement extends React.PureComponent<TodoElementProps, { checked: boolean }> {
   constructor(props: TodoElementProps) {
      super(props);
      this.state = { checked: this.props.completed };
   }

   private handleChecked = (e) => {
      this.setState({ checked: !this.state.checked });
   }
   public render() {
      const {
         completed,
        // onClick,
         text,
      } = this.props;

      return (

         <li >
            <Checkbox  onClick={this.handleChecked} >{text}</Checkbox>
         </li >

      );
   }
}
