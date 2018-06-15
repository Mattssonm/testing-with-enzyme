import React, { Component } from 'react';
import List from './List.js';
import Counter from './counter.js';
import Transformers from './Transformers.js';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Lab 35</h1>
        <List />
        <Counter />
        <Transformers />
      </div>
    );
  }
}

export default App;
