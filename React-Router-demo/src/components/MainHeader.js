import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

function MainHeader(props) {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;