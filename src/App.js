import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Event from './components/event';
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <Event />
      </div>
    );
  };
}

export default withRouter(props => <App {...props} />);