import React, { Component } from 'react';
import Axios from 'axios';

import { FaAddressCard } from 'react-icons/fa';
import './Friends.css';

export default class Add extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createFriend = e => {
    e.preventDefault();
    console.log(this.state);

    const { name, age, email } = this.state;
    const payload = { name, age, email };

    Axios.post('http://localhost:5000/friends', payload)
      .then(response => {
        console.log(response);
        this.props.updateFriends(response.data);

        this.setState({
          errorMessage: null
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorMessage: err.response.data.error
        });
      });
  };

  render() {
    const { name, age, email } = this.state;

    return (
      <div className='friends-inputs-wrapper'>
        <h1>Add a New Friend</h1>
        <form onSubmit={this.createFriend}>
          <input
            type='text'
            name='name'
            className='input-zone'
            placeholder='Your Friends Name...'
            onChange={this.handleChange}
            value={name}
          />

          <input
            type='number'
            name='age'
            className='input-zone'
            placeholder='Your Friends Age...'
            onChange={this.handleChange}
            value={age}
          />

          <input
            type='email'
            name='email'
            className='input-zone'
            placeholder='Your Friends Email...'
            onChange={this.handleChange}
            value={email}
          />

          <button className='button' type='submit'>
            Add Friend! <FaAddressCard size='2rem' />
          </button>
        </form>
      </div>
    );
  }
}
