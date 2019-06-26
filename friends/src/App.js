import React from 'react';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Meme from './spongebob.png';

import FriendsCard from './components/FriendsCard';
import Nav from './components/Nav';

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
        <Nav />
        <header className='App-header'>
          <h1>The Gang's All Here</h1>
          <div className='friends and form'>
            {/* Much Friends Very wow 🐶 */}
            <Route
              exact
              path='/'
              render={props => <FriendsCard {...props} friends={friends} />}
            />
          </div>
          <img src={Meme} alt='Spongebobs Hand' className='meme' />
        </header>
      </div>
    );
  }
}

export default App;
