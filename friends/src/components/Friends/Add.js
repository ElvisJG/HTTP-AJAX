import React, { Component } from 'react';

import { FaAddressCard } from 'react-icons/fa';
import './Friends.css';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postMessage = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
  };

  render() {
    return (
      <div className='friends-inputs-wrapper'>
        <h1>Add a New Friend</h1>
        <form onSubmit={this.postMessage}>
          <input
            type='text'
            name='name'
            className='input-zone'
            placeholder='Your Friends Name...'
            onChange={this.handleChange}
            value={this.state.friend.name}
          />

          <input
            type='number'
            name='age'
            className='input-zone'
            placeholder='Your Friends Age...'
            onChange={this.handleChange}
            value={this.state.friend.age}
          />

          <input
            type='email'
            name='email'
            className='input-zone'
            placeholder='Your Friends Email...'
            onChange={this.handleChange}
            value={this.state.friend.email}
          />

          <button className='button' type='submit'>
            Add Friend! <FaAddressCard size='2rem' />
          </button>
        </form>
      </div>
    );
  }
}
