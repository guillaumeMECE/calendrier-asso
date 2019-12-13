import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Event from './components/event';
import Timeline from './components/timeline';
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        {/* <Event /> */}
        <Timeline />
      </div>
    );
  };
}

export default withRouter(props => <App {...props} />);