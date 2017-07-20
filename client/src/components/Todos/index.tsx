import React, { Component } from 'react';
import uuid from 'uuid'

import AddTodo from './../AddTodo';
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
      { title: 'World Domination', body: 'Do a thing, take over the world whatever', completed: false, id: uuid() }
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

  public addTodo = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    const { title, completed, body } = this.state;
    const id = uuid()
    this.setState({
      todos: [...this.state.todos, { title, completed, body, id }]
    });
  };

  public editTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { todos } = this.state;
    const { target: { id, name } } = e;
    const selectedIndex = todos.findIndex((todo: Todo) => todo.id === id)
    const updated = {
      ...todos[selectedIndex],
      [name]: 'fish'
    }
    console.log('updated', updated);
    const newState = {
      ...todos.slice(0, selectedIndex),
      updated,
      ...todos.slice(selectedIndex)
    }
  }

  public render() {
    const { todos } = this.state
    return (
      <div className={styles.todoContainer}>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo: Todo) => (
            <li className={styles.todo} key={todo.id}>
              <textarea name="title" id={todo.id} 
              onChange={this.editTodo} 
              defaultValue={todo.title} 
              className={`${styles.todoSpacing} ${styles.todoTextarea}`}/>
              <textarea defaultValue={todo.body} className={`${styles.todoSpacing} ${styles.todoTextarea}`} onChange={this.editTodo} name="body" id={todo.id}/>
              <input onClick={this.editTodo} name="completed" id={todo.id} className={styles.todoSpacing} type="radio" checked={todo.completed} />
            </li>
          ))}
        </ul>
        <AddTodo onChange={this.handleChange} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Todos;
