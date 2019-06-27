import React from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';

import FriendsCards from './components/Friends/FriendsCards';
import Nav from './components/Nav/Nav';
import Add from './components/Friends/Add';
import Edit from './components/Friends/Edit';

class App extends React.Component {
  state = {
    friends: []
  };

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

  updateFriends = friends => {
    this.setState({ friends });
  };

  render() {
    const { friends } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <Nav />
          <h1>FriendBook</h1>
        </header>

        <Route
          path='/add'
          render={props => (
            <Add {...props} updateFriends={this.updateFriends} />
          )}
        />

        <Route
          exact
          path='/'
          render={props => <FriendsCards {...props} friends={friends} />}
        />

        <Route
          exact
          path='/edit/:id'
          render={
            <Edit
              {...friends}
              friend={friends}
              updateFriends={this.updateFriends}
            />
          }
        />
      </div>
    );
  }
}

export default App;
