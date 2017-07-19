import React from 'react';
//import * as styles from './AddTodo.css';
export interface Props {
  addTodo: (input: Object) => void,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const AddTodo = ({ addTodo, onChange }: Props) => (
  <div>
    <form onClick={addTodo}>
      <input onChange={onChange} type="text" placeholder="Add a Title" />
      <textarea onChange={onChange} />
      <button>Add A Todo</button>
    </form>
  </div>
);

export default AddTodo;
