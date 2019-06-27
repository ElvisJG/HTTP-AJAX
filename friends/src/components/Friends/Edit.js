import React, { Component } from 'react';
import Axios from 'axios';

import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

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
    Axios.get(`http://localhost:5000/friend/${id}`)
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

  updateFriend = e => {
    e.preventDefault();

    const { name, age, email } = this.state;
    const payload = { name, age, email };
    const id = this.props.match.params.id;

    Axios.put(`http://localhost:5000/friend/${id}`, payload)
      .then(res => {
        this.props.updateItems(res.data);

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

  deleteItem = e => {
    e.preventDefault();

    const id = this.props.match.params.id;

    Axios.delete(`http://localhost:5000/friend/${id}`)
      .then(res => {
        this.props.updateItems(res.data);

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

  render() {
    const { name, age, email, errorMessage } = this.state;
    return (
      <div className='friends-inputs-wrapper'>
        <h1>Edit Friend</h1>
        <p>{errorMessage}</p>

        <form onSubmit={this.updateFriend}>
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
            Edit Friend! <FaPen size='2rem' class='friend-icon' />
          </button>

          <button onClick={this.deleteItem}>
            <MdDelete size='2rem' class='friend-icon' />
          </button>
        </form>
      </div>
    );
  }
}
