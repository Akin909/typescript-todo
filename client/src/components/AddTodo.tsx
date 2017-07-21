import React, { SFC } from 'react';
import * as styles from './AddTodo.css';

export interface Props {
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AddTodo: SFC<Props> = ({ addTodo, onChange }: Props) =>
  <div className={`${styles.addTodoContainer} {styles.flex}`}>
    <form onSubmit={addTodo} className={`${styles.addTodoForm} ${styles.flex}`}>
      <input
        className={`${styles.addTodoInput}`}
        onChange={onChange}
        id="title"
        type="text"
        placeholder="Add a Title"
      />
      <textarea
        className={`${styles.addTodoInput} ${styles.addTodoTextarea}`}
        onChange={onChange}
        id="body"
      />
      <button className={`${styles.addTodoInput} ${styles.addTodoButton}`}>
        Add A Todo
      </button>
    </form>
  </div>;

export default AddTodo;
