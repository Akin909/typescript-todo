import React, { Component } from 'react';
import AddTodo from './../AddTodo';
import * as styles from './Todos.css';

interface Todo {
  body: string,
  title: string,
  completed: boolean
}

interface State {
  title: string,
  body: string,
  completed: boolean,
  todos: Todo[]
}

class Todos extends Component<{}, State> {
  public state = {
    body: '',
    completed: false,
    title: '',
    todos: [
      { title: 'Todo 1', body: 'A have to do a thing', completed: false }
    ],
  };

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value, id } } = e;
    switch (id) {// TODO Dynamic access [id] not working
      case 'title':
        this.setState({ title: value });
      case 'body':
        this.setState({ body: value });
      default:
        return;
    }
  };

  public addTodo = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
          {this.state.todos.map((todo: Todo, index: number) => (
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
