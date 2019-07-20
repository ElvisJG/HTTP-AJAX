import React from 'react';
import { Link } from 'react-router-dom';

import './Friends.css';

export default props => {
  return (
    <div className='friends'>
      {props.friends.map(friend => (
        <Link to={`/friend/${friend.id}`} className='card-link' key={friend.id}>
          <div className='friend-card-wrapper'>
            <div className='text-content'>
              <h1 className='friend-name'>{friend.name}</h1>
              <h1 className='friend-age'>Age: {friend.age}</h1>
              <h1 className='email'>{friend.email}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
