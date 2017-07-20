import React, { SFC } from 'react';
import * as styles from './AddTodo.css';

export interface Props {
  addTodo: () => void,
  onChange: (e: React.SyntheticEvent<EventTarget>) => void
}

const AddTodo: SFC<Props> = ({ addTodo, onChange }: Props) => (
  <div className={`${styles.addTodoContainer} {styles.flex}`}>
    <form onSubmit={addTodo} className={`${styles.addTodoForm} ${styles.flex}`}>
      <input
        className={`${styles.addTodoInput}`}
        onChange={onChange}
        id="title"
        type="text"
        placeholder="Add a Title"
      />
      <textarea onChange={onChange} id="body" />
      <button className={`${styles.addTodoInput} ${styles.addTodoButton}`}>
        Add A Todo
      </button>
    </form>
  </div>
);

export default AddTodo;
