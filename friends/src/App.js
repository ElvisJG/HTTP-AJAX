import React from 'react';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Meme from './spongebob.png';

import FriendsCard from './components/FriendsCard';
import Nav from './components/Nav';
import Add from './components/Add';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
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

  render() {
    const { friends } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <Nav />
          <h1>The Gang's All Here</h1>
        </header>
        <div className='friends and form'>
          {/* Much Friends Very wow 🐶 */}
          <Route
            exact
            path='/add'
            render={props => <Add {...props} friends={friends} />}
          />
          <img src={Meme} alt='Spongebobs Hand' className='meme' />
          <Route
            exact
            path='/'
            render={props => <FriendsCard {...props} friends={friends} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
