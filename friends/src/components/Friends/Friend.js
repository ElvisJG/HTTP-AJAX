import React from 'react';
import { NavLink } from 'react-router-dom';

import './Friends.css';
import { FaPencilAlt } from 'react-icons/fa';

export default props => {
  const friend = props.friends.find(
    i => String(i.id) === props.match.params.id
  );

  if (!friend) {
    return <div>Searching Friend Database...</div>;
  }

  return (
    <div>
      <div className='friend-card-wrapper' key={friend.id}>
        <div className='text-content'>
          <h1 className='friend-name'>{friend.name}</h1>
          <h1 className='friend-age'>Age: {friend.age}</h1>
          <h1 className='email'>{friend.email}</h1>
          <NavLink to={`/edit/${friend.id}`}>
            <FaPencilAlt size='3rem' class='friend-icon' />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
