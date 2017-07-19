import React, { SFC } from 'react';
import * as styles from './AddTodo.css';

export interface Props {
  addTodo: () => void,
  onChange: (e: React.SyntheticEvent<EventTarget>) => void
}

const AddTodo: SFC<Props> = ({ addTodo, onChange }: Props) => (
  <div className={styles.addTodoContainer}>
    <form onClick={addTodo}>
      <input
        onChange={onChange}
        id="title"
        type="text"
        placeholder="Add a Title"
      />
      <textarea onChange={e => onChange(e)} id="body" />
      <button>Add A Todo</button>
    </form>
  </div>
);

export default AddTodo;
