import React from 'react';

import './Friends.css';

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
            <div className='friend-text'>
              <h2 className='friend-name'>{friend.name}</h2>
              <h4 className='friend-age'>{friend.age}</h4>
            </div>
            <h3 className='email'>{friend.email}</h3>
          </div>
        ))}
      </div>
    );
  }
}
