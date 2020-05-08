import React from 'react';
import {NavLink} from 'react-router-dom';
const Header =()=>(
    <header className= 'header'>

        <h1 >Expensify</h1>

        <div className='links'>
        <NavLink to="/" exact activeClassName="isActive" className='navLink'>Home</NavLink>
        <NavLink to="/create" activeClassName="isActive" className='navLink'>Create Expense</NavLink>
        <NavLink to="/help" activeClassName="isActive" className='navLink'>Help</NavLink>
        </div>
    </header>
); 

export default Header;