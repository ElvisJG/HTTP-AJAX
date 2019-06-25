import React from 'react';

export default props => {
  console.log(props);
  return (
    <div className='friends'>
      {props.friends.map(friend => (
        <div className='friend-card-wrapper' key={friend.id}>
          <div className='friend-text'>
            <h2 className='friend-name'>{friend.name}</h2>
            <h4 className='friend-age'>{friend.age}</h4>
          </div>
          <h3 className='email'>{friend.email}</h3>
        </div>
      ))}
    </div>
  );
};
