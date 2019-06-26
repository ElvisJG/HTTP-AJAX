import React, { Component } from 'react';

import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage.js';
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
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  postMessage = e => {
    e.preventDefault();
    this.props.putMessage('72', this.state.friend);
  };

  render() {
    return (
      <div className='friends-inputs-wrapper'>
        <h1>Edit Friend</h1>
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
          {this.props.postError ? (
            <ErrorMessage message={this.props.postError} />
          ) : null}
          {this.props.postSuccessMessage ? (
            <SuccessMessage message={this.props.postSuccessMessage} />
          ) : null}
          <button className='button' type='submit'>
            Edit Friend! <FaAddressCard size='2rem' />
          </button>
        </form>
      </div>
    );
  }
}
