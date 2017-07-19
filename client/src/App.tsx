import React, { Component } from 'react';
import styles from './App.css';
import Todos from './components/Todos/Todos';

class App extends Component {
  state = {
    todos: [{ title: 'Todo 1', body: 'A have to do a thing', completed: false }]
  };
  render() {
    return (
      <div>
        <header className="nav">TypeScript Todo App</header>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
