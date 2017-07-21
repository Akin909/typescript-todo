import React, { Component } from 'react';
import * as styles from './App.css';
import Todos from './Todos';

const App = () =>
  <div className={styles.appContainer}>
    <header className={`${styles.nav} ${styles.flex}`}>TypeScript Todos</header>
    <Todos />
  </div>;

export default App;
