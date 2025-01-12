import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello, React SSR!</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App; 