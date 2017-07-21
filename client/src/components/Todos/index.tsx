import React, { Component } from 'react';
import uuid from 'uuid';

import AddTodo from './../AddTodo';
import * as styles from './Todos.css';
import './Todos.css';

interface Todo {
  body: string;
  title: string;
  completed: boolean;
  id: string;
}

interface State {
  title: string;
  body: string;
  completed: boolean;
  todos: Todo[];
  visibilityFilter: boolean;
}

type TodoHandler =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.MouseEvent<HTMLInputElement>;

class Todos extends Component<{}, State> {
  public state = {
    body: '',
    completed: false,
    title: '',
    todos: [
      {
        body: 'Do a thing, take over the world whatever',
        completed: false,
        id: uuid(),
        title: 'World Domination'
      }
    ],
    visibilityFilter: false
  };
  public totalTodos: (t: Todo[]) => number = todos =>
    todos.reduce((acc, todo) => {
      if (todo.completed) {
        acc++;
      }
      return acc;
    }, 0);

  public handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { currentTarget: { value, id } } = e;
    switch (id) { // TODO Dynamic access [id] not working
      case 'title':
        this.setState({ title: value });
      case 'body':
        this.setState({ body: value });
      default:
        return;
    }
  };

  public addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, completed, body } = this.state;
    const id = uuid();
    this.setState({
      todos: [...this.state.todos, { title, completed, body, id }]
    });
  };

  public editTodo = (e: TodoHandler) => {
    const { todos } = this.state;
    const { currentTarget: { id, name, value } } = e;
    const selectedIndex: number = todos.findIndex(
      (todo: Todo) => todo.id === id
    );
    const updated = {
      ...todos[selectedIndex],
      [name]: name === 'completed' ? !todos[selectedIndex].completed : value
    };
    const updatedTodos: Todo[] = [
      ...todos.slice(0, selectedIndex),
      updated,
      ...todos.slice(selectedIndex + 1)
    ];
    this.setState({ todos: updatedTodos });
  };

  public toggleVisibility: () => void = () =>
    this.setState({ visibilityFilter: !this.state.visibilityFilter });

  public render() {
    const { todos, visibilityFilter } = this.state;
    return (
      <div className={styles.todoContainer}>
        <ul className={styles.todoList}>
          {todos.map((todo: Todo) => {
            if (visibilityFilter && !todo.completed) {
              return null;
            }
            return (
              <li className={styles.todo} key={todo.id}>
                <textarea
                  name="title"
                  id={todo.id}
                  onChange={this.editTodo}
                  defaultValue={todo.title}
                  className={`${styles.todoSpacing} ${styles.todoTextarea}`}
                />
                <textarea
                  defaultValue={todo.body}
                  className={`${styles.todoSpacing} ${styles.todoTextarea}`}
                  onChange={this.editTodo}
                  name="body"
                  id={todo.id}
                />
                <input
                  onClick={this.editTodo}
                  name="completed"
                  id={todo.id}
                  className={`${styles.todoSpacing} ${styles.todoCheckbox}`}
                  type="radio"
                  checked={todo.completed}
                />
              </li>
            );
          })}
        </ul>
        <div>
          <h2>
            {'Completed: ' + this.totalTodos(todos)}
          </h2>
          <button
            className={styles.todoVisibility}
            onClick={this.toggleVisibility}
          >
            {visibilityFilter ? 'Show All' : 'Show Completed'}
          </button>
        </div>
        <AddTodo onChange={this.handleChange} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Todos;
