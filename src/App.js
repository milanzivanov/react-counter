import { useState } from "react";
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    setCount(count + increment);
  }

  return (
    <div className="App">
      <Button 
        increment={1}
        onClickFunction={incrementCount}>
      </Button>
      <Button 
        increment={10}
        onClickFunction={incrementCount}>
      </Button>
      <Button 
        increment={100}
        onClickFunction={incrementCount}>
      </Button>
      <Button 
        increment={1000}
        onClickFunction={incrementCount}>
      </Button>

      <span>{count}</span>
    </div>
  );
}

export default App;
