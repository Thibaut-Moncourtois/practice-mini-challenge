/* eslint-disable react/button-has-type */

// J'importe le hook useState
import React, { useState } from 'react';

function Counter() {
  // Déclaration de ma variable d'etat
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Incrémenter de {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez</button>
    </div>
  );
}

export default Counter;
