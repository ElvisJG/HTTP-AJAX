import React, { Component } from 'react';
import Axios from 'axios';

import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

import './Friends.css';

export default class Add extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:5000/friends/${id}`)
      .then(response => {
        const { name, age, email } = response.data;
        this.setState({ name, age, email });
      })
      .catch(err => {
        this.setState({
          ErrorMessage: err.response.data.error
        });
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFriends = e => {
    e.preventDefault();

    const { name, age, email } = this.state;
    const payload = { name, age, email };
    const id = this.props.match.params.id;

    Axios.put(`http://localhost:5000/friends/${id}`, payload)
      .then(res => {
        this.props.updateFriends(res.data);

        this.setState({
          errorMessage: null
        });

        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errorMessage: err.response.data.error
        });
      });
  };

  deleteFriend = e => {
    e.preventDefault();

    const id = this.props.match.params.id;

    Axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.props.updateFriends(res.data);

        this.setState({
          errorMessage: null
        });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errorMessage: 'Oops'
        });
      });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div className='friends-inputs-wrapper'>
        <h1>Edit Friend</h1>

        <form onSubmit={this.updateFriends}>
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
            Edit Friend! <FaPen size='2rem' className='friend-icon' />
          </button>

          <button onClick={this.deleteFriend} className='button'>
            Delete Friend! <FaTrash size='2rem' className='friend-icon' />
          </button>
        </form>
      </div>
    );
  }
}
