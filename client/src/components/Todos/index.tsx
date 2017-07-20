import React, { Component } from 'react';
import AddTodo from './../AddTodo';
import uuid from 'uuid'
import * as styles from './Todos.css';

interface Todo {
  body: string,
  title: string,
  completed: boolean,
  id: string
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
      { title: 'World Domination', body: 'Do a thing, take over the world whatever', completed: false }
    ],
  };

  public handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { currentTarget: { value, id } } = e;
    switch (id) {// TODO Dynamic access [id] not working
      case 'title':
        this.setState({ title: value });
      case 'body':
        this.setState({ body: value });
      default:
        return;
    }
  };

  public addTodo = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { title, completed, body } = this.state;
    this.setState({
      todos: [...this.state.todos, { title, completed, body }]
    });
  };

  public render() {
    const { todos } = this.state
    return (
      <div className={styles.todoContainer}>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo: Todo, index: number) => (
            <li className={styles.todo} key={index}>
              <h2 className={styles.todoSpacing}>{todo.title}</h2>
              <p className={styles.todoSpacing}>{todo.body}</p>
              <input onClick={this.handleChange} id="completed" className={styles.todoSpacing} type="radio" checked={todo.completed} />
            </li>
          ))}
        </ul>
        <AddTodo onChange={this.handleChange} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Todos;
