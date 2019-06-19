import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
  }

  
  componentDidMount() {
    axios.get('/test').catch(err => console.log('Error'))
    
  }

  test() {
    axios.get('/test')
  }

  render() {
    return (
      <div className="App">
      <span>Click Button, Check Terminal</span>
      <br/>
      <button onClick={this.test}>Click</button>
      </div>
    );
  }
}

export default App;
