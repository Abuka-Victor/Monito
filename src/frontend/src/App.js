import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    fetch('http://localhost:5500')
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <div>
      <h1>{state === undefined ? 'Loading...' : state.message}</h1>
    </div>
  );
}

export default App;
