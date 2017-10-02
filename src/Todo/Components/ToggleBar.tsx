import * as React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class ToggleBar extends React.Component<{}, {}> {
   public render() {
      return (
         <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}>
               <NavLink
                  exact={true}
                  to={'/'}
                  activeStyle={{ textDecoration: 'none', color: 'black' }}
               >
                  All
               </NavLink>
            </ToggleButton>
            <ToggleButton value={2}>
               <NavLink
                  exact={true}
                  to={'/completed'}
                  activeStyle={{ textDecoration: 'none', color: 'black' }}
               >
                  Completed
               </NavLink>
            </ToggleButton>
            <ToggleButton value={3}>
               <NavLink
                  exact={true}
                  to={'/active'}
                  activeStyle={{ textDecoration: 'none', color: 'black' }}
               >
                  Active
               </NavLink>
            </ToggleButton>
         </ToggleButtonGroup>

      );
   }
}
