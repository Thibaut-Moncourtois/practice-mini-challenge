import React from 'react';
import HeaderCounter from '../Header';
import Counter from './Counter/Counter';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderCounter />
      <Counter />
    </div>
  );
}

export default App;
