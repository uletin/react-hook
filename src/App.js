import { useState } from 'react';
import './App.css';
import UseEffect from './components/UseEffect'

function App() {
  const [toogle, setToogle] = useState(true)
  const handleToogle = () => setToogle(currentState => !currentState)
  return (
    <div className="App">
      <button onClick={handleToogle}>Toogle</button>
      {toogle && <UseEffect />}
    </div>
  );
}

export default App;
