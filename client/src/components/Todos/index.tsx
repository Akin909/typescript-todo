import React, { Component } from 'react';
import AddTodo from './../AddTodo';
import * as styles from './Todos.css';

interface todos {
  body: string,
  title: string,
  completed: boolean
}

interface State {
  title: string,
  body: string,
  completed: boolean,
  todos: Array<todos>
}

class Todos extends Component<object, State> {
  state = {
    todos: [
      { title: 'Todo 1', body: 'A have to do a thing', completed: false }
    ],
    body: '',
    title: '',
    completed: false
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { currentTarget: { value, id } } = e;
    if (id !== 'todos') {
      this.setState({ [id]: value });
    }
  };

  addTodo = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { title, completed, body } = this.state;
    this.setState({
      todos: [...this.state.todos, { title, completed, body }]
    });
  };

  public render() {
    return (
      <div className={styles.todoContainer}>
        <h1>Todos</h1>
        <ul>
          {this.state.todos.map((todo: todos, index: number) => (
            <li key={index}>
              <h2>{todo.title}</h2>
              <p>{todo.body}</p>
              <input type="radio" checked={todo.completed} />
            </li>
          ))}
        </ul>
        <AddTodo onChange={this.handleChange} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Todos;
