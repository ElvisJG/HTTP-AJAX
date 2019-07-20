import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';
import { FaPlus } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';

export default function Nav() {
  return (
    <div className='nav'>
      <NavLink exact to='/add'>
        <div className='nav-wrapper'>
          <FaPlus className='icon' size='2rem' />
        </div>
      </NavLink>
      <NavLink exact to='/'>
        <div className='nav-wrapper'>
          <MdHome className='icon' size='2rem' />
        </div>
      </NavLink>
    </div>
  );
}
