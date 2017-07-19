import React, { Component } from 'react';
import * as styles from './App.css';
import Todos from './components/Todos/Todos';

class App extends Component {
  render() {
    return (
      <div>
        <header className="nav">TypeScript Todo App</header>
        <Todos />
      </div>
    );
  }
}

export default App;
