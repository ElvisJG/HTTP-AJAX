import React from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';

import FriendsCard from './components/Friends/FriendsCard';
import Nav from './components/Nav/Nav';
import Add from './components/Friends/Add';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postSuccessMessage: '',
      postError: '',
      addSuccessMessage: '',
      addError: '',
      deleteSuccessMessage: '',
      deleteError: ''
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log('Error:', err);
      });
  }

  addFriend = friends => {
    Axios.post('http://localhost:5000/friends', friends)
      .then(response => {
        this.setState({
          postError: '',
          postSuccessMessage: response.data.successMessage
        });
      })
      .catch(err => {
        this.setState({
          postError: err.response.Error,
          postSuccessMessage: ''
        });
      });
  };

  editFriend = (id, updatedFriend) => {
    Axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(response => {
        this.setState({
          postError: '',
          putSuccessMessage: response.data.successMessage
        });
      })
      .catch(err => {
        this.setState({
          postError: err.response.Error,
          postSuccessMessage: ''
        });
      });
  };

  render() {
    const { friends } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <Nav />
          <h1>FriendBook</h1>
        </header>
        <div className='content'>
          <div className='friends and form'>
            <Route
              exact
              path='/add'
              render={() => (
                <Add
                  addFriend={this.addFriend}
                  postSuccessMessage={this.state.postSuccessMessage}
                  postError={this.state.postErrorMessage}
                />
              )}
            />
            <Route
              exact
              path='/'
              render={props => (
                <FriendsCard
                  {...props}
                  friends={friends}
                  putMessage={this.putMessage}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
