import React from 'react';
import styles from './Todos.css';

export interface Props {
  todos: Array<Object>
}

const Todos = ({ todos }: Props) => (
  <div>
    <h1>Todos</h1>
  </div>
);

export default Todos;
