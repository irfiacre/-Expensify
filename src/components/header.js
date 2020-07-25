import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import bxMenu from '@iconify/icons-bx/bx-menu';
import closeIcon from '@iconify/icons-carbon/close';

const Header =()=>{

const [headerState,setHeaderState]=useState({
    openMenu:false,
});

const openMenu = ()=>{
    setHeaderState({ ...headerState, openMenu:true})
}
const closeMenu = ()=>{
    setHeaderState({ ...headerState, openMenu:false})
}

return (
    <header className= 'header'>

        <h1 >Expensify</h1>
        
        <div className='navigators'>
            <div className='menuIcon'>
                {
                    headerState.openMenu?(<Icon icon={closeIcon} onClick={closeMenu}/>):(<Icon icon={bxMenu} onClick={openMenu}/>)
                }
            </div>
            <div className={headerState.openMenu?'mobileLinks':'links'}>
            <div className='link'>
                <NavLink to="/" exact activeClassName="isActive" className='navLink'>Home</NavLink>
            </div>
            
            <div className='link'>
                <NavLink to="/create" activeClassName="isActive" className='navLink'>Create Expense</NavLink>
            </div>
            </div>
        </div>
    </header>
)}; 

export default Header;