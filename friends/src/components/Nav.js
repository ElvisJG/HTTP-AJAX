import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';
import { FaPlus } from 'react-icons/fa';

export default function Nav() {
  return (
    <NavLink exact to='/add'>
      <div className='nav-wrapper'>
        <FaPlus className='icon' size='4rem' />
      </div>
    </NavLink>
  );
}
