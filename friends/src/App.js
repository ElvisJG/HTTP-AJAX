import React from 'react';
import './App.css';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Friends from './components/FriendsCard';
import Meme from './spongebob.png';

class App extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    Axios.get('https://localhost:5000/friends').then(res => {
      this.setState({
        friends: res.data
      })
        .then(() => {
          return Axios.get('http://localhost:5000/friends');
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log('Error:', err);
        });
    });
  }

  render() {
    const { friends } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>The Gang's All Here</h1>
          <div className='friends and form'>
            {/* Much Friends Very wow 🐶 */}
            <Friends {...friends} friends={friends} />
          </div>
          <img src={Meme} alt='Spongebobs Hand' className='meme' />
        </header>
      </div>
    );
  }
}

export default App;
