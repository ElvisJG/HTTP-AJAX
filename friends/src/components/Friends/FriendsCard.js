import React from 'react';

import './Friends.css';
import { MdDelete } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';

export default class FriendsCard extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    console.log(this.props);
    return (
      <div className='friends'>
        {this.props.friends.map(friend => (
          <div className='friend-card-wrapper' key={friend.id}>
            <div className='text-content'>
              <h1 className='friend-name'>{friend.name}</h1>
              <h1 className='friend-age'>Age: {friend.age}</h1>
              <h1 className='email'>{friend.email}</h1>
              <FaPencilAlt size='3rem' class='friend-icon' />
              <MdDelete size='3rem' class='friend-icon' />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
