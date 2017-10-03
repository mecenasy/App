import * as React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FilterLink from './FilterLink';
export default class ToggleBar extends React.Component<{}, {}> {
   public render() {
      return (
         <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}>
               <FilterLink filter={'all'}>
                  All
               </FilterLink>
            </ToggleButton>
            <ToggleButton value={2}>
               <FilterLink filter={'completed'}>
                  Completed
               </FilterLink>
            </ToggleButton>
            <ToggleButton value={3}>
               <FilterLink filter={'active'}>
                  Active
               </FilterLink>
            </ToggleButton>
         </ToggleButtonGroup>

      );
   }
}
