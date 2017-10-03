import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface FilterLinkProps {
    filter: string;
    children: any;
}
export default class FilterLink extends React.Component<FilterLinkProps, {}> {
    public render() {
        const {
            children,
            filter,
        } = this.props;
        return (
            <NavLink
                exact={true}
                to={filter === 'all' ? '/' : '/' + filter}
                activeStyle={{ textDecoration: 'none', color: 'blue' }}
            >
                {children}
            </NavLink>
        );
    }
}
